import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import { stories } from './BacklogList';
import { Link } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import MemberCard from './MemberCard';
import DnDBoard from './DnDBoard';
import DropBox from './DropBox';


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
        <div className='row white section'>
          <h3 className='col s12 center'>História 1</h3> 
          <DnDBoard />        
          <div className="row">
            <div className="col s12 m12 center">
              <Link to='/story' className="waves-effect waves-light btn-large"><i className="material-icons left">create_new_folder</i>Enviar</Link>
            </div>             
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