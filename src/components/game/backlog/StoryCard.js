import React from 'react';
import { Link } from 'react-router-dom';

const collectionsContent =  {
  fontSize: '.9rem',
  fontWeight: '400',
  margin: '0',
  padding: '0',
  width: '100%',
  
}

const linkStyle = {  
  padding: '10px 10px 10px 10px'  
}

const styleLi = {
  padding: '0px'
}


const StoryCard = (props) => {    
    return(     
      <Link to={
        {pathname: `/story/${props.id}`,
         data: props
        }} style={linkStyle} > 
      <li className="collection-item dismissable" style={styleLi} >
        <div className="col s12 m6 l9">
          <div className="card cyan lighten-4 gradient-shadow">
            <div className="card-content black-text">
              <span className="card-title">{props.description}</span>                
            </div>            
          </div>
        </div>
        </li>
      </Link>      
    )
}


export default StoryCard