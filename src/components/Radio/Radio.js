import React from "react";
import { FormData } from "../Context";
import FieldContainer from "../FieldContainer";
import Label from "../Label";
import { string, bool, object, func, any } from "prop-types";

const Radio = ({
  ariaLabel,
  className = "",
  checked,
  children,
  disabled,
  fieldClassName,
  fieldStyle,
  id,
  hidden,
  inline,
  label,
  name,
  onChange,
  style = {},
  value,
  ...rest
}) => (
  <FormData>
    {({ formData, actions }) => (
      <FieldContainer
        hidden={hidden}
        inline={inline}
        fieldClassName={fieldClassName}
        fieldStyle={fieldStyle}
      >
        <input
          type="radio"
          role="radiogroup"
          id={id || name}
          name={name}
          aria-label={ariaLabel || name}
          className={className}
          style={{ marginRight: 5 }}
          disabled={disabled}
          checked={formData[name] === value || checked || false}
          value={value}
          onChange={onChange || actions.handleElementChange}
          {...rest}
        />
        {(label || value) && (
          <Label
            htmlFor={id || name}
            inline
            style={style}
            className={`radio-label ${className}`}
          >
            {label || value}
          </Label>
        )}
        {children}
      </FieldContainer>
    )}
  </FormData>
);

Radio.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: string,

  /** Optional: Sets the class attribute */
  className: string,

  /** Optional: Sets the checked attribute */
  checked: bool,

  /** Optional: Sets the disabled attribute */
  disabled: bool,

  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: object,

  /** Optional: Sets the id attribute */
  id: string.isRequired,

  /** Optional: Determines visibility of field */
  hidden: bool,

  /** Optional: Positions label inline with field */
  inline: bool,

  /** Required: Sets the text to be displayed */
  label: any.isRequired,

  /** Required: Sets the name attribute */
  name: string.isRequired,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: func,

  /** Optional: Sets the style attribute */
  style: object,

  /** Required: Sets the value attribute - defaults to checked attribute */
  value: any.isRequired
};

export default Radio;
