import React from 'react';
import { Link } from 'react-router-dom';
import { calcSuccess } from '../story/StoryCalc'

const linkStyle = {  
  margin: '10px',
  padding: '10px'
}

const styleLi = {
  padding: '0px'
}

const badgeStyle = {
  'fontSize':'1rem',
  'margin': '1rem',
  'padding': '0.2rem',
  'height': '30px'
};

const badgeSuccessRate = (story) => {
  if(story.status === 'pronto' ) return
  const successRate = calcSuccess(story.skills, story.assignedColleagues);
  const successRateClassName = successRate < 50 ? 'red' : '';

  return (
    <span className={`new large badge ${successRateClassName}`} style={badgeStyle} data-badge-caption={`${successRate}%`} />
  );
}


const StoryCard = (props) => {    
    const { story } = props;

    return(     
      <Link to={{pathname: `/story/${story.id}` }} style={linkStyle}> 
      {console.log(story.id)}
      <li className="collection-item dismissable" style={styleLi}>
        <div className={`card lighten-4 gradient-shadow ${props.color}`} style={{'margin' :'1rem'}}>
          {badgeSuccessRate(story)}
          <div className="card-content black-text">
            <span className="card-title">{story.description}</span>
          </div>
        </div>
        </li>
      </Link>      
    )
}

export default StoryCard;