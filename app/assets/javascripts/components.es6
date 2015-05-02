define(["react", "components/logon"], function(React, Logon) {
  // Expose top-level components globally here
  window.React = React;
  window.Logon = Logon;

  return {
    Logon: Logon
  }
});
