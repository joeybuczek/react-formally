import React, { Component } from "react";
import { Provider } from "../Context";
import { string, object, func, bool } from "prop-types";
import { validate, isValid } from "../validation";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { ...(props.defaultValues || {}) },
      formSubmitted: false,
      fieldIsValid: this.fieldIsValid,
      validatedFormData: {},
      validationRules: props.validationRules,
      actions: {
        handleElementChange: this.handleElementChange,
        handleFormSubmit: this.handleFormSubmit,
        handleFormReset: this.handleFormReset
      },
      formApi: {
        handleCustomChange: this.handleCustomChange,
        fieldIsValid: this.fieldIsValid
      },
      defaultValues: props.defaultValues
    };
  }

  formIsValid = updatedFormData => {
    let validatedFormData = validate(
      updatedFormData || this.state.formData,
      this.props.validationRules
    );
    if (isValid(validatedFormData)) {
      // If this is a change event, just update validatedFormData
      updatedFormData && this.setState({ validatedFormData });
      return true;
    } else {
      // Otherwise this is a form submittal, so set accordingly
      this.setState({ validatedFormData, formSubmitted: true });
      return false;
    }
  };

  fieldIsValid = field => {
    let { formSubmitted, validatedFormData } = this.state;
    let { validationRules } = this.props;

    if (formSubmitted && validationRules && validatedFormData[field]) {
      return validatedFormData[field].valid;
    } else {
      return true;
    }
  };

  revalidateForm = updatedFormData => {
    if (this.state.formSubmitted && this.props.validationRules) {
      this.formIsValid(updatedFormData);
    }
  };

  submitForm = e => {
    let { onSubmit, resetAfterSubmit } = this.props;
    onSubmit && onSubmit(e, this.state.formData);
    resetAfterSubmit && this.handleFormReset();
  };

  handleFormSubmit = e => {
    let { prevent, validationRules } = this.props;
    (prevent || validationRules) && e.preventDefault();
    if (validationRules) {
      if (this.formIsValid()) {
        this.submitForm(e);
      }
    } else {
      this.submitForm(e);
    }
  };

  handleFormReset = () => {
    let contextForm = this;
    let prevState = { ...this.state };
    let newState = {
      formData: { ...(contextForm.props.defaultValues || {}) },
      formSubmitted: false
    };
    contextForm.setState(newState, () => {
      contextForm.props.onReset &&
        contextForm.props.onReset(prevState.formData, newState.formData);
    });
  };

  handleElementChange = e => {
    let newState = { ...this.state };
    newState.formData[e.target.name] = e.target.value;
    this.setState(newState);
    this.revalidateForm(newState.formData);
  };

  handleCustomChange = ({ name, value }) => {
    let newState = { ...this.state };
    newState.formData[name] = value;
    this.setState(newState);
    this.revalidateForm(newState.formData);
  };

  render() {
    let {
      children,
      defaultValues,
      onSubmit,
      prevent,
      resetAfterSubmit,
      validationRules,
      ...rest
    } = this.props;
    return (
      <div className="formally-container">
        <Provider value={this.state}>
          <form onSubmit={this.handleFormSubmit} {...rest}>
            {children}
          </form>
        </Provider>
      </div>
    );
  }
}

Form.propTypes = {
  /** Optional: Specifies the character encodings that are to be used for the form submission */
  acceptCharset: string,

  /** Optional: Specifies where to send the form-data when a form is submitted */
  action: string,

  /** Optional: HTML5 only. Specifies whether a form should have autocomplete on or off */
  autoComplete: string,

  /** Optional: Class to be applied to a div wrapper around <form> */
  className: string,

  /** Optional: Object representing default values for each field */
  defaultValues: object,

  /** Optional: Specifies how the form-data should be encoded when submitting it to the server (only for method="post") */
  encType: string,

  /** Optional: Specifies the HTTP method to use when sending form-data */
  method: string,

  /** Optional: Specifies the name of the form */
  name: string,

  /** Optional: Specifies that the form should not be validated when submitted */
  noValidate: string,

  /** Optional: Invoked upon form submit. (event, formData) => void */
  onSubmit: func,

  /** Optional: Invoked upon form reset. (formData) => void */
  onReset: func,

  /** Optional: Configures the submit event to immediately invoke event.preventDefault */
  prevent: bool,

  /** Optional: Invokes form reset event after submit event is completed */
  resetAfterSubmit: bool,

  /** Optional: Specifies where to display the response that is received after submitting the form */
  target: string,

  /** Optional: Specifies the validation rules to be applied to the form fields */
  validationRules: object
};

export default Form;
