"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FIELDWORK_API_HOST = "api.dofieldwork.com";
var FIELDWORK_API_PROTOCOL = "https";
var FIELDWORK_API_VERSION = "v1";
var FIELDWORK_API_PATH = "/api/" + FIELDWORK_API_VERSION + "/projects";
var FIELDWORK_API_BASE_URL = FIELDWORK_API_PROTOCOL + "://" + FIELDWORK_API_HOST;

exports.default = {
  FIELDWORK_API_PATH: FIELDWORK_API_PATH,
  FIELDWORK_API_BASE_URL: FIELDWORK_API_BASE_URL
};