import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = (props) => {
    
    return(
      <Link to={'/story/'+ props.id} className='waves-effect waves-light'>
        <div className="row">
            <div class="card cyan z-depth-2 darken-1 hoverable">
              <div class="card-content white-text">
                <p>{props.description}</p>                
              </div>   
          </div>
        </div>
      </Link>
    )
}


export default StoryCard