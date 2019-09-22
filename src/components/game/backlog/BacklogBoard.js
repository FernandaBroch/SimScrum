import React, {Component} from 'react';
import BacklogCard from './BacklogCard';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { stories } from './BacklogList';


class BacklogBoard extends Component{
  
  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className='container'>
        <div className='row white'>
            <div className='col s12 center'><h3>Backlog da Sprint</h3></div>     
            <div className="col s4 center"><h5>Skills</h5></div>
            <div className="col s2 center"><h5>Id</h5></div>
            <div className="col s6 center"><h5>User Story</h5></div>
                
            {stories.map((stories) => (
                <div className='col s12'>
                    <BacklogCard
                    story={stories.story}
                    skill={stories.skill}
                    id={stories.id}
                    />
                </div>      
            ))}             
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
export default connect(mapStateToProps)(BacklogBoard)