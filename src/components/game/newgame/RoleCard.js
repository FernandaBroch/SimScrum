import React  from 'react';
import { Link } from 'react-router-dom';

const RoleCard = (props) => {
    const classButton = props.name == 'Time de Desenvolvimento' ? "waves-effect waves-light btn-large" : "waves-effect waves-light btn-large disabled"
    return(
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={props.image}/>
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{props.name}<i class="material-icons right">more_vert</i></span>                
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.name}<i class="material-icons right">close</i></span>
                <p>{props.description}</p>
                <Link to='/backlog' className={classButton}><i className="material-icons left">cloud</i>Selecionar</Link>
            </div>
        </div>
    )
}

export default RoleCard;