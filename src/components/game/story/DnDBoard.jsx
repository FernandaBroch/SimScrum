import React, { Component } from 'react';
import MemberCard from './MemberCard';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
const groupStyle = {
  marginLeft: '50px',
  flex: 1
};
const divStyle = {
  display: 'flex', 
  justifyContent: 'stretch', 
  marginTop: '50px', 
  marginRight: '50px' 
}

const laneStyle = {
  height: '100%',
  minHeight: '580px',  
}

class Groups extends Component {
  constructor() {
    super();

    this.state = {
      items1: generateItems(5, (i) => ({ id: '1' + i, data: `Developer ${i}` })),
      items2: [],
    };
  }
  render() {
    return (
      <div>

        <div className='row'>
          <div className='col s12 m12'>
            <div className='card-panel cyan darken-1'>
              <span className='white-text'>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
              </span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m12'>
            <div className='white'>
              <div className='center col s6 m6' >Time</div>
              <div className='center col s6 m6 '>Skills</div>        
            </div>
          </div>
        </div>

        <div className='row'>     
          <div className='col s6 m6' >  
            <div className='card-panel grey darken-1'  >  
                <Container style={laneStyle} groupName='1' getChildPayload={i => this.state.items1[i]} onDrop={e => this.setState({ items1: applyDrag(this.state.items1, e) })}>
                  {
                    this.state.items1.map(p => {
                      return (
                        <Draggable key={p.id}>                          
                            <MemberCard data={p.data}/>                                  
                        </Draggable>
                      );
                    })
                  }
                </Container>  
              
            </div>        
          </div>  

          <div className='col s6 m6'>                         
            <div className='card-panel cyan darken-1' >   
              
                <Container style={laneStyle} groupName='1' getChildPayload={i => this.state.items2[i]} onDrop={e => this.setState({ items2: applyDrag(this.state.items2, e) })}>
                  {
                    this.state.items2.map(p => {
                      return (
                        <Draggable key={p.id}>                          
                            <MemberCard data={p.data}/>                              
                        </Draggable>
                      );
                    })
                  }
                </Container>
              
            </div>              
          </div>  
        </div>    

      </div>
    );
  }
}

Groups.propTypes = {

};

export default Groups;