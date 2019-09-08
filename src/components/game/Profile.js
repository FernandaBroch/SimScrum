import React, {Component} from 'react';
import ProfileCard from './ProfileCard';
import { Link }  from 'react-router-dom';


class Profile extends Component{
    render(){
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
export default Profile;