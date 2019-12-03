import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import ColleagueCard from '../story/ColleagueCard';

const liStyle = {
  fontSize: '20px',
}

class MyTeam extends Component {

  render() {
    const { colleagues, skills } = this.props;
    if (colleagues) {
      if (!this.props.match.params.id) return <Redirect to='/profile' />
    };
    return (
      <div className="container white">
        <div className='row card cyan section'>
          <h3 className='col s12 m12 center white-text'>Meu Time </h3>
        </div>
        <div className='row'>
          <div className='col s12 m5 l5'>
            <div className='card-panel grey darken-1'>
              {skills !== undefined ?
                colleagues.map(col => {
                  return (
                    <ColleagueCard key={col.id} color='grey' colleague={col} skills={skills} />
                  );
                })
                : null
              }
            </div>
          </div>
          <div className='col s12 m7 l7'>
            <div className="section">
              <h5 className='valign-wrapper'>Esses são os membros do seu time de desenvolvimento</h5>
            </div>
            <div className='divider'></div>
            <div className="section">
              <h5>Cada um deles possui um nível de experiência. No SimScrum existem 3 níveis de experiência:</h5>
              <li style={liStyle}>Junior - Possui uma chance pequena de concluir a história</li>
              <li style={liStyle}>Pleno - Possui uma chance média de concluir a história</li>
              <li style={liStyle}>Senior - Possui uma chance grande de concluir a história</li>
            </div>
            <div className='divider'></div>
            <div className="section">
              <h5>Os membros do time também possuem habilidades diferentes. Cada história precisa de um certo tipo de habilidade para ser concluída com sucesso.</h5>
              {skills !== undefined ?
                skills.map(skill => {
                  return (
                    <div className="row valign-wrapper">
                      <div className="col s5 m2 l2">
                        <img src={skill.img} alt='skill logo' className="circle responsive-img" />
                      </div>
                      <div className="col s7 m10 l10">
                        <h5 className="black-text">
                          {skill.name}
                        </h5>
                      </div>
                    </div>
                  );
                })
                : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    colleagues: state.firestore.ordered.colleagues,
    skills: state.firestore.ordered.skills,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {
      collection: 'colleagues',
      where: ['game', '==', props.match.params.id]
    },
    { collection: 'skills' }
  ]),
)(MyTeam)

