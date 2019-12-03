import React  from 'react';
import StoryCard from './StoryCard';

const ScrumLane = (props) => {    
  const { title, stories, color } = props;
  return(
      <div className="col s12 m6 xl3">
      <ul id="task-card" className="collection with-header">
        <li className={`collection-header ${color} lighten-1 center`}>
          <h5 className="task-card-title mb-3 white-text">{title}</h5>
        </li>
        {stories && stories.map((story, index) => (

          <StoryCard
            story={story}
            key={index}
            color={color}
          />

        ))}
      </ul>
    </div> 
    )
}

export default (ScrumLane);
