import React, { Component } from 'react';
import { signUp } from '../../store/actions/authActions'
import { connect } from 'react-redux';

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
    this.props.history.push('/profile');
  }
  render() {
    const  { authError} = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Cadastro</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
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
