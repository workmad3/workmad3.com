import React from 'react';
import { Route, DefaultRoute, RouteHandler } from 'react-router';
import Components from './components'

var Routes = (
  <Route handler={RouteHandler} name="home" path="/">
    <Route handler={RouteHandler} path="/users">
      <Route handler={Components.Logon} name="user-logon" path="sign_in" />
    </Route>

    <DefaultRoute handler={Components.Logon} />
  </Route>
)

export default Routes;
