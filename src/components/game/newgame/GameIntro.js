import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import NewGame from './NewGame';
import DevTeam from './DevTeam';

class GameIntro extends Component {

  render() {
    const { auth, games } = this.props;
    let game = [];
    let newGame = "waves-effect waves-light btn-large disabled";
    let oldGame = "waves-effect waves-light btn-large disabled";
    let oldGameLink = '';
    let myGame = '';
    let btGame = ''

    if (!auth.uid) return <Redirect to='/signin' />

    if (games && auth) {
      game = games.find(x => auth.uid === x.uid);
    }
    if (game === undefined) {
      newGame = "waves-effect waves-light btn-large"
      oldGameLink = ''
      myGame = <NewGame />
      btGame = <Link to='/selectrole' className={newGame}><i className="material-icons left">add_circle</i>Novo Jogo</Link>
    } else {
      oldGame = "waves-effect waves-light btn-large"
      oldGameLink = { pathname: `/board/${game.id}` }
      myGame = <DevTeam
        game={game.id} />
      btGame = <Link to={oldGameLink} className={oldGame}><i className="material-icons left">edit</i>Continuar</Link>
    }

    return (
      <div className="container white">
        {myGame}
        <div className="row section">
          <div className="col">
            {btGame}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    games: state.firestore.ordered.games
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'games' }
  ])
)(GameIntro)