var React = require('react');
var HAS_DOM = typeof document !== 'undefined';
var DEFAULT_TAG = 'section';

module.exports = function (inTag) {
  return HAS_DOM ? (inTag || DEFAULT_TAG) : React.Fragment;
};


