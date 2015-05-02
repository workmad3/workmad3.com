define(["jquery", "app-react", "components"], function($, React, Components) {
  var ReactRailsUJS = {
    CLASS_NAME_ATTR: 'data-react-class',
    PROPS_ATTR: 'data-react-props',

    findDOMNodes: function(searchSelector) {
      var selector;
      if (typeof searchSelector === 'undefined') {
        var selector = '[' + ReactRailsUJS.CLASS_NAME_ATTR + ']';
      } else {
        var selector = searchSelector + ' [' + ReactRailsUJS.CLASS_NAME_ATTR + ']';
      }

      if ($) {
        return $(selector);
      } else {
        return document.querySelectorAll(selector);
      }
    },

    mountComponents: function(searchSelector) {
      var nodes = ReactRailsUJS.findDOMNodes(searchSelector);

      for (var i = 0; i < nodes.length; ++i) {
        var node = nodes[i];
        var className = node.getAttribute(ReactRailsUJS.CLASS_NAME_ATTR);

        var constructor = Components[className]
        var propsJson = node.getAttribute(ReactRailsUJS.PROPS_ATTR);
        var props = propsJson && JSON.parse(propsJson);

        React.render(React.createElement(constructor, props), node);
      }
    },

    unmountComponents: function(searchSelector) {
      var nodes = ReactRailsUJS.findDOMNodes(searchSelector);

      for (var i = 0; i < nodes.length; ++i) {
        var node = nodes[i];

        React.unmountComponentAtNode(node);
      }
    }
  };

  function handleNativeEvents() {
    if ($) {
      $(function() {ReactRailsUJS.mountComponents()});
      $(window).unload(function() {ReactRailsUJS.unmountComponents()});
    } else {
      document.addEventListener('DOMContentLoaded', function() {ReactRailsUJS.mountComponents()});
      window.addEventListener('unload', function() {ReactRailsUJS.unmountComponents()});
    }
  };
  handleNativeEvents();

  return ReactRailsUJS;
});
