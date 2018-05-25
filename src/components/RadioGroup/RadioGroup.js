import React from "react";
import Radio from "../Radio";
import FieldContainer from "../FieldContainer";
import Label from "../Label";
import { string, bool, object, func, any } from "prop-types";

const RadioGroup = ({
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
      fieldClassName={fieldClassName}
      fieldStyle={fieldStyle}
    >
      {label && !labelBelow && fieldLabel}

      {options.map((option, index) => (
        <Radio
          key={index}
          id={name + index}
          name={name}
          ariaLabel={ariaLabel || option.label || option.value}
          inline={inline}
          value={option.value}
          label={option.label || option.value}
          disabled={disabled}
          onChange={onChange}
          {...rest}
        />
      ))}

      {label && labelBelow && fieldLabel}
      {children}
    </FieldContainer>
  );
};

RadioGroup.propTypes = {
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

  /** Required: Sets the name attribute of the group */
  name: string.isRequired,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: func,

  /** Required: Options to be rendered as radio buttons */
  options: any.isRequired,

  /** Optional: Determines "required" asterisk to be displayed */
  required: bool,

  /** Optional: Determines "required" asterisk to be displayed */
  requiredLabel: bool
};

export default RadioGroup;
