import React from 'react'
import { Link } from 'react-router'
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';


var FloatButton = React.createClass({
  render() {
    return (
      <div id = 'FloatButtonContainer'>
        <FloatingActionButton backgroundColor="#E91E63" >
          <ContentAdd />
        </FloatingActionButton>
      </div>

    );
  }
});

module.exports = FloatButton;
