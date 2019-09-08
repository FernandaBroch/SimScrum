import React  from 'react';

const RoleCard = (props) => {
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
                <a className="waves-effect waves-light btn-large"><i className="material-icons left">cloud</i>Selecionar</a>
            </div>
        </div>
    )
}

export default RoleCard;