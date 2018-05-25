"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormData = exports.Provider = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContext = (0, _react.createContext)();
var Provider = FormContext.Provider,
    FormData = FormContext.Consumer;
exports.Provider = Provider;
exports.FormData = FormData;