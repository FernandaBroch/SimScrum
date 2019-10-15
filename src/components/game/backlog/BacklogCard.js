import React  from 'react';
import { Link } from 'react-router-dom';

const BacklogCard = (props) => {
    return(        
      <tr key={props.id}>      
          <td><Link to={'/story/'+ props.id} className='waves-effect waves-light'>{props.skill}</Link></td>
          <td><Link to={'/story/'+ props.id} className='waves-effect waves-light'>{props.id}</Link></td>
          <td><Link to={'/story/'+ props.id} className='waves-effect waves-light'>{props.story}</Link></td>        
      </tr>
    )
}

export default BacklogCard;