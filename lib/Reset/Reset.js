"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Context = require("../Context");

var _FieldContainer = require("../FieldContainer");

var _FieldContainer2 = _interopRequireDefault(_FieldContainer);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Reset = function Reset(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      inline = _ref.inline,
      hidden = _ref.hidden,
      _ref$name = _ref.name,
      name = _ref$name === undefined ? "reset" : _ref$name,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      title = _ref.title,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? "Reset" : _ref$value,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "className", "disabled", "id", "inline", "hidden", "name", "style", "title", "value"]);

  return _react2.default.createElement(
    _Context.FormData,
    null,
    function (_ref2) {
      var actions = _ref2.actions;
      return _react2.default.createElement(
        _FieldContainer2.default,
        { hidden: hidden, inline: inline },
        _react2.default.createElement("input", Object.assign({
          id: id || name,
          name: name,
          "aria-label": ariaLabel || value,
          type: "button",
          title: title || value,
          className: className,
          style: style,
          disabled: disabled,
          value: value,
          onClick: actions.handleFormReset
        }, rest))
      );
    }
  );
};

Reset.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: _propTypes.string,

  /** Optional: Sets the class attribute */
  className: _propTypes.string,

  /** Optional: Sets the disabled attribute */
  disabled: _propTypes.bool,

  /** Optional: Sets the id attribute */
  id: _propTypes.string,

  /** Optional: Sets field as inline element */
  inline: _propTypes.bool,

  /** Optional: Determines visibility of field */
  hidden: _propTypes.bool,

  /** Optional: Sets the name attribute */
  name: _propTypes.string,

  /** Optional: Sets the style attribute */
  style: _propTypes.object,

  /** Optional: Sets the title attribute - defaults to "Submit" */
  title: _propTypes.string,

  /** Optional: Sets the value attribute - defaults to "Reset" */
  value: _propTypes.string
};

exports.default = Reset;