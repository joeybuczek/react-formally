"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FieldContainer = function FieldContainer(_ref) {
  var children = _ref.children,
      hidden = _ref.hidden,
      inline = _ref.inline,
      fieldClassName = _ref.fieldClassName,
      fieldStyle = _ref.fieldStyle,
      rest = _objectWithoutProperties(_ref, ["children", "hidden", "inline", "fieldClassName", "fieldStyle"]);

  var inlineStyle = { display: "inline" };
  var hiddenStyle = { display: "none" };
  return _react2.default.createElement(
    "div",
    Object.assign({
      className: "field-container " + (fieldClassName || ""),
      style: Object.assign({}, fieldStyle || {}, inline ? inlineStyle : {}, hidden ? hiddenStyle : {})
    }, rest),
    children
  );
};

FieldContainer.propTypes = {
  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: _propTypes.string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: _propTypes.object,

  /** Optional: Determines visibility */
  hidden: _propTypes.bool,

  /** Optional: Sets inline styling of field */
  inline: _propTypes.bool
};

exports.default = FieldContainer;