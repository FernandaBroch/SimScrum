import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ResetPassword from './components/auth/ResetPassword'
import Profile from './components/game/profile/Profile'
import NewGame from './components/game/newgame/NewGame'
import ScrumBoard from './components/game/board/ScrumBoard'
import StoryDetails from './components/game/story/StoryDetails'
import FinalScreen from './components/game/result/FinalScreen'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/resetpassword' component={ResetPassword} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile' component={Profile}/>
            <Route path='/newgame' component={NewGame}/>
            <Route path='/board/:id' component={ScrumBoard}/>
            <Route path='/story' component={StoryDetails}/>
            <Route path='/final' component={FinalScreen}/>            
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
