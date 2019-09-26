import React from 'react';

const StoryCard = (props) => {
    
    return(
        <div className="row">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <p class="truncate">{props.id + '-'+ props.title}</p>                
              </div>   
          </div>
        </div>
    )
}


export default StoryCard