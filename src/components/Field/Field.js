import React from "react";
import FieldContainer from "../FieldContainer";
import Label from "../Label";
import { string, bool, object, any } from "prop-types";

const Field = ({
  children,
  fieldClassName,
  fieldStyle,
  hidden,
  id,
  inline,
  label,
  labelBelow,
  name,
  required,
  requiredLabel,
  ...rest
}) => {
  let fieldLabel = (
    <Label
      htmlFor={id || name}
      inline={inline}
      required={required || requiredLabel}
    >
      {label}
    </Label>
  );

  return (
    <FieldContainer
      hidden={hidden}
      inline={inline}
      fieldClassName={fieldClassName}
      fieldStyle={fieldStyle}
      {...rest}
    >
      {label && !labelBelow && fieldLabel}
      {children}
      {label && labelBelow && fieldLabel}
    </FieldContainer>
  );
};

Field.propTypes = {
  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: object,

  /** Optional: Determines visibility of field */
  hidden: bool,

  /** Optional: Name to match label for attribute to */
  id: string,

  /** Optional: Determines if label is inline with field */
  inline: bool,

  /** Optional: Label text */
  label: any,

  /** Optional: Positions label text below field */
  labelBelow: bool,

  /** Required: Name to match label for attribute to */
  name: string.isRequired,

  /** Optional: Determines "required" asterisk to be displayed */
  required: bool,

  /** Optional: Determines "required" asterisk to be displayed */
  requiredLabel: bool
};

export default Field;
