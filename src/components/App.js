import React, { Component } from 'react'
import EventDetail from './EventDetail'
import Header from './Header'
import Login from './Login'
import { Switch, Route, Redirect } from 'react-router-dom'
import SearchContainer from './SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/events" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/events/:id" component={EventDetail} />
            <Route exact path="/search" component={SearchContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
