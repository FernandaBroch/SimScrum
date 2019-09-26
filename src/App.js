import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Profile from './components/game/profile/Profile'
import NewGame from './components/game/newgame/NewGame'
import BacklogList from './components/game/backlog/BacklogList'
import StoryBoard from './components/game/story/StoryBoard'
import Board from './components/game/board/Board'

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
            <Route path='/backlog' component={BacklogList}/>
            <Route path='/story' component={StoryBoard}/>
            <Route path='/board' component={Board}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
