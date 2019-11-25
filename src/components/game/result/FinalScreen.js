import React from 'react';

const FinalScreen = (props) => {
  let img, text, title = ''
  if (props.result === 'success') {
    img = '../img/success.png'
    title = 'Parabéns!'
    text = 'Todas as histórias foram concluídas no prazo!'
  } else {
    img = '../img/fail.png'
    title = 'Derrota'
    text = 'Infelizmente o projeto não ficou pronto no prazo :('
  }
  const divStyle = {
    backgroundImage: `url( ${img} )`,
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
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default (FinalScreen);