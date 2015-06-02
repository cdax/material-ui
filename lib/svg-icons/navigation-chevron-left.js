'use strict';

var React = require('react');
var SvgIcon = require('../svg-icon');

var NavigationChevronLeft = React.createClass({
  displayName: 'NavigationChevronLeft',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' })
    );
  }

});

module.exports = NavigationChevronLeft;