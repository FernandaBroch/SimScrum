import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }  
  handleSubmit = (e) => {
    e.preventDefault();    
    this.props.signIn(this.state);            
  }
 
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/profile' /> 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Entrar</h5>
            <InputEmail handleChange={this.handleChange.bind(this)}/>
            <InputPassword handleChange={this.handleChange.bind(this)}/>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Entrar</button>
                <div className="red-text center">
                  { authError ? <p>{authError}</p> : null }
                </div>
            </div>
            <a href='./resetpassword'>Esqueceu sua senha? Clique aqui</a>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signIn: (creds) => dispatch(signIn(creds))    
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(SignIn)
