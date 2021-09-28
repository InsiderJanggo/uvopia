import React from 'react'
import { Route, Switch } from 'react-router'

//PAGES
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/user'

const App = () => {
  return (
    <div className="App">
        <Switch>
              <Route path="/user/:id">
                  <User />
            </Route>
            <Route path="/register">
                  <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route exact path="/">
                  <Home />
            </Route> 
        </Switch>
    </div>
  )
}

export default App
