import React, {Component} from 'react';
import RoleCard from './RoleCard';
import { roles } from './Roles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { newGame } from '../../../store/actions/gameActions'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class NewGame extends Component{ 
  state = {
    role: ''    
  }    
  
  handler = (role) => {
    this.setState({role: role })         
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    const { backlog, colleagues, games } = this.props    
    this.props.newGame(this.state, backlog, colleagues);
    //console.log(this.props)
    //this.props.history.push({pathname: `/backlog/${auth.uid}`})
  }
    
  render(){
    const { auth, games } = this.props;
    //console.log(this.props)
    let game = [];
    let oldGameLink = '';
    if (!auth.uid) return <Redirect to='/signin' /> 

    if(games && auth){
      game = games.find(x => auth.uid === x.uid);
    }
    if (game === undefined){      
      oldGameLink = ''
    }else{      
      oldGameLink = {pathname: `/backlog/${game.id}`}
    } 
  
    if(game && auth){
      return <Redirect to={oldGameLink} /> 
    }
      return(
        <div className='container'>
          <div className='row white'>    
            <form onSubmit={this.handleSubmit}>                
              <div className='col s12 center'><h3>Escolha seu Papel</h3></div>                    
              {roles.map((role) => (
                <div className='col s4' key={role.name}>
                  <RoleCard                
                  name={role.name}
                  description={role.description}
                  image={role.image}
                  action={this.handler}
                  />
                </div>      
              ))}             
            </form>
          </div>
        </div>
      )
  }
}
const mapStateToProps = (state) => { 
 
  return {
    auth: state.firebase.auth,    
    colleagues: state.firestore.ordered.colleagues,
    backlog: state.firestore.ordered.backlog,
    games: state.firestore.ordered.games,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    newGame: (game, backlog, colleagues) => dispatch(newGame(game, backlog, colleagues))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'colleagues',
      where: ['game', '==', '']
    },
    { collection: 'backlog',
      where: ['game', '==', '']
    },
     { collection: 'games' },
  ])
  )(NewGame)