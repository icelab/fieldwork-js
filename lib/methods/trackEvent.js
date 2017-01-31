'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trackEvent;
function trackEvent(request, name, properties) {
  return request('/events', {
    name: name,
    properties: properties
  });
}