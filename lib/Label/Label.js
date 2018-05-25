"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = function Label(_ref) {
  var children = _ref.children,
      htmlFor = _ref.htmlFor,
      inline = _ref.inline,
      required = _ref.required,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? "" : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      rest = _objectWithoutProperties(_ref, ["children", "htmlFor", "inline", "required", "className", "style"]);

  var labelStyle = inline ? { display: "inline-block", marginRight: 10 } : { display: "block" };
  var requiredStyle = { margin: "0px 3px" };
  return _react2.default.createElement(
    "label",
    Object.assign({
      className: "field-label " + className,
      htmlFor: htmlFor,
      style: Object.assign({}, labelStyle, style)
    }, rest),
    children,
    required && _react2.default.createElement(
      "span",
      { className: "required-asterisk", style: requiredStyle },
      "*"
    )
  );
};

Label.propTypes = {
  /** Required: Sets the label for attribute */
  htmlFor: _propTypes.string.isRequired,

  /** Optional: Positions label text inline with field */
  inline: _propTypes.bool,

  /** Optional: Displays "required" asterisk in label text */
  required: _propTypes.bool,

  /** Optional: Sets class attribute */
  className: _propTypes.string,

  /** Optional: Sets style attribute */
  style: _propTypes.object
};

exports.default = Label;