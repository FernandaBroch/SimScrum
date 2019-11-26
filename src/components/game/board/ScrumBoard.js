import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import StoryCard from './StoryCard'
import { backlogToColleagues, createImpediments, checkScrumMaster, checkEndGame } from './DailyCalc'
import { updateStoryStatus, deleteGame } from '../../../store/actions/boardActions'
import { StatusEnum } from '../story/StatusEnum'
import { calcSuccess } from '../story/StoryCalc'
import { Redirect } from 'react-router-dom';

class ScrumBoard extends Component {
  
  dailyCalc = (backlog, colleagues) => {
    backlogToColleagues(backlog, colleagues).forEach((storyColleagues, key) => {
      //find the story in the backlog list
      const story = backlog.find(b => b.id === key);
      //get story status
      const status = StatusEnum.get(story.status);
      //check if the story is failed or success
      const impedimentOccur = createImpediments(calcSuccess(story.skills, storyColleagues))
      //if success change the status of the history to the next status
      const newStatus = impedimentOccur ? status.name : status.next;
      //check if the story already have a SM, don't need to add it again
      const scrumMaster = story.skills.find(s => s === 'Ty78gnxUYIuKLjwOHZLo');
      //Add or Remove SM
      const addScrumMaster = checkScrumMaster(impedimentOccur, scrumMaster, story.status);
      //Update the story
      this.props.updateStoryStatus(key, newStatus, story.skills, storyColleagues, addScrumMaster)      
    });     
    
    if (checkEndGame(backlog)) return this.props.history.push({pathname: `/final`})
  }

  deleteGame = (game, backlog, colleagues) => {
    this.props.deleteGame(game, backlog, colleagues)
  }

  render() {
    const { backlog, colleagues } = this.props;
    //console.log(backlog);
    let { disponivel, desenvolvimento, teste, pronto } = this.props;
    let gameId = ''
    if (backlog) {
      gameId = this.props.match.params.id
      backlog.forEach((s) => eval(`${s.status}.push(s)`))
      if (!gameId) return <Redirect to='/profile' />
    };


    return (
      <div className='row white section'>
        <div className='row'>
          <div className='s12 m12 center'><h3>Quadro Scrum (Kanban)</h3></div>
        </div>
        <div className='row'>
          <button className='waves-effect waves-light btn-large' onClick={e => this.dailyCalc(backlog, colleagues)}><i className='material-icons left'>alarm_on</i>Avançar Dia</button>
          <button className='waves-effect waves-light btn-large right red' onClick={e => this.deleteGame(this.props.match.params.id, backlog, colleagues)}><i className='material-icons left'>delete</i>Deletar Jogo</button>
        </div>

        <div id="card-widgets" className="seaction">
          <div className="row">
            <div className="col s12 m6 xl3">
              <ul id="task-card" className="collection with-header">
                <li className="collection-header pink lighten-1">
                  <h5 className="task-card-title mb-3">Disponível</h5>
                </li>
                {disponivel && disponivel.map((story, index) => (
                  <StoryCard
                    description={story.description}
                    id={story.id}
                    key={index}
                    game={gameId}
                    color='pink'
                  />

                ))}
              </ul>
            </div>

            <div className="col s12 m6 xl3">
              <ul id="task-card" className="collection with-header">
                <li className="collection-header blue lighten-1">
                  <h5 className="task-card-title mb-3">Em Desenvolvimento</h5>
                </li>
                {desenvolvimento && desenvolvimento.map((story, index) => (

                  <StoryCard
                    description={story.description}
                    id={story.id}
                    key={index}
                    game={gameId}
                    color='blue'
                  />

                ))}
              </ul>
            </div>

            <div className="col s12 m6 xl3">
              <ul id="task-card" className="collection with-header">
                <li className="collection-header cyan lighten-1">
                  <h5 className="task-card-title mb-3">Teste</h5>
                </li>
                {teste && teste.map((story, index) => (

                  <StoryCard
                    description={story.description}
                    id={story.id}
                    key={index}
                    game={gameId}
                    color='cyan'
                  />

                ))}
              </ul>
            </div>

            <div className="col s12 m6 xl3">
              <ul id="task-card" className="collection with-header">
                <li className="collection-header teal lighten-1">
                  <h5 className="task-card-title mb-3">Pronto</h5>
                </li>
                {pronto && pronto.map((story, index) => (

                  <StoryCard
                    description={story.description}
                    id={story.id}
                    key={index}
                    game={gameId}
                    color='teal'
                  />

                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
  return {

    auth: state.firebase.auth,
    games: state.firestore.data.games,
    backlog: state.firestore.ordered.backlog,
    colleagues: state.firestore.ordered.colleagues,
    disponivel: [],
    desenvolvimento: [],
    teste: [],
    pronto: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStoryStatus: (key, status, storySkills, storyColleagues, addScrumMaster) => dispatch(updateStoryStatus(key, status, storySkills, storyColleagues, addScrumMaster)),
    deleteGame: (game, backlog, colleagues) => dispatch(deleteGame(game, backlog, colleagues)),
  }
}

export default compose(
  firestoreConnect((props) => [
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