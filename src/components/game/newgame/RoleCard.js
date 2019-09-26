import React  from 'react';

const RoleCard = (props) => {
    const classButton = props.name == 'Time de Desenvolvimento' ? "waves-effect waves-light btn-large" : "waves-effect waves-light btn-large disabled"
    const handleRole = () => {
      //console.log(props.name)
      props.action(props.name) }
    return(
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.image}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right">more_vert</i></span>                
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.name}<i className="material-icons right">close</i></span>
                <p>{props.description}</p>
                <button className={classButton} onClick={handleRole}><i className="material-icons left">cloud</i>Selecionar</button>
            </div>            
        </div>
    )
}

export default (RoleCard);