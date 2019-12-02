import React, {Component} from 'react';
import ProfileCard from './ProfileCard';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class Profile extends Component{
  
  render(){
    const { auth, games } = this.props;
    let game = [];
    let newGame = "waves-effect waves-light btn-large disabled";
    let oldGame = "waves-effect waves-light btn-large disabled";
    let oldGameLink = '';
    
    if (!auth.uid) return <Redirect to='/signin' /> 

    if(games && auth){
      game = games.find(x => auth.uid === x.uid);
    }
    if (game === undefined){
      newGame = "waves-effect waves-light btn-large"
      oldGameLink = ''
    }else{
      oldGame = "waves-effect waves-light btn-large"    
      oldGameLink = {pathname: `/board/${game.id}`}
    } 
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <ProfileCard/>
          <div className="row">              
              <div className="col">
                <Link to='/selectrole' className={newGame}><i className="material-icons left">add_circle</i>Novo Jogo</Link>
              </div>
              <div className="col">
              <Link to={oldGameLink} className={oldGame}><i className="material-icons left">edit</i>Continuar</Link>
              </div>                
          </div>
        </form>
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
  )(Profile)