import React  from 'react';
import { Link } from 'react-router-dom';

const StoryCard = (props) => {
    return(        
      <tr>      
          <td><Link to='/story' className='waves-effect waves-light'>{props.skill}</Link></td>
          <td><Link to='/story' className='waves-effect waves-light'>{props.id}</Link></td>
          <td><Link to='/story' className='waves-effect waves-light'>{props.story}</Link></td>        
      </tr>
    )
}

export default StoryCard;