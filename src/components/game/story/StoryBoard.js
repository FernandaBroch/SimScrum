import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import { stories } from './BacklogList';
import { Link } from 'react-router-dom';
import Example from './Example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
	


class StoryBoard extends Component{
  constructor(){
    super();
    this.state = {
      id: '',
      skills: '',
      objective: ''

    }
  }  
  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className='container'>
        <div className='row white section'>
          <h3 className='col s12 center'>História 1</h3>         
          <div className='row col s12'>
            <div className='section white'>
            <div className='center col s4'>Time</div>
            <div className='center col s8'></div>  
            </div>        
          </div>
          <div className='col s4'>          
            <div className="col s12 m12">
              <div className="grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                  <div className="col s4">
                    <img src="./img/dev.png" alt="" className="circle responsive-img"/>
                  </div>
                  <div className="col s8">
                    <span className="black-text">
                      Developer 1
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12">
              <div className="grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                  <div className="col s4">
                    <img src="./img/dev.png" alt="" className="circle responsive-img"/>
                  </div>
                  <div className="col s8">
                    <span className="black-text">
                      Developer 1
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12">
              <div className="grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                  <div className="col s4">
                    <img src="./img/dev.png" alt="" className="circle responsive-img"/>
                  </div>
                  <div className="col s8">
                    <span className="black-text">
                      Developer 1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>           
          <div className='col s8'>
            <div className="row">
              <div className="col s12 m12">
                <div className="card-panel cyan darken-1">
                  <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                  </span>
                </div>
              </div>
            </div>
          </div>   
          
          <div className='col s8 m8 center'>Skills</div>        
          <div className='col s8 m8'>
            <div className="row">
              <div className="col s12 m12">
                <div className="card-panel cyan darken-1">
                  <div className="row">  
                  <DndProvider backend={HTML5Backend}>
                    <Example />
                  </DndProvider>   
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col s12 m12 center">
              <Link to='/story' className="waves-effect waves-light btn-large"><i className="material-icons left">create_new_folder</i>Enviar</Link>
            </div>             
          </div>          
            
          </div>

        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(StoryBoard)