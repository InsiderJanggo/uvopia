import React from 'react'
import { Route, Switch } from 'react-router'

//PAGES
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="App">
        <Switch>
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
