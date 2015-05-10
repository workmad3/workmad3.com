import React from 'react';
import Router from 'react-router';
import Routes from 'routes';
import AppFlux from 'app-flux';
import FluxComponent from 'flummox/component';

var init = function() {
  let flux = new AppFlux();

  Router.run(Routes, Router.HistoryLocation, function(Handler) {
    React.render(
      <FluxComponent flux={flux}>
        <Handler />
      </FluxComponent>,
      document.getElementById("app")
    )
  });
}

export default init;
