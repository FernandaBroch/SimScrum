import React, {Component} from 'react';
import StoryCard from './StoryCard';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { stories } from './BacklogList';


class StoryBoard extends Component{
  constructor(){
    super();
    this.state = {
      id: '',
      skills: '',
      objective: ''

    }
  }  
  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className='container'>
        <div className='row white'>
        <h3 className='col s12 center'>Story</h3>           
        <div className='row '>
          <div className='center col s6'>Time</div>
          <div className='center col s6'></div>          
        </div>
        <div className='row col s6'>
          <div className='center'>Dev1</div>
          <div className='center'>Dev1</div>
          <div className='center'>Dev1</div>
        </div> 
        <div className='row col s6'>
          <div className='center'>{stories.objective}</div>
          <div className='center'>Dev1</div>
          <div className='center'>Dev1</div>
        </div>         
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(StoryBoard)