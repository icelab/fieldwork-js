'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _methods = require('./methods');

var publicMethods = _interopRequireWildcard(_methods);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(_ref) {
  var projectId = _ref.projectId,
      projectPublicKey = _ref.projectPublicKey;

  // Throw error if not configured
  if (projectId == null || projectPublicKey == null) {
    throw new Error('Project ID and key must be passed.');
  }

  // Configure fetch
  var request = (0, _connection2.default)(projectId, projectPublicKey);

  // Curry all the public methods so pass in our pre-configured fetcher
  var curried = {};
  Object.keys(publicMethods).forEach(function (methodName) {
    curried[methodName] = function () {
      return publicMethods[methodName].apply(publicMethods, [request].concat(Array.prototype.slice.call(arguments)));
    };
  });
  return curried;
}