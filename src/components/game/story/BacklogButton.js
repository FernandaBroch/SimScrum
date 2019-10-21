import React  from 'react';
import { Link } from 'react-router-dom';

const BacklogButton = () => {    
    return(
     <div className="col s12 m12">
        <Link to='/backlog' className="waves-effect waves-light btn-large"><i className="material-icons left">arrow_back</i>Backlog</Link>
      </div> 
    )
}

export default (BacklogButton);