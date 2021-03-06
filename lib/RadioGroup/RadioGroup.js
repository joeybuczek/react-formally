"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Radio = require("../Radio");

var _Radio2 = _interopRequireDefault(_Radio);

var _FieldContainer = require("../FieldContainer");

var _FieldContainer2 = _interopRequireDefault(_FieldContainer);

var _Label = require("../Label");

var _Label2 = _interopRequireDefault(_Label);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var RadioGroup = function RadioGroup(_ref) {
  var ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      disabled = _ref.disabled,
      fieldClassName = _ref.fieldClassName,
      fieldStyle = _ref.fieldStyle,
      hidden = _ref.hidden,
      id = _ref.id,
      inline = _ref.inline,
      label = _ref.label,
      labelBelow = _ref.labelBelow,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      required = _ref.required,
      requiredLabel = _ref.requiredLabel,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "children", "disabled", "fieldClassName", "fieldStyle", "hidden", "id", "inline", "label", "labelBelow", "name", "onChange", "options", "required", "requiredLabel"]);

  var fieldLabel = _react2.default.createElement(
    _Label2.default,
    {
      htmlFor: id || name,
      inline: inline,
      required: required || requiredLabel
    },
    label
  );

  return _react2.default.createElement(
    _FieldContainer2.default,
    {
      hidden: hidden,
      fieldClassName: fieldClassName,
      fieldStyle: fieldStyle
    },
    label && !labelBelow && fieldLabel,
    options.map(function (option, index) {
      return _react2.default.createElement(_Radio2.default, Object.assign({
        key: index,
        id: name + index,
        name: name,
        ariaLabel: ariaLabel || option.label || option.value,
        inline: inline,
        value: option.value,
        label: option.label || option.value,
        disabled: disabled,
        onChange: onChange
      }, rest));
    }),
    label && labelBelow && fieldLabel,
    children
  );
};

RadioGroup.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: _propTypes.string,

  /** Optional: Sets the disabled attribute */
  disabled: _propTypes.bool,

  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: _propTypes.string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: _propTypes.object,

  /** Optional: Determines visibility of field */
  hidden: _propTypes.bool,

  /** Optional: Positions label inline with field */
  inline: _propTypes.bool,

  /** Optional: Sets the label text */
  label: _propTypes.any,

  /** Optional: Positions label text below field */
  labelBelow: _propTypes.bool,

  /** Required: Sets the name attribute of the group */
  name: _propTypes.string.isRequired,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: _propTypes.func,

  /** Required: Options to be rendered as radio buttons */
  options: _propTypes.any.isRequired,

  /** Optional: Determines "required" asterisk to be displayed */
  required: _propTypes.bool,

  /** Optional: Determines "required" asterisk to be displayed */
  requiredLabel: _propTypes.bool
};

exports.default = RadioGroup;