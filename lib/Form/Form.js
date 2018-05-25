"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Context = require("../Context");

var _propTypes = require("prop-types");

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

    _this.handleElementChange = function (e) {
      var newState = Object.assign({}, _this.state);
      newState.formData[e.target.name] = e.target.value;
      _this.setState(newState);
    };

    _this.handleCustomChange = function (_ref) {
      var name = _ref.name,
          value = _ref.value;

      var newState = Object.assign({}, _this.state);
      newState.formData[name] = value;
      _this.setState(newState);
    };

    _this.handleFormSubmit = function (e, data) {
      _this.props.onSubmit && _this.props.onSubmit(e, data);
    };

    _this.handleFormReset = function () {
      var contextForm = _this;
      var newState = {
        formData: Object.assign({}, contextForm.props.defaultValues || {})
      };
      contextForm.setState(newState, function () {
        contextForm.props.onReset && contextForm.props.onReset(newState.formData);
      });
    };

    _this.state = {
      formData: Object.assign({}, props.defaultValues || {})
    };
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          defaultValues = _props.defaultValues,
          rest = _objectWithoutProperties(_props, ["className", "children", "defaultValues"]);

      return _react2.default.createElement(
        "div",
        { className: className },
        _react2.default.createElement(
          _Context.Provider,
          {
            value: Object.assign({
              formData: this.state.formData,
              actions: {
                handleElementChange: this.handleElementChange,
                handleFormSubmit: this.handleFormSubmit,
                handleFormReset: this.handleFormReset
              },
              formApi: {
                handleCustomChange: this.handleCustomChange
              }
            }, { defaultValues: defaultValues })
          },
          _react2.default.createElement(
            "form",
            rest,
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
  onReset: _propTypes.func,

  /** Optional: Specifies where to display the response that is received after submitting the form */
  target: _propTypes.string
};

exports.default = Form;