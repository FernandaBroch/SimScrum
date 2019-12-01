import React from 'react';
import { Link } from 'react-router-dom';

const DevTeam = (props) => {
  const link = { pathname: `/myteam/${props.game}` }
  return (
    <div className="row">
      <div className='row card cyan section'>
        <h3 className='col s12 m12 center white-text'>Time de Desenvolvimento</h3>
      </div>
      <div className='col s12 m6 l6'>
        <h4>Você já tem um jogo em andamento no papel de Time de Desenvolvimento </h4>
        <div className="section">
          <div className='divider'></div>
          <h5>Clique em Meu Time para visualizar os membros do seu time:</h5>
          <div className=''>
            <Link to={link} className='waves-effect waves-light btn-large'><i className="material-icons left">group</i>Meu Time</Link>
          </div>
        </div>
        <div className='divider'></div>
        <h5>Clique no botão Continuar para voltar as atividades:</h5>
      </div>
      <div className='col s12 m6 l6 center'>
        <img className="responsive-img" src="../img/devteam.jpg" alt="" />
      </div>
    </div>
  )
}

export default (DevTeam);