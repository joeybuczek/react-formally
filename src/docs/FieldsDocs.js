import React from "react";
import { Heading as H } from "./Heading";
import {
  Form,
  FormData,
  Input,
  Select,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Field,
  Label,
  Submit,
  Reset,
  ErrorMessage,
  rules
} from "../components";
import { QuickTable, Column } from "react-quicktable";

const figureInput = `<Input name="firstName" label="First Name:" />`;
const figureTextarea = `<Textarea name="comments" label="Comments:" rows={3} />`;
const figureSelectOptions = `{ 
  label: string,            // text to be displayed
  value: valid option value // actual value to be processed
}`;
const figureSelect = `<Select 
  name="language" 
  label="Language:" 
  options={[
    { label: "", value: "" },
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "Ruby", value: "ruby" }
  ]}
/>`;
const figureRadioGroupOptions = `{ 
  label: string,           // label to be displayed
  value: valid radio value // value for the radio element
}`;
const figureRadioGroup = `<RadioGroup
  name="yesno"
  label="Yes or No?"
  options={[
    { label: 'Yes', value: 'Y' },
    { label: 'No', value: 'N' }
  ]}
/>`;
const figureRadio = `<Radio name="occurance" id="occur1" label="Seldom" value="seldom" />
<p>...elements in between radio input controls...</p>
<Radio name="occurance" id="occur2" label="Often" value="often" />`;
const figureCheckboxGroupOptions = `{ 
  name: string,  // name attribute and internal state reference
  label: string, // label to be displayed
}`;
const figureCheckboxGroup = `<CheckboxGroup
  label="Salad Toppings:"
  options={[
    { name: "dressing", label: "Dressing" },
    { name: "croutons", label: "Croutons" }, 
    { name: "tomatoes", label: "Tomatoes" }
  ]}
/>`;
const figureCheckbox = `<Checkbox 
  name="notify" 
  label="Check to receive notifications" 
/>`;
const figureLabel = `<Label htmlFor="someInput" required>
  This is required
</Label>`;
const figureField = `<Field label="Important Information">
  <p>This is really important information!</p>
</Field>`;
const CustomInput = props => <input {...props} />;
const figureCustom = `<FormData>
  {({ formData, formApi }) => (
    <Field name="custom" label="Custom Input:">
      <CustomInput
        id="custom"
        name="custom"
        value={formData.custom}
        onChange={e =>
          formApi.handleCustomChange({
            name: "custom",
            value: e.target.value
          })
        }
      />
    </Field>
  )}
</FormData>`;
const figureErrorMessage = `<Form
  validationRules={{
    longWord: [rules.required(), rules.minLength(9)]
  }}
>
  <FormData>
    {({ formData, formApi }) => (
      <Field
        name="longWord"
        label="Long Word (min 9 characters):"
        required
      >
        <CustomInput
          id="longWord"
          name="longWord"
          value={formData.longWord}
          aria-invalid={!formApi.fieldIsValid("longWord")}
          onChange={e =>
            formApi.handleCustomChange({
              name: "longWord",
              value: e.target.value
            })
          }
        />
        <ErrorMessage name="longWord" />
      </Field>
    )}
  </FormData>
  <Reset inline />
  <Submit inline style={{ float: "right" }} />
</Form>`;

