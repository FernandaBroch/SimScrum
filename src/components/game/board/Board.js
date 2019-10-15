import React, {Component} from 'react';
import StoryCard from './StoryCard';
import { stories } from '../backlog/List';

class Board extends Component{    
    
  render(){
    const estilo = {
      height: '600px'
    }
      return(
        <div className='container'>
          <div className='row white section'>    
                     
            <div className='col s12 center'><h3>Quadro</h3></div>   
            <div className='col s3 m3 grey lighten-5 z-depth-1' style={estilo}>   
              <h5 className='row center'>Disponível</h5>          
              {stories.map((story) => (
                <div className='col s12 m12' key={story.name}>
                  <StoryCard                
                  title={story.story}
                  id={story.id}
                  />
                </div>      
              ))}             
            </div>  
            <div className='col s3 m3 grey lighten-5 z-depth-1' style={estilo}>
              <h5 className='row center'>Em Desenvolvimento</h5> 
            </div>  
            <div className='col s3 m3 grey lighten-5 z-depth-1' style={estilo}>
              <h5 className='row center'>Teste</h5> 
            </div> 
            <div className='col s3 m3 grey lighten-5 z-depth-1' style={estilo}>
              <h5 className='row center'>Pronto</h5> 
            </div>             
          
          </div>
          <div className='divider'></div>
          
        </div>
      )
  }
}


export default Board;