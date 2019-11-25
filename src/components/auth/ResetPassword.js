import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendPasswordResetEmail } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import InputEmail from './InputEmail'

class ResetPassword extends Component {
  state = {
    email: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();    
    this.props.sendPasswordResetEmail(this.state.email);                   
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/profile' /> 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Recuperar Senha</h5>
            <InputEmail handleChange={this.handleChange.bind(this)}/>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Reenviar Senha</button>
                <div className="red-text center">
                  { authError ? <p>{authError}</p> : null }
                </div>
            </div>
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
    sendPasswordResetEmail: (emailAddress) => dispatch(sendPasswordResetEmail(emailAddress)),
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(ResetPassword)
