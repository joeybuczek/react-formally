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

var Textarea = function Textarea(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
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
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      style = _ref.style,
      readOnly = _ref.readOnly,
      required = _ref.required,
      requiredLabel = _ref.requiredLabel,
      _ref$rows = _ref.rows,
      rows = _ref$rows === undefined ? 2 : _ref$rows,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "className", "children", "disabled", "fieldClassName", "fieldStyle", "hidden", "id", "inline", "label", "labelBelow", "name", "placeholder", "onChange", "style", "readOnly", "required", "requiredLabel", "rows"]);

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
    _Context.FormData,
    null,
    function (_ref2) {
      var formData = _ref2.formData,
          actions = _ref2.actions,
          validatedFormData = _ref2.validatedFormData,
          fieldIsValid = _ref2.fieldIsValid;
      return _react2.default.createElement(
        _FieldContainer2.default,
        {
          hidden: hidden,
          fieldClassName: fieldClassName,
          fieldStyle: fieldStyle
        },
        label && !labelBelow && fieldLabel,
        _react2.default.createElement("textarea", Object.assign({
          id: id || name,
          name: name,
          "aria-label": ariaLabel || label || name,
          "aria-invalid": !fieldIsValid(name),
          rows: rows,
          readOnly: readOnly,
          className: className,
          style: style || {},
          disabled: disabled,
          value: formData[name] || "",
          placeholder: placeholder,
          onChange: onChange || actions.handleElementChange,
          required: required
        }, rest)),
        label && labelBelow && fieldLabel,
        !fieldIsValid(name) && !!validatedFormData[name].message.length > 0 && _react2.default.createElement(
          "span",
          { className: "validation-error-message" },
          validatedFormData[name].message
        ),
        children
      );
    }
  );
};

Textarea.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: _propTypes.string,

  /** Optional: Sets the class attribute */
  className: _propTypes.string,

  /** Optional: Sets the disabled attribute */
  disabled: _propTypes.bool,

  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: _propTypes.string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: _propTypes.object,

  /** Optional: Determines visibility of field */
  hidden: _propTypes.bool,

  /** Optional: Sets the id attribute */
  id: _propTypes.string,

  /** Optional: Positions label inline with field */
  inline: _propTypes.bool,

  /** Optional: Sets label text */
  label: _propTypes.any,

  /** Optional: Positions label text below field */
  labelBelow: _propTypes.bool,

  /** Required: Sets name attribute */
  name: _propTypes.string.isRequired,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: _propTypes.func,

  /** Optional: Sets placeholder attribute */
  placeholder: _propTypes.string,

  /** Optional: Sets readonly attribute */
  readOnly: _propTypes.bool,

  /** Optional: Determines "required" asterisk to be displayed */
  required: _propTypes.bool,

  /** Optional: Determines "required" asterisk to be displayed */
  requiredLabel: _propTypes.bool,

  /** Optional: Sets rows attribute */
  rows: _propTypes.number,

  /** Optional: Sets style attribute */
  style: _propTypes.object
};

exports.default = Textarea;