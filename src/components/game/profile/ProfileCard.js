import React from 'react';
import { connect } from 'react-redux';

const ProfileCard = (props) => {
  const starWidth = {
    fontSize: '20px',
    width: '18px',
    cursor: 'pointer',
  }
  const { profile, auth } = props;
  return (
    <div>
      <div className="row">
        <div className="col s12 m4 l3 user-section-negative-margin">
          <div className="row">
            <div className="col s12 center-align">
              <img className="responsive-img circle z-depth-5" src="img/profile.png" alt="" width="200" />
              <br />
            </div>
          </div>
        </div>
        <div className="col s12 m8 l6">
          <div className="row">
            <div className="card user-card-negative-margin z-depth-0" id="feed">
              <div className="card-content card-border-gray">
                <div className="row">
                  <div className="col s12">
                    <h5>{profile.nickname}</h5>
                    <p>{auth.email}</p>
                      <span>Habilidade: </span>
                      <span className="material-icons amber-text" style={starWidth}>star_rate</span>
                      <span className="material-icons amber-text" style={starWidth}>star_rate</span>
                      <span className="material-icons amber-text" style={starWidth}>star_rate</span>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(ProfileCard);