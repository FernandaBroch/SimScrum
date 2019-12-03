import React from 'react';
import { connect } from 'react-redux';

const NewGame = () => {
  
  return (
    <div>
      <div className="row">
        <div className='row card cyan'>
          <h2 className='col s12 m12 center white-text'>Bem-vindo ao SimScrum!</h2>
        </div>
        <div className='col s12 m6 l6'>
          <h4>O SimScrum visa auxiliar o ensino de métodos ágeis através de uma simulação. </h4>
          <h4>No próximo passo você irá selecionar um papel do Scrum e simular as suas atividades.</h4>
          <h5>Clique no botão Novo Jogo para dar início as atividades</h5>
        </div>
        <div className='col s12 m6 l6 center'>
          <img className="responsive-img" src="img/scrum.jpg" alt="" />
          <a href='https://usemobile.com.br/metodologia-scrum-desenvolvimento/'>Fonte: usemobile.com.br</a>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(NewGame);