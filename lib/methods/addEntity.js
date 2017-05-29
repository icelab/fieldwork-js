"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEntity;
function addEntity(request, name, properties) {
  return request("/entities", {
    name: name,
    properties: properties
  });
}