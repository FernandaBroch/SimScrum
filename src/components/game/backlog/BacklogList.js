import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import StoryCard from './StoryCard';



class BacklogList extends Component{
  render(){
    const estilo = {
      height: '600px'
    }

    const textDecorNone = 
      {textDecoration: 'none'}
    
      const styleLi = {
        padding: '0px'
      }
    

    const { backlog } = this.props; 
    let {disponivel, desenvolvimento, teste, pronto } = this.props;   

    if (backlog) {
      backlog.forEach((s) => {
        switch(s.status){
          case 'disponivel':
            disponivel.push(s);
            break;
          case 'desenvolvimento':
            desenvolvimento.push(s);  
            break;
          case 'teste':
            teste.push(s);
            break;
          case 'pronto':
            pronto.push(s);
            break;
          default:
            break;
        }        
      })
    };

    return (
     
        <div className='row white section'>                         
          <div className='s12 m12 center'><h3>Quadro Scrum (Kanban)</h3></div> 

          <div id="card-widgets" className="seaction">
            <div className="row">
                <div className="col s12 m6 xl3">                  
                  <ul id="task-card" className="collection with-header">
                    <li className="collection-header cyan darken-1"> 
                      <h5 className="task-card-title mb-3">Disponível</h5>                        
                    </li>                   
                      {disponivel && disponivel.map((story, index) => (                         
                          <StoryCard                
                          description={story.description}
                          id={story.id}  
                          key={index}                        
                          />                  
                        
                      ))} 
                  </ul>
                </div>

                <div className="col s12 m6 xl3">                  
                  <ul id="task-card" className="collection with-header">
                    <li className="collection-header cyan"> 
                      <h5 className="task-card-title mb-3">Em Desenvolvimento</h5>                        
                    </li>                   
                      {desenvolvimento && desenvolvimento.map((story, index) => ( 
                        
                          <StoryCard                
                          description={story.description}
                          id={story.id}
                          key={index}
                          />                  
                        
                      ))} 
                  </ul>
                </div>

                <div className="col s12 m6 xl3">                  
                  <ul id="task-card" className="collection with-header">
                    <li className="collection-header cyan"> 
                      <h5 className="task-card-title mb-3">Teste</h5>                        
                    </li>                   
                      {teste && teste.map((story, index) => ( 
                        
                          <StoryCard                
                          description={story.description}
                          id={story.id}
                          key={index}
                          />                  
                        
                      ))} 
                  </ul>
                </div>

                <div className="col s12 m6 xl3">                  
                  <ul id="task-card" className="collection with-header">
                    <li className="collection-header cyan"> 
                      <h5 className="task-card-title mb-3">Pronto</h5>                        
                    </li>                   
                      {pronto && pronto.map((story, index) => ( 
                        
                          <StoryCard                
                          description={story.description}
                          id={story.id}
                          key={index}
                          />                  
                        
                      ))} 
                  </ul>
                </div>
                
            </div>
          </div>

          
          
                           
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  //console.log(state)
  return {    
    auth: state.firebase.auth,
    backlog: state.firestore.ordered.backlog,
    disponivel: [],
    desenvolvimento: [],
    teste: [],
    pronto: []
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'backlog'}
  ])
  )(BacklogList)