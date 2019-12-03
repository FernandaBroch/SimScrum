import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ScrumLane from './ScrumLane'
import { dailyCalc, checkEndGame, allStoriesDone } from './DailyCalc'
import { updateStoryStatus, updateGameDayCount, deleteGame } from '../../../store/actions/boardActions'
import { Redirect } from 'react-router-dom';
import { config } from '../../../config/config'

class ScrumBoard extends Component {

  updateDay = (game, backlog, colleagues) => {
    const updateStatusCallback = (key, newStatus, skills, storyColleagues, addScrumMaster) => {
      this.props.updateStoryStatus(key, newStatus, skills, storyColleagues, addScrumMaster)
    };
    this.props.updateGameDayCount(game);
    dailyCalc(game, backlog, colleagues, updateStatusCallback, this.handleEndGame);
  }

  handleEndGame = (gameId, backlog, colleagues, gameResult) => {
    this.props.deleteGame(gameId, backlog, colleagues);
    if(gameResult === 'success') {
      console.log('success');
      this.props.history.push({ pathname: `/success` });
    } else {
      console.log('fail');
      this.props.history.push({ pathname: `/fail` });
    }
  };

  deleteGame = (gameId, backlog, colleagues) => {
    this.props.deleteGame(gameId, backlog, colleagues);
  }

  days = (game) => {            
    if (game == null) return
    return (
      <h5>Dia: {game.day} de {config.maxDays}</h5>
    );
  }

  render() {
    const { backlog, colleagues, game } = this.props;
    const { available, inDevelopment, test, done } = this.props;
    
    let gameId = '';
    if (backlog && colleagues) {

      gameId = this.props.match.params.id;

      
      if(game && (game.day > config.maxDays || allStoriesDone(backlog))) {
        this.handleEndGame(gameId, backlog, colleagues, checkEndGame(game, backlog));
      }
  
      const lanesMap = {
        'disponivel': available, 'desenvolvimento': inDevelopment,
        'teste': test, 'pronto': done
      };
      backlog.forEach((story) => {
        lanesMap[story.status].push({ ...story, assignedColleagues: colleagues.filter(x => x.story === story.id)});
      });
      if (!gameId) return <Redirect to='/profile' />
    };

    return (
      <div className='row white'>
        <div className='row card cyan section'>
          <h3 className='col s12 m12 center white-text'>Quadro Scrum (Kanban)</h3>
        </div>
        <div id="card-widgets" className="section">
          <div className='row'>
            <div className="col s2">
              <button className='waves-effect waves-light btn-large'
                onClick={e => this.updateDay(game, backlog, colleagues)}><i className='material-icons left'>alarm_on</i>Avançar Dia</button>
            </div>
            <div className="col s8 center">{this.days(game)}</div>
            <div className="col s2">
              <button className='waves-effect waves-light btn-large right red'
                onClick={e => this.deleteGame(gameId, backlog, colleagues)}><i className='material-icons left'>delete</i>Reiniciar Jogo</button>
            </div>
          </div>
        </div>
        <div id="card-widgets" className="seaction">
          <div className="row">

            <ScrumLane title="DISPONÍVEL" stories={available} color="pink" gameId={gameId} />
            <ScrumLane title="EM DESENVOLVIMENTO" stories={inDevelopment} color="blue" gameId={gameId} />
            <ScrumLane title="TESTE" stories={test} color="cyan" gameId={gameId} />
            <ScrumLane title="PRONTO" stories={done} color="teal" gameId={gameId} />

          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    game: state.firestore.ordered.games ? state.firestore.ordered.games[0] : {},
    backlog: state.firestore.ordered.backlog,
    colleagues: state.firestore.ordered.colleagues,
    available: [],
    inDevelopment: [],
    test: [],
    done: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStoryStatus: (key, status, storySkills, storyColleagues, addScrumMaster) =>
      dispatch(updateStoryStatus(key, status, storySkills, storyColleagues, addScrumMaster)),
    updateGameDayCount: (game) =>
      dispatch(updateGameDayCount(game)),
    deleteGame: (game, backlog, colleagues) =>
      dispatch(deleteGame(game, backlog, colleagues)),
  }
}

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'games',
      doc: props.match.params.id
    },
    {
      collection: 'backlog',
      where: ['game', '==', props.match.params.id]
    },
    {
      collection: 'colleagues',
      where: ['game', '==', props.match.params.id]
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps),
)(ScrumBoard)