import React from "react";
import { FormData } from "../Context";
import FieldContainer from "../FieldContainer";
import { string, bool, object } from "prop-types";

const Reset = ({
  ariaLabel,
  className,
  disabled,
  id,
  inline,
  hidden,
  name = "reset",
  style = {},
  title,
  value = "Reset",
  ...rest
}) => (
  <FormData>
    {({ actions }) => (
      <FieldContainer hidden={hidden} inline={inline}>
        <input
          id={id || name}
          name={name}
          aria-label={ariaLabel || value}
          type="reset"
          title={title || value}
          className={className}
          style={style}
          disabled={disabled}
          value={value}
          onClick={actions.handleFormReset}
          {...rest}
        />
      </FieldContainer>
    )}
  </FormData>
);

Reset.propTypes = {
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

  /** Optional: Sets the style attribute */
  style: object,

  /** Optional: Sets the title attribute - defaults to "Submit" */
  title: string,

  /** Optional: Sets the value attribute - defaults to "Reset" */
  value: string
};

export default Reset;
