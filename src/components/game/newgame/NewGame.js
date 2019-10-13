import React, {Component} from 'react';
import RoleCard from './RoleCard';
import { roles } from './Roles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { newGame } from '../../../store/actions/gameActions'

class NewGame extends Component{ 
  state = {
    role: ''
  }    
  
  handler = (role) => {
    this.setState({role: role })         
  }

  handleSubmit = (e) => {
    e.preventDefault();    
    this.props.newGame(this.state)     
    this.props.history.push('/backlog'); 
  }
    
  render(){
    const { auth, game } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
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
    game: state.firebase.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    newGame: (game) => dispatch(newGame(game))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewGame)