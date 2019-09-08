import React, {Component} from 'react';
import RoleCard from './RoleCard';
import { roles } from './Roles';



class NewGame extends Component{
    
    render(){
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
export default NewGame;