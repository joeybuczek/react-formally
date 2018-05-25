"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FieldContainer = require("../FieldContainer");

var _FieldContainer2 = _interopRequireDefault(_FieldContainer);

var _Label = require("../Label");

var _Label2 = _interopRequireDefault(_Label);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Field = function Field(_ref) {
  var children = _ref.children,
      fieldClassName = _ref.fieldClassName,
      fieldStyle = _ref.fieldStyle,
      hidden = _ref.hidden,
      id = _ref.id,
      inline = _ref.inline,
      label = _ref.label,
      labelBelow = _ref.labelBelow,
      name = _ref.name,
      required = _ref.required,
      requiredLabel = _ref.requiredLabel,
      rest = _objectWithoutProperties(_ref, ["children", "fieldClassName", "fieldStyle", "hidden", "id", "inline", "label", "labelBelow", "name", "required", "requiredLabel"]);

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
    Object.assign({
      hidden: hidden,
      inline: inline,
      fieldClassName: fieldClassName,
      fieldStyle: fieldStyle
    }, rest),
    label && !labelBelow && fieldLabel,
    children,
    label && labelBelow && fieldLabel
  );
};

Field.propTypes = {
  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: _propTypes.string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: _propTypes.object,

  /** Optional: Determines visibility of field */
  hidden: _propTypes.bool,

  /** Optional: Name to match label for attribute to */
  id: _propTypes.string,

  /** Optional: Determines if label is inline with field */
  inline: _propTypes.bool,

  /** Optional: Label text */
  label: _propTypes.string,

  /** Optional: Positions label text below field */
  labelBelow: _propTypes.bool,

  /** Required: Name to match label for attribute to */
  name: _propTypes.string.isRequired,

  /** Optional: Determines "required" asterisk to be displayed */
  required: _propTypes.bool,

  /** Optional: Determines "required" asterisk to be displayed */
  requiredLabel: _propTypes.bool
};

exports.default = Field;