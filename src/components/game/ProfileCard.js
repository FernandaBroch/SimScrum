import React from 'react';
import { connect } from 'react-redux';

const ProfileCard = (props) => {
    const { profile } = props;
    return(
        <div className="row">
        <div className="col s12 center">
            <h3>Perfil</h3>
        </div>
            <div className="col s2">
                <img src="img/profile.png" alt="" className="circle responsive-img"/>
            </div>
            <div className="col s10">
                <div className="row">
                    <span>Nickname</span> {profile.nickname}
                </div>
                <div className="row">
                    <span>Habilidades</span>
                </div>
                <div className="row">
                    <span>Pontuação</span>                            
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(ProfileCard);