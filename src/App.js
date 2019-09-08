import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Profile from './components/game/Profile'
import NewGame from './components/game/NewGame';

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
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
