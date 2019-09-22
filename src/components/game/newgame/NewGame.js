import React, {Component} from 'react';
import RoleCard from './RoleCard';
import { roles } from './Roles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class NewGame extends Component{
    
    render(){
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' /> 
        return(
            <div className='container'>
                <div className='row white'>
                    <div className='col s12 center'><h3>Escolha seu Papel</h3></div>                    
                    {roles.map((role) => (
                        <div className='col s4'>
                            <RoleCard
                            name={role.name}
                            description={role.description}
                            image={role.image}
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
    auth: state.firebase.auth    
  }
}
export default connect(mapStateToProps)(NewGame);