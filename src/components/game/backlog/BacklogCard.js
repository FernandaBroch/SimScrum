import React  from 'react';
import { Link } from 'react-router-dom';

const BacklogCard = (props) => {
    return(        
      <div className="row s12">
        <div className="col s4 center"><span>{props.skill}</span></div>
        <div className="col s2 center"><span>{props.id}</span></div>
        <div className="col s6 center"><span>{props.story}</span></div>
      </div>   
    )
}

export default BacklogCard;