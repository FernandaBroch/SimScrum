import React, { Component } from 'react';
import ColleagueCard from './ColleagueCard';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { assignStoryColleague } from '../../../store/actions/storyActions'

const laneStyle = {
  height: '100%',
  minHeight: '580px',  
}

class Groups extends Component {

  assignColleague(storyId, e){    
    const {payload, addedIndex} = e;    
    console.log(e)
    if (addedIndex === null)
    this.props.assignStoryColleague(payload, storyId)
  }
  unassignColleague(storyId, e){
    this.assignColleague(storyId, e)
  }

  renderHeader (){
    return (
      <div className='row'>
        <div className='col s12 m12'>
          <div className='white'>
            <h4 className='center col s6 m6' >Disponíveis</h4>
            <h4 className='center col s6 m6 '>Atribuídos</h4>          
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { colleagues, storyId } = this.props;
    let { availableColleagues, assignedColleagues } = this.props;

    if (colleagues && storyId) {
      colleagues.forEach((col) => {
        if (col.story == storyId){
          assignedColleagues.push(col);
        }else if (col.story === "" ){
          availableColleagues.push(col);
        }  
    });

    return (
      <div>
        
        {this.renderHeader()}

        <div className='row'>
          <div className='col s6 m6'>  
            <div className='card-panel grey darken-1'>  
                <Container 
                  style={laneStyle} 
                  groupName='1' 
                  getChildPayload={i => availableColleagues[i]} 
                  onDrop={e => this.assignColleague(storyId, e)}
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
                  onDrop={e => this.unassignColleague("", e)}
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
        <div>
        { this.renderHeader() }
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

const mapDispatchToProps = (dispatch) => {
  return{
    assignStoryColleague: (colleague, storyId) => dispatch(assignStoryColleague(colleague, storyId))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'colleagues'}])
  ) (Groups);