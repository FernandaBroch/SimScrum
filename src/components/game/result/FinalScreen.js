import React from 'react';
import { Link }  from 'react-router-dom';

const FinalScreen = (props) => {

  const possibilities = {
    success: { img: '../img/success.png', title: 'Parabéns!', text: 'Todas as histórias foram concluídas no prazo!' }, 
    fail: { img: '../img/fail.png', title: 'Derrota', text: 'Infelizmente o projeto não ficou pronto no prazo :(' }
  };

  const divStyle = {
    backgroundImage: `url( ${possibilities[props.result].img} )`,
    width: '100%',
    minHeight: '900px',
  }

  const divText = {
    fontSize: '45px',
    lineHeight: '1em',
    margin: '100px',
  }

  return (
    <div className='row white section'>
      <div className='col s12 m12 center'>
        <div style={divStyle}>
          <div className='col s3 m3 left' style={divText}>
            <h1>{possibilities[props.result].title}</h1>
            <p>{possibilities[props.result].text}</p>
            <Link to='/gameintro' className="waves-effect waves-light btn-large"><i className="material-icons left">add_circle</i>Novo Jogo</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalScreen;