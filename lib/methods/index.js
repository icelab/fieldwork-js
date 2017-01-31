'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trackEvent = require('./trackEvent');

Object.defineProperty(exports, 'trackEvent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trackEvent).default;
  }
});

var _addEntity = require('./addEntity');

Object.defineProperty(exports, 'addEntity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_addEntity).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }