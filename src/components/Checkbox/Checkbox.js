import React from "react";
import { FormData } from "../Context";
import FieldContainer from "../FieldContainer";
import Label from "../Label";
import { string, bool, object, func, any } from "prop-types";

const Checkbox = ({
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
    {({ formData, actions, validatedFormData, fieldIsValid }) => (
      <FieldContainer
        hidden={hidden}
        inline={inline}
        fieldClassName={fieldClassName}
        fieldStyle={fieldStyle}
      >
        <div style={{ display: "inline-block" }}>
          <input
            type="checkbox"
            id={id || name}
            name={name}
            aria-label={ariaLabel || name}
            aria-invalid={!fieldIsValid(name)}
            style={{ marginRight: 5 }}
            disabled={disabled}
            checked={formData[name] || checked || false}
            value={value}
            onChange={
              onChange ||
              (e => {
                e.target = { name, value: e.target.checked };
                actions.handleElementChange(e);
              })
            }
            {...rest}
          />
          {(label || value) && (
            <Label
              htmlFor={id || name}
              inline
              style={style}
              className={`checkbox-label ${className}`}
            >
              {label || value}
            </Label>
          )}
          {children}
          {!fieldIsValid(name) && (
            <span className="validation-error-message">
              {validatedFormData[name].message}
            </span>
          )}
        </div>
      </FieldContainer>
    )}
  </FormData>
);

Checkbox.propTypes = {
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
  id: string,

  /** Optional: Determines visibility of field */
  hidden: bool,

  /** Optional: Positions label inline with field */
  inline: bool,

  /** Required: Sets the text to be displayed */
  label: string.isRequired,

  /** Required: Sets the name attribute */
  name: string.isRequired,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: func,

  /** Optional: Sets the style attribute */
  style: object,

  /** Optional: Sets the value attribute - defaults to checked attribute */
  value: any
};

export default Checkbox;
