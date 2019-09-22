import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props, handleSignOut) => {
  const { profile } = props;  
  return(
    <ul className="right">
      <li><NavLink to='/newgame'>Novo Jogo</NavLink></li>
      <li><Link to='/' onClick={props.signOut} >Sair</Link></li>
      <li><NavLink to='/profile' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
    </ul>      
  )
}

const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);