export const FieldsDocs = () => {
  return (
    <div>
      <H size={28}>Formally Field Components</H>
      <p>
        All field components in the Formally library are designed to be children
        of the <code>{"<Form>"}</code> component. They can be placed in any
        order, or be included alongside non-library components as well. Due to
        the internal data-handling design of Formally, many of the components
        require a <code>name</code> prop to be passed.
      </p>
      <p>Below are all the field-related components included in Formally.</p>
      <hr />
      <H size={24}>Input Component</H>
      <pre>{figureInput}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 200, marginLeft: 5 }}
      >
        <Input name="firstName" label="First Name:" />
      </Form>
      <H size={18}>Input Props</H>
      <p>
        The <code>{"<Input>"}</code> component can accept any valid
        props/attributes that a standard <code>{"<input>"}</code> element can
        accept, and work as you would expect. There are several additional
        Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc:
              "If set to true, applies inline-block styling to the field elements"
          },
          {
            name: "label",
            type: "string",
            req: "No",
            desc:
              "Applies a text label to the field and connects the label to the input element"
          },
          {
            name: "labelBelow",
            type: "bool",
            req: "No",
            desc: "If set to true, renders the label below the input element"
          },
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Sets both the name attribute of the field and the property of the internal state object for referencing and updating this field."
          },
          {
            name: "onChange",
            type: "func",
            req: "No",
            desc:
              "Formally will internally connect this field via the name prop, however you can provide a custom change event handler for more control of the data being processed. (event) => void"
          },
          {
            name: "required",
            type: "bool",
            req: "No",
            desc:
              "Applies an asterisk after the label if provided and also sets the required attribute on the input element for html5 validation. Do not use if using Formally form validation, use requiredLabel instead."
          },
          {
            name: "requiredLabel",
            type: "bool",
            req: "No",
            desc: "Applies an asterisk after the label if provided"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>Textarea Component</H>
      <pre>{figureTextarea}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 400, marginLeft: 5 }}
      >
        <Textarea name="comments" label="Comments:" rows={3} />
      </Form>
      <H size={18}>Textarea Props</H>
      <p>
        The <code>{"<Textarea>"}</code> component can accept any valid
        props/attributes that a standard <code>{"<textarea>"}</code> element can
        accept, and work as you would expect. There are several additional
        Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc:
              "If set to true, applies inline-block styling to the field elements"
          },
          {
            name: "label",
            type: "string",
            req: "No",
            desc:
              "Applies a text label to the field and connects the label to the textarea element"
          },
          {
            name: "labelBelow",
            type: "bool",
            req: "No",
            desc: "If set to true, renders the label below the textarea element"
          },
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Sets both the name attribute of the field and the property of the internal state object for referencing and updating this field."
          },
          {
            name: "onChange",
            type: "func",
            req: "No",
            desc:
              "Formally will internally connect this field via the name prop, however you can provide a custom change event handler for more control of the data being processed. (event) => void"
          },
          {
            name: "required",
            type: "bool",
            req: "No",
            desc:
              "Applies an asterisk after the label if provided and also sets the required attribute on the textarea element for html5 validation. Do not use if using Formally form validation, use requiredLabel instead."
          },
          {
            name: "requiredLabel",
            type: "bool",
            req: "No",
            desc: "Applies an asterisk after the label if provided"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>Select Component</H>
      <p>
        The <code>{"<Select>"}</code> component configures the underlying{" "}
        <code>{"<select>"}</code> element by accepting an <code>options</code>{" "}
        prop to apply the content for the dropdown. The <code>options</code>{" "}
        prop accepts an array of objects, which must have the following shape:
      </p>
      <pre>{figureSelectOptions}</pre>
      <pre>{figureSelect}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 200, marginLeft: 5 }}
      >
        <Select
          name="language"
          label="Language:"
          options={[
            { label: "", value: "" },
            { label: "JavaScript", value: "javascript" },
            { label: "Python", value: "python" },
            { label: "Ruby", value: "ruby" }
          ]}
        />
      </Form>
      <H size={18}>Select Props</H>
      <p>
        The <code>{"<Select>"}</code> component can accept any other valid
        props/attributes that a standard <code>{"<select>"}</code> element can
        accept, and work as you would expect. There are several additional
        Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc:
              "If set to true, applies inline-block styling to the field elements"
          },
          {
            name: "label",
            type: "string",
            req: "No",
            desc:
              "Applies a text label to the field and connects the label to the select element"
          },
          {
            name: "labelBelow",
            type: "bool",
            req: "No",
            desc: "If set to true, renders the label below the select element"
          },
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Sets both the name attribute of the field and the property of the internal state object for referencing and updating this field."
          },
          {
            name: "onChange",
            type: "func",
            req: "No",
            desc:
              "Formally will internally connect this field via the name prop, however you can provide a custom change event handler for more control of the data being processed. (event) => void"
          },
          {
            name: "options",
            type: "array<object>",
            req: "Yes",
            desc: "Options to be rendered in the dropdown"
          },
          {
            name: "required",
            type: "bool",
            req: "No",
            desc:
              "Applies an asterisk after the label if provided and also sets the required attribute on the select element for html5 validation. Do not use if using Formally form validation, use requiredLabel instead."
          },
          {
            name: "requiredLabel",
            type: "bool",
            req: "No",
            desc: "Applies an asterisk after the label if provided"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>RadioGroup Component</H>
      <p>
        The <code>{"<RadioGroup>"}</code> component renders a group of{" "}
        <code>{'<input type="radio">'}</code> elements all configured under the
        same <code>name</code> attribute, and does so by using an{" "}
        <code>options</code> prop. This prop accepts an array of objects that
        must have the following shape:
      </p>
      <pre>{figureRadioGroupOptions}</pre>
      <pre>{figureRadioGroup}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 200, marginLeft: 5 }}
        defaultValues={{ yesno: "Y" }}
      >
        <RadioGroup
          name="yesno"
          label="Yes or No?"
          options={[{ label: "Yes", value: "Y" }, { label: "No", value: "N" }]}
        />
      </Form>
      <p>
        Default values for <code>{"<RadioGroup>"}</code> components are
        configured via the <code>defaultValues</code> prop on the{" "}
        <code>{"<Form>"}</code> component.
      </p>
      <H size={18}>RadioGroup Props</H>
      <p>
        Props and attributes applied to <code>{"<RadioGroup>"}</code> get passed
        on to each rendered radio input and behave as you would expect, with the
        exception of the following, which get applied to the group as a whole:
      </p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc:
              "If set to true, applies inline-block styling to the field elements"
          },
          {
            name: "label",
            type: "string",
            req: "No",
            desc: "Applies a text label for the group of radio inputs"
          },
          {
            name: "labelBelow",
            type: "bool",
            req: "No",
            desc:
              "If set to true, renders the label below the group of radio inputs"
          },
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Sets both the name attribute for the radio inputs and the property of the internal state object for referencing and updating this group."
          },
          {
            name: "onChange",
            type: "func",
            req: "No",
            desc:
              "Formally will internally connect this field via the name prop, however you can provide a custom change event handler for more control of the data being processed. (event) => void"
          },
          {
            name: "options",
            type: "array<object>",
            req: "Yes",
            desc: "Radio inputs and their labels to render"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>Radio Component</H>
      <p>
        For situations where you need to render radio inputs that are connected
        to the same <code>name</code> attribute but are spaced further apart
        than a <code>{"<RadioGroup"}</code> would allow, the{" "}
        <code>{"<Radio>"}</code> component can be used. When using this
        component, you will need to make sure you also pass along a unique{" "}
        <code>id</code> attribute for each input, as this will be used to
        connect the label text to the radio input control.
      </p>
      <pre>{figureRadio}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 400, marginLeft: 5 }}
        defaultValues={{ occurance: "seldom" }}
      >
        <Radio name="occurance" id="occur1" label="Seldom" value="seldom" />
        <p>...elements in between radio input controls...</p>
        <Radio name="occurance" id="occur2" label="Often" value="often" />
      </Form>
      <p>
        Default values for <code>{"<Radio>"}</code> components are configured
        via the <code>defaultValues</code> prop on the <code>{"<Form>"}</code>{" "}
        component.
      </p>
      <H size={18}>Radio Props</H>
      <p>
        The <code>{"<Radio>"}</code> component can accept any other valid
        props/attributes that a standard <code>{'<input type="radio">'}</code>{" "}
        element can accept, and work as you would expect. There are several
        additional Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "id",
            type: "string",
            req: "Yes",
            desc:
              "Sets the id attribute and connects the label to the radio input control"
          },
          {
            name: "label",
            type: "string",
            req: "Yes",
            desc: "Applies a text label for the radio input"
          },
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Sets both the name attribute for the radio input and the property of the internal state object for referencing and updating this input."
          },
          {
            name: "onChange",
            type: "func",
            req: "No",
            desc:
              "Formally will internally connect this field via the name prop, however you can provide a custom change event handler for more control of the data being processed. (event) => void"
          },
          {
            name: "value",
            type: "any",
            req: "Yes",
            desc: "Sets the value of the radio input"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>CheckboxGroup Component</H>
      <p>
        The <code>{"<CheckboxGroup>"}</code> component renders a group of{" "}
        <code>{'<input type="checkbox">'}</code> elements by using an{" "}
        <code>options</code> prop. This prop accepts an array of objects that
        must have the following shape:
      </p>
      <pre>{figureCheckboxGroupOptions}</pre>
      <p>
        It is important to note that each option object has a <code>name</code>{" "}
        property, as checkboxes are treated as individuals in the form data. The
        values in the form data will be either true or false (checked or
        unchecked). This is unlike radio inputs, where they share the same data
        field.
      </p>
      <pre>{figureCheckboxGroup}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 200, marginLeft: 5 }}
      >
        <CheckboxGroup
          label="Salad Toppings:"
          options={[
            { name: "dressing", label: "Dressing" },
            { name: "croutons", label: "Croutons" },
            { name: "tomatoes", label: "Tomatoes" }
          ]}
        />
      </Form>
      <H size={18}>CheckboxGroup Props</H>
      <p>
        Props and attributes applied to <code>{"<CheckboxGroup>"}</code> get
        passed on to each rendered checkbox input and behave as you would
        expect, with the exception of the following, which get applied to the
        group as a whole:
      </p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc:
              "If set to true, applies inline-block styling to the field elements"
          },
          {
            name: "label",
            type: "string",
            req: "No",
            desc: "Applies a text label for the group of checkbox inputs"
          },
          {
            name: "labelBelow",
            type: "bool",
            req: "No",
            desc:
              "If set to true, renders the label below the group of checkbox inputs"
          },
          {
            name: "options",
            type: "array<object>",
            req: "Yes",
            desc: "Checkbox inputs and their labels to render"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>Checkbox Component</H>
      <p>
        For situations where you only need to render one checkbox input and the
        purpose for it is clear, you can use the <code>{"<Checkbox>"}</code>{" "}
        component.
      </p>
      <pre>{figureCheckbox}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 200, marginLeft: 5 }}
      >
        <Checkbox name="notify" label="Check to receive notifications" />
      </Form>
      <H size={18}>Checkbox Props</H>
      <p>
        The <code>{"<Checkbox>"}</code> component can any valid props/attributes
        that a standard <code>{'<input type="checkbox">'}</code> element can
        accept, and work as you would expect. There are several additional
        Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "id",
            type: "string",
            req: "No",
            desc:
              "Sets the id attribute and connects the label to the checkbox input control"
          },
          {
            name: "label",
            type: "string",
            req: "Yes",
            desc: "Applies a text label for the radio input"
          },
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Sets both the name attribute for the checkbox input and the property of the internal state object for referencing and updating this input."
          },
          {
            name: "onChange",
            type: "func",
            req: "No",
            desc:
              "Formally will internally connect this field via the name prop, however you can provide a custom change event handler for more control of the data being processed. (event) => void"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>Label Component</H>
      <p>
        The <code>{"<Label>"}</code> component is a convenient wrapper around
        the native <code>{"<label>"}</code> element. Most Formally library
        components have a label prop built in, however this component is useful
        if you need to configure an external or custom component with a label to
        match the style of the form.
      </p>
      <pre>{figureLabel}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 400, marginLeft: 5 }}
      >
        <Label htmlFor="someInput" required>
          This is required
        </Label>
      </Form>
      <H size={18}>Checkbox Props</H>
      <p>
        All valid attributes that a <code>{"<label>"}</code> would accept are
        valid and work as you would expect, with some additional
        Formally-specific props available.
      </p>
      <QuickTable
        data={[
          {
            name: "htmlFor",
            type: "string",
            req: "Yes",
            desc:
              "Connects the label to the appropriate id attribute of another component"
          },
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc: "Sets the display type of the label to inline-block"
          },
          {
            name: "required",
            type: "bool",
            req: "No",
            desc:
              "Displays an asterisk after the label text to indicate a required field"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={28}>Custom Components</H>
      <p>
        Formally comes with all the basic form element types, however quite
        often you will need to configure a different type of input such as a
        date picker. Any valid component or element can be configured as a child
        of the Formally <code>{"<Form>"}</code> component, but they are not
        automatically tied into the internal data handling.{" "}
      </p>
      <p>
        To accomplish this, Formally comes with the <code>{"<FormData>"}</code>{" "}
        component, which is a React <code>{"<Consumer>"}</code> component tied
        to the state of the form data. See the section for{" "}
        <code>{"<FormData>"}</code> to get a better understanding of the
        component. The sections below will cover just the configuration to get a
        non-library component connected to the form data.
      </p>
      <hr />
      <H size={24}>Field Component</H>
      <p>
        Formally makes available the standard <code>{"<Field>"}</code> wrapper
        component it uses for all of the other library components. This wrapper
        allows for a consistent and configurable section of the form for any
        component you need to wire up to the form data. With props such as
        <code>label</code> and <code>hidden</code>, it is easy to add display
        and rendering logic.
      </p>
      <pre>{figureField}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 400, marginLeft: 5 }}
      >
        <Field name="important" label="Important Information">
          <p>This is really important information!</p>
        </Field>
      </Form>
      <H size={18}>Field Props</H>
      <p>Below are the available props for this component:</p>
      <QuickTable
        data={[
          {
            name: "fieldClassName",
            type: "string",
            req: "No",
            desc: "Applies a class to the field wrapper element"
          },
          {
            name: "fieldStyle",
            type: "object",
            req: "No",
            desc: "Applies a style object to the field wrapper element"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of field: true === hidden, false === visible"
          },
          {
            name: "id",
            type: "string",
            req: "No",
            desc:
              "Can also be used to connect the label htmlFor attribute to a form field id when it is different than the name"
          },
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc:
              "If set to true, applies inline-block styling to the field label"
          },
          {
            name: "label",
            type: "string",
            req: "No",
            desc: "Applies a text label for the field"
          },
          {
            name: "labelBelow",
            type: "bool",
            req: "No",
            desc:
              "If set to true, renders the label below the group of radio inputs"
          },
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Used to connect the label htmlFor attribute to a form field id when it is the same as the name"
          },
          {
            name: "onChange",
            type: "func",
            req: "No",
            desc:
              "Formally will internally connect this field via the name prop, however you can provide a custom change event handler for more control of the data being processed. (event) => void"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
      <hr />
      <H size={24}>Connecting Custom Components</H>
      <p>
        Sometimes you need to include a form field that is not included in the
        Formally library, but still needs to connect to the internal data
        handling to properly submit the form. In these cases, the{" "}
        <code>{"<FormData>"}</code> component provides a way to do so.
      </p>
      <p>
        The <code>{"<FormData>"}</code> component is a React{" "}
        <code>{"<Consumer>"}</code> component, and has access to the value of{" "}
        <code>{"<Form>"}</code>, which is a React <code>{"<Provider>"}</code>.
        In this value passed to the render function of{" "}
        <code>{"<FormData>"}</code>, there is a property named{" "}
        <code>formData</code>, which holds all the form data, and another named{" "}
        <code>formApi</code>, which holds methods for working with the form
        data.
      </p>
      <p>
        One of these methods is <code>formApi.handleCustomChange()</code>, which
        accepts an object that represents which field name to connect it to,
        along with the value that should be updated when the change event
        occurs. Below is an example of how to use this method along with{" "}
        <code>formData</code> to wire up a custom component.
      </p>
      <pre>{figureCustom}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 400, marginLeft: 5 }}
        defaultValues={{ custom: "" }}
      >
        <FormData>
          {({ formData, formApi }) => (
            <Field name="custom" label="Custom Input:">
              <CustomInput
                id="custom"
                name="custom"
                value={formData.custom}
                onChange={e =>
                  formApi.handleCustomChange({
                    name: "custom",
                    value: e.target.value
                  })
                }
              />
              <Label style={{ marginTop: 10 }} htmlFor="formData">
                formData:
              </Label>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </Field>
          )}
        </FormData>
      </Form>
      <p
        style={{
          backgroundColor: "#f9f9ff",
          padding: 5,
          border: "1px solid #eeeeff"
        }}
      >
        <i>
          When utilizing the <code>{"<Field>"}</code> component to wrap your
          custom component, make sure to match the <code>name</code> prop to the
          <code>id</code> attribute of the form field element inside your custom
          component.
        </i>
      </p>
      <p>
        For more information on what data and methods are available, see the
        section for the <code>{"<FormData>"}</code> component.
      </p>

      <hr />

      <H size={24}>Validating Custom Components</H>
      <p>
        Formally library components have form validation logic built into them.
        For all other components that you would like to connect to a Formally
        form and include in the form validation, it can be accomplished via a
        method available through the <code>{"<FormData>"}</code> component for
        testing the validity of the value and the available{" "}
        <code>{"<ErrorMessage>"}</code> component for validation error messages.
      </p>
      <p>
        The method available through the <code>{"<FormData>"}</code> component
        is <code>formApi.fieldIsValid()</code>, and takes a single argument: a
        string value that corresponds to the <code>name</code> attribute
        associated with the form field. The method returns true if it passes
        validation, and false if it fails. Formally uses the{" "}
        <code>aria-invalid</code> attribute for validation purposes, so set the
        reversed result of the <code>fieldIsValid()</code> method as the value
        for <code>aria-invalid</code>.
      </p>
      <p>
        The <code>{"<ErrorMessage>"}</code> component is available by importing
        it from the Formally library. It accepts one required prop,{" "}
        <code>name</code>, which corresponds to both the <code>name</code>{" "}
        attribute of your component/element and the property of the{" "}
        <code>validationRules</code> object passed in to the{" "}
        <code>{"<Form>"}</code> component.
      </p>
      <p>
        Make sure to include validation rules for the component. See the below
        example for usage:
      </p>
      <pre>{figureErrorMessage}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 200, marginLeft: 5 }}
        validationRules={{
          longWord: [rules.required(), rules.minLength(9)]
        }}
      >
        <FormData>
          {({ formData, formApi }) => (
            <Field
              name="longWord"
              label="Long Word (min 9 characters):"
              required
            >
              <CustomInput
                id="longWord"
                name="longWord"
                value={formData.longWord}
                aria-invalid={!formApi.fieldIsValid("longWord")}
                onChange={e =>
                  formApi.handleCustomChange({
                    name: "longWord",
                    value: e.target.value
                  })
                }
              />
              <ErrorMessage name="longWord" />
            </Field>
          )}
        </FormData>
        <Reset inline />
        <Submit inline style={{ float: "right" }} />
      </Form>
      <H size={18}>ErrorMessage Props</H>
      <p>
        The <code>{"<ErrorMessage>"}</code> component is essentially a{" "}
        <code>{"<span>"}</code> wrapped in validation logic. The only required
        prop is <code>name</code>, any other props passed will be applied to the
        internal <code>{"<span>"}</code> element, and would work as you would
        expect. To override the Formally-specific styling applied to error
        messages, simply pass in a <code>className</code> prop with the css
        class of your choice.
      </p>
      <QuickTable
        data={[
          {
            name: "name",
            type: "string",
            req: "Yes",
            desc:
              "Used for connecting to the name attribute of the form field and to the property in the validationRules object for validity testing"
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?" />
        <Column name="desc" heading="Description" />
      </QuickTable>
    </div>
  );
};
