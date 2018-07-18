var React = require('react');
var HAS_DOM = typeof document !== 'undefined';
var DEFAULT_TAG = 'section';

module.exports = HAS_DOM ? DEFAULT_TAG : React.Fragment;


