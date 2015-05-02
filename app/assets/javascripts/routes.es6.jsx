define(["react", "react-router", "components"], function(React, Router, Components) {
  var Route = Router.Route;
  var DefaultRoute = Router.DefaultRoute;
  var EmptyView = Router.RouteHandler;

  return (
    <Route handler={EmptyView} name="home" path="/">
      <Route handler={EmptyView} path="/users">
        <Route handler={Components.Logon} name="user-logon" path="sign_in" />
      </Route>

      <DefaultRoute handler={Components.Logon} />
    </Route>
  )
});
