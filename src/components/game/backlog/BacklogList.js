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

    const style1 = {
      display: 'inline-block',
      width: '227px',
      height: '25px',
      verticalAlign: 'top'
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

          <div className='col s1 m1 lighten-5' style={estilo}></div>
          <div className='col s2 m2 grey z-depth-1 lighten-5' style={estilo}>   
            <h5 className='row black-text center'>Disponível</h5>  
            <div className='divider'></div>        
            {disponivel && disponivel.map((story) => (
              <div className='col s12 m12' key={story.name}>
                <StoryCard                
                description={story.description}
                id={story.id}
                />
              </div>      
            ))}             
          </div>  
          <div className='col s1 m1  lighten-5' style={estilo}></div>
          <div className='col s2 m2 grey z-depth-2 lighten-5' style={estilo}>
            <h5 className='row center'>Em Desenvolvimento</h5> 
            <div className='divider'></div>     
            {desenvolvimento && desenvolvimento.map((story) => (
              <div className='col s12 m12' key={story.name}>
                <StoryCard                
                description={story.description}
                id={story.id}
                />
              </div>      
              ))}    
          </div>  
          <div className='col s1 m1  lighten-5' style={estilo}></div>
          <div className='col s2 m2 grey z-depth-2 lighten-5 ' style={estilo}>
            <h5 className='row center'>Teste</h5> 
            <div className='divider'></div>     
            {teste && teste.map((story) => (
            <div className='col s2 m2' key={story.name}>
              <StoryCard                
              description={story.description}
              id={story.id}
              />
            </div>      
            ))}   
          </div> 
          <div className='col s1 m1 lighten-5' style={estilo}></div>
          <div className='col s2 m2 grey z-depth-2 lighten-5' style={estilo}>
            <h5 className='row center'>Pronto</h5> 
            <div className='divider'></div>     
            {pronto && pronto.map((story) => (
            <div className='col s12 m12' key={story.name}>
              <StoryCard                
              description={story.description}
              id={story.id}
              />
            </div>      
            ))}   
          </div>     

          <div class="card">
            <div class="card-content">
                <h4 class="card-title">Stats Cards</h4>
                <p>Show your important stats with top stats in colorful cards.</p>
                <div id="card-stats" class="row">
                  <div class="col s12 m6 xl3">
                      <div class="card">
                        <div class="card-content cyan white-text">
                            <p class="card-stats-title"><i class="material-icons">person_outline</i> New Clients</p>
                            <h4 class="card-stats-number white-text">566</h4>
                            <p class="card-stats-compare">
                              <i class="material-icons">keyboard_arrow_up</i> 15%
                              <span class="cyan text text-lighten-5">from yesterday</span>
                            </p>
                        </div>
                        <div class="card-action cyan darken-1">
                            <div id="clients-bar" class="center-align"><canvas width="227" height="25" style={style1}></canvas></div>
                        </div>
                      </div>
                  </div>
                  <div class="col s12 m6 xl3">
                      <div class="card">
                        <div class="card-content red accent-2 white-text">
                            <p class="card-stats-title"><i class="material-icons">attach_money</i>Total Sales</p>
                            <h4 class="card-stats-number white-text">$8990.63</h4>
                            <p class="card-stats-compare">
                              <i class="material-icons">keyboard_arrow_up</i> 70%
                              <span class="red-text text-lighten-5">last month</span>
                            </p>
                        </div>
                        <div class="card-action red">
                            <div id="sales-compositebar" class="center-align"><canvas width="227" height="25" style={style1}></canvas></div>
                        </div>
                      </div>
                  </div>
                  <div class="col s12 m6 xl3">
                      <div class="card">
                        <div class="card-content orange lighten-1 white-text">
                            <p class="card-stats-title"><i class="material-icons">trending_up</i> Today Profit</p>
                            <h4 class="card-stats-number white-text">$806.52</h4>
                            <p class="card-stats-compare">
                              <i class="material-icons">keyboard_arrow_up</i> 80%
                              <span class="orange-text text-lighten-5">from yesterday</span>
                            </p>
                        </div>
                        <div class="card-action orange">
                            <div id="profit-tristate" class="center-align"><canvas width="227" height="25" style={style1}></canvas></div>
                        </div>
                      </div>
                  </div>
                  <div class="col s12 m6 xl3">
                      <div class="card">
                        <div class="card-content green lighten-1 white-text">
                            <p class="card-stats-title"><i class="material-icons">content_copy</i> New Invoice</p>
                            <h4 class="card-stats-number white-text">1806</h4>
                            <p class="card-stats-compare">
                              <i class="material-icons">keyboard_arrow_down</i> 3%
                              <span class="green-text text-lighten-5">from last month</span>
                            </p>
                        </div>
                        <div class="card-action green">
                            <div id="invoice-line" class="center-align"><canvas width="275" height="25" style={style1}></canvas></div>
                        </div>
                      </div>
                  </div>
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