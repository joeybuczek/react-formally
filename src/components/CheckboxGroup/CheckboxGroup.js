import React from "react";
import Checkbox from "../Checkbox";
import FieldContainer from "../FieldContainer";
import Label from "../Label";
import { string, bool, object, func, any } from "prop-types";

const CheckboxGroup = ({
  ariaLabel,
  children,
  disabled,
  fieldClassName,
  fieldStyle,
  hidden,
  id,
  inline,
  label,
  labelBelow,
  name,
  onChange,
  options = [],
  required,
  requiredLabel,
  ...rest
}) => {
  let fieldLabel = (
    <Label
      htmlFor={id || name || "CheckboxGroup"}
      inline={inline}
      required={required || requiredLabel}
    >
      {label}
    </Label>
  );

  return (
    <FieldContainer
      hidden={hidden}
      fieldClassName={fieldClassName}
      fieldStyle={fieldStyle}
    >
      {label && !labelBelow && fieldLabel}

      {options.map((option, index) => (
        <Checkbox
          key={index}
          id={option.name}
          name={option.name}
          ariaLabel={ariaLabel || option.label || option.value}
          inline={inline}
          value={option.value || option.label}
          label={option.label || option.value}
          disabled={disabled}
          onChange={onChange}
          required={required}
          {...rest}
        />
      ))}

      {label && labelBelow && fieldLabel}
      {children}
    </FieldContainer>
  );
};

CheckboxGroup.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: string,

  /** Optional: Sets the disabled attribute */
  disabled: bool,

  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: object,

  /** Optional: Determines visibility of field */
  hidden: bool,

  /** Optional: Positions label inline with field */
  inline: bool,

  /** Optional: Sets the label text */
  label: string,

  /** Optional: Positions label text below field */
  labelBelow: bool,

  /** Optional: Sets the name attribute of the group */
  name: string,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: func,

  /** Required: Options to be rendered as checkboxes */
  options: any.isRequired,

  /** Optional: Determines "required" asterisk to be displayed */
  required: bool,

  /** Optional: Determines "required" asterisk to be displayed */
  requiredLabel: bool
};

export default CheckboxGroup;
