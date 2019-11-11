import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Profile from './components/game/profile/Profile'
import NewGame from './components/game/newgame/NewGame'
import ScrumBoard from './components/game/board/ScrumBoard'
import StoryDetails from './components/game/story/StoryDetails'


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
            <Route path='/board/:id' component={ScrumBoard}/>
            <Route path='/story' component={StoryDetails}/>
            
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
