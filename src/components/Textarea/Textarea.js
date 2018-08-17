import React from "react";
import { FormData } from "../Context";
import FieldContainer from "../FieldContainer";
import Label from "../Label";
import { string, number, bool, object, func, any } from "prop-types";

const Textarea = ({
  ariaLabel,
  className,
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
  placeholder,
  onChange,
  style,
  readOnly,
  required,
  requiredLabel,
  rows = 2,
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
    <FormData>
      {({ formData, actions, validatedFormData, fieldIsValid }) => (
        <FieldContainer
          hidden={hidden}
          fieldClassName={fieldClassName}
          fieldStyle={fieldStyle}
        >
          {label && !labelBelow && fieldLabel}
          <textarea
            id={id || name}
            name={name}
            aria-label={ariaLabel || label || name}
            aria-invalid={!fieldIsValid(name)}
            rows={rows}
            readOnly={readOnly}
            className={className}
            style={style || {}}
            disabled={disabled}
            value={formData[name] || ""}
            placeholder={placeholder}
            onChange={onChange || actions.handleElementChange}
            required={required}
            {...rest}
          />
          {label && labelBelow && fieldLabel}
          {!fieldIsValid(name) &&
            !!validatedFormData[name].message.length > 0 && (
              <span className="validation-error-message">
                {validatedFormData[name].message}
              </span>
            )}
          {children}
        </FieldContainer>
      )}
    </FormData>
  );
};

Textarea.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: string,

  /** Optional: Sets the class attribute */
  className: string,

  /** Optional: Sets the disabled attribute */
  disabled: bool,

  /** Optional: Applies a class to the field wrapper div */
  fieldClassName: string,

  /** Optional: Applies a style object to the field wrapper div */
  fieldStyle: object,

  /** Optional: Determines visibility of field */
  hidden: bool,

  /** Optional: Sets the id attribute */
  id: string,

  /** Optional: Positions label inline with field */
  inline: bool,

  /** Optional: Sets label text */
  label: any,

  /** Optional: Positions label text below field */
  labelBelow: bool,

  /** Required: Sets name attribute */
  name: string.isRequired,

  /** Optional: Custom onChange event handler - defaults to internal implementation */
  onChange: func,

  /** Optional: Sets placeholder attribute */
  placeholder: string,

  /** Optional: Sets readonly attribute */
  readOnly: bool,

  /** Optional: Determines "required" asterisk to be displayed */
  required: bool,

  /** Optional: Determines "required" asterisk to be displayed */
  requiredLabel: bool,

  /** Optional: Sets rows attribute */
  rows: number,

  /** Optional: Sets style attribute */
  style: object
};

export default Textarea;
