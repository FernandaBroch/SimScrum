import React, { Component } from 'react';
import { signUp } from '../../store/actions/authActions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    nickname: '',
    initials: ''    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);            
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/profile' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Cadastro</h5>
            <InputEmail handleChange={this.handleChange.bind(this)}/>
            <InputPassword handleChange={this.handleChange.bind(this)}/>
            <div className="input-field">
                <label htmlFor="nickname">NickName</label>
                <input type="text" id="nickname" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Cadastrar</button>
            </div>
            <div className="red-text center">
              { authError ? <p>{ authError } </p> : null }
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
