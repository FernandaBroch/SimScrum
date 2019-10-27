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
    const { backlog, colleagues} = this.props
    this.props.newGame(this.state, backlog, colleagues);
    this.props.history.push('/backlog'); 
  }
    
  render(){
    const { auth, game } = this.props;
//    console.log(backlog)
    // if (!auth.uid) return <Redirect to='/signin' /> 
    if (game) return <Redirect to='/backlog' /> 
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
    game: state.firebase.game,
    colleagues: state.firestore.ordered.colleagues,
    backlog: state.firestore.ordered.backlog
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    newGame: (game, backlog, colleagues ) => dispatch(newGame(game, backlog, colleagues))
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
  ])
  )(NewGame)