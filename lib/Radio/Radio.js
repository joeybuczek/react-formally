"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Context = require("../Context");

var _FieldContainer = require("../FieldContainer");

var _FieldContainer2 = _interopRequireDefault(_FieldContainer);

var _Label = require("../Label");

var _Label2 = _interopRequireDefault(_Label);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Radio = function Radio(_ref) {
  var ariaLabel = _ref.ariaLabel,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? "" : _ref$className,
      checked = _ref.checked,
      children = _ref.children,
      disabled = _ref.disabled,
      fieldClassName = _ref.fieldClassName,
      fieldStyle = _ref.fieldStyle,
      id = _ref.id,
      hidden = _ref.hidden,
      inline = _ref.inline,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "className", "checked", "children", "disabled", "fieldClassName", "fieldStyle", "id", "hidden", "inline", "label", "name", "onChange", "style", "value"]);

  return _react2.default.createElement(
    _Context.FormData,
    null,
    function (_ref2) {
      var formData = _ref2.formData,
          actions = _ref2.actions;
      return _react2.default.createElement(
        _FieldContainer2.default,
        {
          hidden: hidden,
          inline: inline,
          fieldClassName: fieldClassName,
          fieldStyle: fieldStyle
        },
        _react2.default.createElement("input", Object.assign({
          type: "radio",
          role: "radiogroup",
          id: id || name,
          name: name,
          "aria-label": ariaLabel || name,
          className: className,
          style: { marginRight: 5 },
          disabled: disabled,
          checked: formData[name] === value || checked || false,
          value: value,
          onChange: onChange || actions.handleElementChange
        }, rest)),
        (label || value) && _react2.default.createElement(
          _Label2.default,
          {
            htmlFor: id || name,
            inline: true,
            style: style,
            className: "radio-label " + className
          },
          label || value
        ),
        children
      );
    }
  );
};

Radio.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: _propTypes.string,

  /** Optional: Sets the class attribute */
  className: _propTypes.string,

  /** Optional: Sets the checked attribute */
  checked: _propTypes.bool,

  /** Optional: Sets the disabled attribute */
  disabled: _propTypes.bool,

  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: _propTypes.string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: _propTypes.object,

  /** Optional: Sets the id attribute */
  id: _propTypes.string.isRequired,

  /** Optional: Determines visibility of field */
  hidden: _propTypes.bool,

  /** Optional: Positions label inline with field */
  inline: _propTypes.bool,

  /** Required: Sets the text to be displayed */
  label: _propTypes.string.isRequired,

  /** Required: Sets the name attribute */
  name: _propTypes.string.isRequired,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: _propTypes.func,

  /** Optional: Sets the style attribute */
  style: _propTypes.object,

  /** Required: Sets the value attribute - defaults to checked attribute */
  value: _propTypes.any.isRequired
};

exports.default = Radio;