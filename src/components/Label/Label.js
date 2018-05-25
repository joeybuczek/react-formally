import React from "react";
import { string, bool, object } from "prop-types";

const Label = ({
  children,
  htmlFor,
  inline,
  required,
  className = "",
  style = {},
  ...rest
}) => {
  let labelStyle = inline
    ? { display: "inline-block", marginRight: 10 }
    : { display: "block" };
  let requiredStyle = { margin: "0px 3px" };
  return (
    <label
      className={"field-label " + className}
      htmlFor={htmlFor}
      style={{ ...labelStyle, ...style }}
      {...rest}
    >
      {children}
      {required && (
        <span className="required-asterisk" style={requiredStyle}>
          *
        </span>
      )}
    </label>
  );
};

Label.propTypes = {
  /** Required: Sets the label for attribute */
  htmlFor: string.isRequired,

  /** Optional: Positions label text inline with field */
  inline: bool,

  /** Optional: Displays "required" asterisk in label text */
  required: bool,

  /** Optional: Sets class attribute */
  className: string,

  /** Optional: Sets style attribute */
  style: object
};

export default Label;
