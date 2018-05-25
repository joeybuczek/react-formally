import React from "react";
import { FormData } from "../Context";
import FieldContainer from "../FieldContainer";
import { string, bool, object, func } from "prop-types";

const Button = ({
  ariaLabel,
  children,
  className,
  disabled,
  id,
  inline,
  hidden,
  name = "custom",
  onClick,
  style,
  title,
  type = "button",
  value = "Custom",
  ...rest
}) => (
  <FormData>
    {({ formData }) => (
      <FieldContainer hidden={hidden} inline={inline}>
        <button
          id={id || name}
          name={name}
          aria-label={ariaLabel || value}
          type={type}
          title={title || value}
          className={className}
          style={style || {}}
          disabled={disabled}
          value={value}
          onClick={e => onClick(formData)}
          {...rest}
        >
          {children || value}
        </button>
      </FieldContainer>
    )}
  </FormData>
);

Button.propTypes = {
  /** Optional: aria-label text - defaults to name attribute */
  ariaLabel: string,

  /** Optional: Sets the class attribute */
  className: string,

  /** Optional: Sets the disabled attribute */
  disabled: bool,

  /** Optional: Sets the id attribute */
  id: string,

  /** Optional: Sets field as inline element */
  inline: bool,

  /** Optional: Determines visibility of field */
  hidden: bool,

  /** Optional: Sets the name attribute */
  name: string,

  /** Required: onClick event handler - gets passed formData as primary argument */
  onClick: func.isRequired,

  /** Optional: Sets the style attribute */
  style: object,

  /** Optional: Sets the title attribute - defaults to "Submit" */
  title: string,

  /** Optional: Sets the value attribute - defaults to "Submit" */
  value: string
};

export default Button;
