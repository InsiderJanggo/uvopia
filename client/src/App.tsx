import React from 'react'
import { Route, Switch } from 'react-router'

//PAGES
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Create from './pages/room/Create'
import User from './pages/user'
import UserPage from './pages/user/[id]'

const App = () => {
  return (
    <div className="App">
        <Switch>
            <Route path="/room/create">
                  <Create />
            </Route>
            <Route path="/user/:id">
                  <UserPage />
            </Route>
            <Route path="/user">
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
