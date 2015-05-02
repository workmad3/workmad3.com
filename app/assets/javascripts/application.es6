require(["app-react", "fluxxor", "react-router", "stores", "actions", "routes"],
        function(React, Fluxxor, Router, Stores, Actions, Routes){
  var stores = {
    posts: new Stores.PostsStore()
  }
  var flux = new Fluxxor.Flux(stores, Actions.methods);

  Router.run(Routes, Router.HistoryLocation, function(Handler) {
    React.render(
      <Handler flux={flux} />,
        document.getElementById("app")
    )
  });
});
