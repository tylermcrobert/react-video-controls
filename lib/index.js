import React from 'react';

function Test(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    style: {
      padding: 5,
      border: '1px solid black',
      display: 'inline-block'
    }
  }, "Component is working. Input: ", React.createElement("strong", null, children));
}

export default Test;
