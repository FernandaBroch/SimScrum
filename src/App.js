import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ResetPassword from './components/auth/ResetPassword'
import Profile from './components/game/profile/Profile'
import GameIntro from './components/game/newgame/GameIntro'
import SelectRole from './components/game/newgame/SelectRole'
import MyTeam from './components/game/newgame/MyTeam'
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
            <Route path='/selectrole' component={SelectRole}/>
            <Route path='/board/:id' component={ScrumBoard}/>
            <Route path='/story' component={StoryDetails}/>
            <Route path='/success' render={(props) => <FinalScreen {...props} result="success" />} />
            <Route path='/fail' render={(props) => <FinalScreen {...props} result="fail" />} />
            <Route path='/gameintro' component={GameIntro}/>
            <Route path='/myteam/:id' component={MyTeam}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
