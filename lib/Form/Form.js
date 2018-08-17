"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Context = require("../Context");

var _propTypes = require("prop-types");

var _validation = require("../validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.formIsValid = function (updatedFormData) {
      var validatedFormData = (0, _validation.validate)(updatedFormData || _this.state.formData, _this.props.validationRules);
      if ((0, _validation.isValid)(validatedFormData)) {
        // If this is a change event, just update validatedFormData
        updatedFormData && _this.setState({ validatedFormData: validatedFormData });
        return true;
      } else {
        // Otherwise this is a form submittal, so set accordingly
        _this.setState({ validatedFormData: validatedFormData, formSubmitted: true });
        return false;
      }
    };

    _this.fieldIsValid = function (field) {
      var _this$state = _this.state,
          formSubmitted = _this$state.formSubmitted,
          validatedFormData = _this$state.validatedFormData;
      var validationRules = _this.props.validationRules;


      if (formSubmitted && validationRules && validatedFormData[field]) {
        return validatedFormData[field].valid;
      } else {
        return true;
      }
    };

    _this.revalidateForm = function (updatedFormData) {
      if (_this.state.formSubmitted && _this.props.validationRules) {
        _this.formIsValid(updatedFormData);
      }
    };

    _this.submitForm = function (e) {
      var _this$props = _this.props,
          onSubmit = _this$props.onSubmit,
          resetAfterSubmit = _this$props.resetAfterSubmit;

      onSubmit && onSubmit(e, _this.state.formData);
      resetAfterSubmit && _this.handleFormReset();
    };

    _this.handleFormSubmit = function (e) {
      var _this$props2 = _this.props,
          prevent = _this$props2.prevent,
          validationRules = _this$props2.validationRules;

      (prevent || validationRules) && e.preventDefault();
      if (validationRules) {
        if (_this.formIsValid()) {
          _this.submitForm(e);
        }
      } else {
        _this.submitForm(e);
      }
    };

    _this.handleFormReset = function (e) {
      _this.setState(function (currentState) {
        return {
          formData: Object.assign({}, _this.props.defaultValues || {}),
          formSubmitted: false
        };
      });
    };

    _this.handleElementChange = function (_ref) {
      var target = _ref.target;

      _this.setState(function (_ref2) {
        var formData = _ref2.formData;

        formData[target.name] = target.value;
        return { formData: formData };
      }, function () {
        return _this.revalidateForm(_this.state.formData);
      });
    };

    _this.handleCustomChange = function (_ref3) {
      var name = _ref3.name,
          value = _ref3.value;

      _this.setState(function (_ref4) {
        var formData = _ref4.formData;

        formData[name] = value;
        return { formData: formData };
      }, function () {
        return _this.revalidateForm(_this.state.formData);
      });
    };

    _this.state = {
      formData: Object.assign({}, props.defaultValues || {}),
      formSubmitted: false,
      fieldIsValid: _this.fieldIsValid,
      validatedFormData: {},
      validationRules: props.validationRules,
      actions: {
        handleElementChange: _this.handleElementChange,
        handleFormSubmit: _this.handleFormSubmit,
        handleFormReset: _this.handleFormReset
      },
      formApi: {
        handleCustomChange: _this.handleCustomChange,
        fieldIsValid: _this.fieldIsValid
      },
      defaultValues: props.defaultValues
    };
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          defaultValues = _props.defaultValues,
          onSubmit = _props.onSubmit,
          prevent = _props.prevent,
          resetAfterSubmit = _props.resetAfterSubmit,
          validationRules = _props.validationRules,
          rest = _objectWithoutProperties(_props, ["children", "defaultValues", "onSubmit", "prevent", "resetAfterSubmit", "validationRules"]);

      return _react2.default.createElement(
        "div",
        { className: "formally-container" },
        _react2.default.createElement(
          _Context.Provider,
          { value: this.state },
          _react2.default.createElement(
            "form",
            Object.assign({ onSubmit: this.handleFormSubmit }, rest),
            children
          )
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  /** Optional: Specifies the character encodings that are to be used for the form submission */
  acceptCharset: _propTypes.string,

  /** Optional: Specifies where to send the form-data when a form is submitted */
  action: _propTypes.string,

  /** Optional: HTML5 only. Specifies whether a form should have autocomplete on or off */
  autoComplete: _propTypes.string,

  /** Optional: Class to be applied to a div wrapper around <form> */
  className: _propTypes.string,

  /** Optional: Object representing default values for each field */
  defaultValues: _propTypes.object,

  /** Optional: Specifies how the form-data should be encoded when submitting it to the server (only for method="post") */
  encType: _propTypes.string,

  /** Optional: Specifies the HTTP method to use when sending form-data */
  method: _propTypes.string,

  /** Optional: Specifies the name of the form */
  name: _propTypes.string,

  /** Optional: Specifies that the form should not be validated when submitted */
  noValidate: _propTypes.string,

  /** Optional: Invoked upon form submit. (event, formData) => void */
  onSubmit: _propTypes.func,

  /** Optional: Invoked upon form reset. (formData) => void */
  // onReset: func,

  /** Optional: Configures the submit event to immediately invoke event.preventDefault */
  prevent: _propTypes.bool,

  /** Optional: Invokes form reset event after submit event is completed */
  resetAfterSubmit: _propTypes.bool,

  /** Optional: Specifies where to display the response that is received after submitting the form */
  target: _propTypes.string,

  /** Optional: Specifies the validation rules to be applied to the form fields */
  validationRules: _propTypes.object
};

exports.default = Form;