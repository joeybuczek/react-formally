"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormData = exports.Provider = undefined;

var _react = require("react");

var FormContext = (0, _react.createContext)();
var Provider = FormContext.Provider,
    FormData = FormContext.Consumer;
exports.Provider = Provider;
exports.FormData = FormData;