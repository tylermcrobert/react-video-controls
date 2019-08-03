import React from 'react';

function Test(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, React.createElement("header", {
    className: "App-header"
  }, React.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), React.createElement("p", null, "Edit ", React.createElement("code", null, "src/App.js"), " and save to reload."), React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")));
}

export default Test;
