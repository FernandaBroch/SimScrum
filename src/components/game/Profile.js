import React, {Component} from 'react';
import ProfileCard from './ProfileCard';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component{
  
  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <ProfileCard/>
          <div className="row">
              <div className="col">
                <Link to='/newgame' className="waves-effect waves-light btn-large"><i className="material-icons left">cloud</i>Novo Jogo</Link>
              </div>
              <div className="col">
                <a className="waves-effect waves-light btn-large"><i className="material-icons left">cloud</i>Continuar</a>
              </div>                
          </div>
        </form>
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


export default connect(mapStateToProps)(Profile)