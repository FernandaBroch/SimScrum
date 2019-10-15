import React, {Component} from 'react';
import BacklogCard from './BacklogCard';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class BacklogList extends Component{
  render(){
    const { auth } = this.props;
    const { backlog } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className='container'>
        <div className='row white'>
        <h3 className='col s10 m10 center'>Backlog da Sprint</h3> 
        <div className='col s2 m2 center'>
          <Link to='/board' className="waves-effect waves-light btn"><i className="material-icons left">grid_on</i>Quadro Scrum</Link>
        </div>
          <table className='striped'>
            <thead>
              <tr>
                <th className='center'>Skills</th>
                <th className='center'>Id</th>
                <th className='center'>User Story</th>
              </tr>
            </thead>
            <tbody>
            {backlog && backlog.map((story) => (                
              <BacklogCard
              story={story.description}
              skill={story.skills}
              id={story.id}
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
  //console.log(state)
  return {    
    auth: state.firebase.auth,
    backlog: state.firestore.ordered.backlog
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'backlog'}
  ])
  )(BacklogList)