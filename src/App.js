import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Profile from './components/game/profile/Profile'
import NewGame from './components/game/newgame/NewGame'
import BacklogBoard from './components/game/backlog/BacklogBoard'
import StoryBoard from './components/game/story/StoryBoard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile' component={Profile}/>
            <Route path='/newgame' component={NewGame}/>
            <Route path='/backlog' component={BacklogBoard}/>
            <Route path='/story' component={StoryBoard}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
