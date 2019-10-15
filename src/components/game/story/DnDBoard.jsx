import React, { Component } from 'react';
import ColleagueCard from './ColleagueCard';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const laneStyle = {
  height: '100%',
  minHeight: '580px',  
}

class Groups extends Component {

  assignDrag(story, e) {
    const { removedIndex, addedIndex, payload } = e;
    console.log(payload);
    console.log(story.assignedColleagues);
    story.assignedColleagues.push(payload.id);
    // availableColleagues = availableColleagues.filter(col => col.id !== payload.id);
    // assignedColleagues = assignedColleagues.push(payload);
    this.setState({...story});
  }

  applyDrag(arr, e) {

    this.setState({ availableColleagues: applyDrag(arr, e)})
  }

  render() {
    const { colleagues, story } = this.props;
    let { availableColleagues, assignedColleagues } = this.props;

    if (colleagues && story) {
      colleagues.forEach((col) => {
        // const assignedColleaguesIds = story.assignedColleagues.map(ca => ca.id);
        // const arr = assignedColleaguesIds.includes(col.id) ? assignedColleagues : availableColleagues;
        const arr = story.assignedColleagues.includes(col.id) ? assignedColleagues : availableColleagues;
        arr.push(col);
      });
      console.log(colleagues);

      return (
        <div>
          <div className='row'>
            <div className='col s12 m12'>
              <div className='white'>
                <div className='center col s6 m6'>Time</div>
                <div className='center col s6 m6'>Skills</div>        
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col s6 m6'>  
              <div className='card-panel grey darken-1'>  
                  <Container 
                    style={laneStyle} 
                    groupName='1' 
                    getChildPayload={i => availableColleagues[i]} 
                    onDrop={e => this.assignDrag(story, e)}
                    >
                    {
                      availableColleagues.map(p => {
                        return (
                          <Draggable key={p.id}>                          
                            <ColleagueCard colleague={p} />                                  
                          </Draggable>
                        );
                      })
                    }
                  </Container>  
                
              </div>        
            </div>  

            <div className='col s6 m6'>                         
              <div className='card-panel cyan darken-1'>                   
                  <Container 
                    style={laneStyle} 
                    groupName='1' 
                    getChildPayload={i => assignedColleagues[i]} 
                    onDrop={e => this.setState({ assignedColleagues: applyDrag(availableColleagues, assignedColleagues, e) })}
                  >
                    {
                      assignedColleagues.map(p => {
                        return (
                          <Draggable key={p.id}>                          
                            <ColleagueCard colleague={p} />
                          </Draggable>
                        );
                      })
                    }
                  </Container>
                
              </div>              
            </div>  
          </div>   

        </div>
    ) } else {
      return (
        <div className='row'>
          <div className='col s12 m12'>
            <div className='white'>
              <div className='center col s6 m6' >Time</div>
              <div className='center col s6 m6 '>Skills</div>        
            </div>
          </div>
        </div>
      )
    }    
  }
}

Groups.propTypes = {

};

const mapStateToProps = (state, props) => {
  return {    
    auth: state.firebase.auth,
    colleagues: state.firestore.ordered.colleagues,
    availableColleagues: [],
    assignedColleagues: []
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'colleagues'}])
  ) (Groups);