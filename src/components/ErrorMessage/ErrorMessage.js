import React from "react";
import { FormData } from "../Context";
import { string } from "prop-types";

const ErrorMessage = ({ name, ...rest }) => {
  return (
    !!name && (
      <FormData>
        {({ fieldIsValid, validatedFormData }) => {
          return (
            !fieldIsValid(name) &&
            validatedFormData[name].message.length > 0 && (
              <span className="validation-error-message" {...rest}>
                {validatedFormData[name].message}
              </span>
            )
          );
        }}
      </FormData>
    )
  );
};

ErrorMessage.propTypes = {
  /** Required: Used to validate the form field with this name */
  name: string.isRequired
};

export default ErrorMessage;
