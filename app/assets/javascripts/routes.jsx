import React from 'react';
import { Route, DefaultRoute, RouteHandler } from 'react-router';
import Pages from 'pages'

var Routes = (
  <Route handler={RouteHandler} name="home" path="/">
    <Route handler={RouteHandler} path="/users">
      <Route handler={Pages.LogonPage} name="user-logon" path="sign_in" />
    </Route>

    <DefaultRoute handler={Pages.LogonPage} />
  </Route>
)

export default Routes;
