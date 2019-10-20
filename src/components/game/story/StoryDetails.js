import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DnDBoard from './DnDBoard';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class StoryDetails extends Component{
  constructor(){
    super();
    this.state = {
      id: '',
      skills: '',
      description: ''

    }
  }

  render(){
    const { auth } = this.props;
    const { story } = this.props;
    
    //console.log(story);
    //if (!auth.uid) return <Redirect to='/signin' /> 
    if (story) {
      return (
        <div className='container'>
          <div className='row white section'>
            <h3 className='col s12 center'>História { this.props.match.params.id }</h3> 
            <div className="row">          
              <div className='col s12 m12'>
                <div className='card-panel cyan darken-1'>
                  <span className='white-text'>{story.description}</span>
                </div>
              </div>
            </div>
            <div className="row">          
              <div className='col s12 m12'>
                <div className='card-panel cyan darken-1'>
                  <span className='white-text'>{story.skills}</span>
                </div>
              </div>
            </div>
            <DnDBoard story={story} storyId={this.props.match.params.id}/>        
            <div className="row">
              <div className="col s12 m12 center">
                <Link to='/backlog' className="waves-effect waves-light btn-large"><i className="material-icons left">arrow_back</i>Backlog</Link>
              </div>             
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
  const id  = ownProps.match.params.id;
  const backlog = state.firestore.data.backlog;
  const story = backlog ? backlog[id] : null;
  
  return {
    auth: state.firebase.auth,
    story: story
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    {collection: 'backlog', doc: props.id}
  ])
)(StoryDetails)