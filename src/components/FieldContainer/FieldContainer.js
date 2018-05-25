import React from "react";
import { bool, string, object } from "prop-types";

const FieldContainer = ({
  children,
  hidden,
  inline,
  fieldClassName,
  fieldStyle,
  ...rest
}) => {
  let inlineStyle = { display: "inline" };
  let hiddenStyle = { display: "none" };
  return (
    <div
      className={`field-container ${fieldClassName || ""}`}
      style={{
        ...(fieldStyle || {}),
        ...(inline ? inlineStyle : {}),
        ...(hidden ? hiddenStyle : {})
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

FieldContainer.propTypes = {
  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: object,

  /** Optional: Determines visibility */
  hidden: bool,

  /** Optional: Sets inline styling of field */
  inline: bool
};

export default FieldContainer;
