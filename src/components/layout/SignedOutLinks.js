import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/signup'>Cadastrar-se</NavLink></li>
      <li><NavLink to='/signin'>Entrar</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;