import React, { Component } from 'react';
import { connect } from 'react-redux';
import DnDBoard from './DnDBoard';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import BacklogButton from './BacklogButton';

class StoryDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      skills: '',
      description: '',
      backlog: ''

    }
  }

  render() {
    const { skills } = this.props;
    const { story } = this.props;    

    //if (!auth.uid) return <Redirect to='/signin' /> 
    if (story && skills) {
      let storySkills = Array.isArray(story.skills) ? story.skills : [story.skills]
      return (
        <div className='container'>
          <div className='row white section'>
            <BacklogButton id={story.game} />
            <h3 className='col s12 m12 center'>História: {story.description}</h3>
            <div className="row">
              <div className='col s12 m12'>
                <div className='card cyan darken-1'>
                  <div className="card-content white-text">
                    <h5 className=''>Habilidades Necessárias: </h5>
                    <div className="row">
                      {
                        storySkills.map((i, index) => {
                          const skill = skills.find(x => x.id === i);
                          return (
                            <div className="col s12 m4" key={index}>
                              <div className="card-panel grey lighten-5 z-depth-1">
                                <div className="row valign-wrapper">
                                  <div className="col s5 m5">
                                    <img src={skill.img} alt='skill logo' className="circle responsive-img" />
                                  </div>
                                  <div className="col s7 m7">
                                    <h5 className="black-text">
                                      {skill.name}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DnDBoard story={story} storyId={story.id} gameId={story.game} />
            <div className="row">
              <BacklogButton id={story.game} />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='container'>
          <div className='row white section'>
            <h3 className='col s12 center'>Carregando</h3>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let storyId = ownProps.match.params.id
  //console.log(state)
  let story = null
  // const story = state.firestore.ordered.backlog.length > 0 ? state.firestore.ordered.backlog[0] : null
  if (state.firestore.ordered.backlog && state.firestore.ordered.backlog.length === 1) {
    storyId = null
    story = state.firestore.ordered.backlog[0]    
    //console.log(state.firestore.ordered.backlog[0])
  }
  

  return {
    storyId: storyId,
    story: story,
    auth: state.firebase.auth,
    skills: state.firestore.ordered.skills,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return props.storyId !== null ? [
      {
        collection: 'backlog', doc: props.storyId
      }
    ] :
      [
        {
          collection: 'colleagues',
          where: ['game', '==', props.story.game]
        },
        { collection: 'skills' }
      ]
  })
)(StoryDetails)