import React from 'react';
import Fluxxor from 'fluxxor';
import Router from 'react-router';
import Stores from 'stores';
import Actions from 'actions';
import Routes from 'routes';

var init = function() {
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
}

export default init;
