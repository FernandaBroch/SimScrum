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
        <h3 className='col s12 center'>Backlog da Sprint</h3> 
          <table className='striped'>
            <thead>
              <tr>
                <th className='center'>Skills</th>
                <th className='center'>Id</th>
                <th className='center'>User Story</th>
              </tr>
            </thead>
            <tbody>
            {stories.map((stories) => (                
              <BacklogCard
              story={stories.story}
              skill={stories.skill}
              id={stories.id}
              />                
            ))}  
            </tbody>
          </table>           
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