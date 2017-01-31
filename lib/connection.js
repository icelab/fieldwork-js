'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connection;

require('whatwg-fetch');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

function connection(projectId, projectPublicKey) {
  var baseURL = _config2.default.FIELDWORK_API_BASE_URL + '/' + projectId;
  var authorization = window.btoa(projectPublicKey + ':');

  return function (endpoint, data) {
    var url = '' + baseURL + endpoint;
    var encodedData = window.JSON.stringify(data);
    return window.fetch(url, {
      method: 'POST',
      body: encodedData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + authorization
      }
    }).then(checkStatus).then(parseJSON).catch(function (error) {
      console.log('Request failed', error);
    });
  };
}