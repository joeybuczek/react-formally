import React from "react";
import { Heading as H } from "./Heading";
import { Form, FormData, Input, Submit, Reset, rules } from "../components";
import { QuickTable, Column } from "react-quicktable";

const figure1 = `import { Form, Input, Submit } from "react-formally";

const BasicForm = () => (
  <Form onSubmit={(e, formData) => someAjaxCall(formData)}>
    <Input name="request" label="Request:" />
    <Submit />
  </Form>
);
`;
const figure2 = `<Form>
  <Input name="firstName" label="First Name:" />
  <Input name="lastName" label="Last Name:" />
  <Submit />
</Form>`;
const figure3 = `{
  defaultValues: object,      // default values passed as prop
  formData: object,           // form field data
  formApi: {                  // methods for external components
    handleCustomChange: func, // onChange handler
    fieldIsValue: func        // test field validity
  },
  validatedFormData: object   // validation state of form data
}`;
const figure4 = `import { Form, FormData, Input, Submit }

<Form>
  <FormData>
    {({formData}) => (
      <div>
        <Input name="question" label="Enter a question:" />
        <Input 
          name="answer" 
          label="Now provide the answer:"
          hidden={!formData.question}
        />
        <Submit />
      </div>
    )}
  </FormData>
</Form>`;
const figure5 = `import { Form, Input, Submit, Reset, rules } from "react-formally";

<Form validationRules={{ productName: [rules.required()] }}>
  <Input name="productName" label="Product Name:" requiredLabel />
  <Input name="productDesc" label="Description:" />
  <Reset inline />
  <Submit inline style={{ float: 'right' }} />
</Form>`;
const figure6 = `{
  test: (value, formData) => boolean,
  message: string
}`;
const figure7 = `import { Form, Input, Submit, Reset, rules } from "react-formally"

<Form
  validationRules={{
    first: [rules.required(), rules.minLength(3)],
    second: [rules.required(), rules.maxLength(5)]
  }}
>
  <Input name="first" label="First (min length 3):" requiredLabel />
  <Input name="second" label="Second (max length 5):" requiredLabel />
  <Reset inline />
  <Submit inline style={{ float: "right" }} />
</Form>`;
const figureDefaultValues = `<Form 
  defaultValues={{
    greeting: "Hello!",
    question: "How are you today?"
  }}
>
  <Input name="greeting" label="Accepted Greeting:" />
  <Input name="question" label="Pleasant Question:" />
  <Reset inline />
  <Submit inline style={{ float: "right" }} />
</Form>`;

export const FormDocs = () => {
  return (
    <div>
      <H size={24}>Form Component</H>
      <p>
        The base component for Formally is the <code>{"<Form>"}</code>{" "}
        component. All other components in the library are designed to be
        children of <code>{"<Form>"}</code>. To use it, import it along with any
        other desired field components, then place them into your view.
      </p>
      <pre>{figure1}</pre>
      <div style={{ width: 200, marginLeft: 5 }}>
        <Form
          name="formFigure1"
          className="formally"
          onSubmit={e => e.preventDefault()}
          resetAfterSubmit
        >
          <Input name="request" label="Request:" />
          <Submit id="submit0" />
        </Form>
      </div>

      <p>
        The <code>{"<Form>"}</code> component accepts a number of props,
        including the <code>onSubmit</code> prop, which accepts a function to
        invoke when the user submits the form. This function gets passed two
        values: the original user-generated submit event, and an object
        representing the current state of the form data.
      </p>
      <p>
        The submit event is useful for occasions where you need to access
        methods such as <code>preventDefault()</code>. The form data object is
        of course useful for sending the user inputs to where they need to go.
        The form data is simply an object of key:value pairs, where the key is
        the name attribute of a form field, and the value is the value of that
        field at the time of the submit event.
      </p>
      <p>
        While the <code>onSubmit</code> prop is not absolutely required, it is a
        useful tool for tapping into the submit event and redirecting your form
        data around your React application.
      </p>
      <p>
        Type into each input below to see the form data object being populated:
      </p>
      <div className="row">
        <div className="col-xs-12 col-sm-8">
          <pre>{figure2}</pre>
        </div>
      </div>
      <Form
        className="formally"
        name="formFormData"
        onSubmit={e => e.preventDefault()}
        resetAfterSubmit
        defaultValues={{
          firstName: "",
          lastName: ""
        }}
      >
        <div className="row">
          <div className="col-xs-6 col-sm-4">
            <Input id="firstName1" name="firstName" label="First Name:" />
            <Input id="lastName1" name="lastName" label="Last Name:" />
            <Submit id="Submit1" />
          </div>
          <div className="col-xs-6 col-sm-4">
            <FormData>
              {({ formData }) => (
                <pre>
                  <span>formData: </span>
                  {JSON.stringify(formData, null, 2)}
                </pre>
              )}
            </FormData>
          </div>
        </div>
      </Form>

      <H size={18}>Default Form Values</H>
      <p>
        Default values in Formally are applied by using the{" "}
        <code>defaultValues</code> prop on the <code>{"<Form>"}</code>{" "}
        component. This prop accepts an object of key:value pairs, where the key
        is the name of the field and value is the value to be applied when the
        form first renders or resets.
      </p>
      <p>Below is an example of applying default values in Formally:</p>
      <pre>{figureDefaultValues}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 200, marginLeft: 5 }}
        defaultValues={{
          greeting: "Hello!",
          pleasantQuestion: "How are you today?"
        }}
      >
        <Input name="greeting" label="Accepted Greeting:" />
        <Input name="pleasantQuestion" label="Pleasant Question:" />
        <Reset inline />
        <Submit id="submitQuestion" inline style={{ float: "right" }} />
      </Form>

      <H size={18}>Form Component Props</H>
      <p>
        The <code>{"<Form>"}</code> component can accept any prop that the
        native <code>{"<form>"}</code> component can (and work the same as you
        would expect), with the addition of a few extras. You can see all the
        Form Component specific props below along with their explanations.
      </p>
      <QuickTable
        className="quicktable-cool"
        data={[
          {
            name: "defaultValues",
            type: "object",
            req: "No",
            desc:
              "An object of key:value pairs, where each key is the name of the field and the value is the starting value of that field"
          },
          {
            name: "onSubmit",
            type: "func",
            req: "No",
            desc:
              "A function that, if provided, gets passed the submit event and the form data when the form is submitted. (event, formData) => void"
          },
          {
            name: "onReset",
            type: "func",
            req: "No",
            desc:
              "A function that, if provided, would get invoked immediately after the form reset event occurs. It gets passed both the state of the form data before and after the reset. (prevFormData, defaultFormData) => void"
          },
          {
            name: "prevent",
            type: "bool",
            req: "No",
            desc:
              "Setting this to true will immediately invoke the event.preventDefault() method after form is submitted."
          },
          {
            name: "resetAfterSubmit",
            type: "bool",
            req: "No",
            desc:
              "Invokes the form reset event immediately after the submit event finishes. Good for views that allow repeated form submissions."
          },
          {
            name: "validationRules",
            type: "object",
            req: "No",
            desc:
              "If provided, enables form validation. The object should be a collection of key:value pairs, where the key is the field name and the value is an array of rules to be tested for that field. See section on validation."
          }
        ]}
      >
        <Column name="name" heading="Prop Name" />
        <Column name="type" heading="Type" />
        <Column name="req" heading="Required?">
          {record => <div style={{ textAlign: "center" }}>{record.req}</div>}
        </Column>
        <Column name="desc" heading="Description" />
      </QuickTable>

      <hr />

      <H size={24}>FormData Component</H>
      <p>
        There are times when you need to access the state of the form data, for
        example when you need to conditionally render fields based on the values
        of others, or to update components like a progress bar. The{" "}
        <code>{"<FormData>"}</code> component is useful for situations like
        these.
      </p>
      <p>
        Under the hood, Formally utilizes the React Context API to manage the
        state of the form data. The <code>{"<Form>"}</code> component contains
        the <code>{"<Provider>"}</code> and the <code>{"<FormData>"}</code>{" "}
        component is a <code>{"<Consumer>"}</code>. Many of the components in
        the Formally library have <code>{"<FormData>"}</code> embedded in them.
      </p>
      <p>
        To use the <code>{"<FormData>"}</code> component, declare as a child in
        the <code>{"<Form>"}</code> component like you would any other{" "}
        <code>{"<Consumer>"}</code> component. It gets passed the following
        object as the primary argument:
      </p>
      <pre>{figure3}</pre>
      <p>
        Below is an example of using the <code>{"<FormData>"}</code> component
        to conditionally render a field when another is populated:
      </p>
      <pre>{figure4}</pre>
      <Form
        prevent
        resetAfterSubmit
        className="formally"
        style={{ width: 300, marginLeft: 5 }}
      >
        <FormData>
          {({ formData }) => (
            <div>
              <Input name="question" label="Enter a question:" />
              <Input
                name="answer"
                label="Now provide the answer:"
                hidden={!formData.question}
              />
              <Submit id="submit2" />
            </div>
          )}
        </FormData>
      </Form>
      <p>
        The <code>{"<FormData>"}</code> component does not have to wrap all of
        the children inside of <code>{"<Form>"}</code>, only the sections that
        need access to the current state of the form data. You can also use
        multiple <code>{"<FormData>"}</code> components for more complex designs
        if you wish, although it is usually efficient to wrap all the children
        if needed in many areas.
      </p>

      <hr />

      <H size={24}>Validation</H>
      <p>
        Formally has form validation built in, and has a simple configuration
        design. The <code>{"<Form>"}</code> component accepts a{" "}
        <code>validationRules</code> prop, which is an object of key:value pairs
        where the keys are the field names to validate, and the values are an
        array of rules to test with (they will be evaluated in the order
        provided). Some of the most common rules are provided in Formally,
        however you can configure your own.
      </p>
      <p>
        If you want to take advantage of Formally form validation, do <b>not</b>{" "}
        apply the <code>required</code> prop to the library form fields. If you
        do, html5 validation will be applied instead. If you would like to
        indicate that a field is required, use the <code>requiredLabel</code>{" "}
        prop.
      </p>
      <p>Below is a simple example of using form validation in Formally:</p>
      <pre>{figure5}</pre>
      <Form
        resetAfterSubmit
        style={{ width: 200, marginLeft: 5 }}
        className="formally"
        validationRules={{ productName: [rules.required()] }}
      >
        <Input name="productName" label="Product Name:" requiredLabel />
        <Input name="productDesc" label="Description:" />
        <Reset id="reset0" inline />
        <Submit inline style={{ float: "right" }} />
      </Form>
      <p>Form reset events will reset the form validation as well. </p>

      <p>
        The included validation rules in Formally can be accessed by importing
        the <code>rules</code> object. Each property on the <code>rules</code>{" "}
        object are methods that return objects that represent both the test to
        perform on the field and the message should the test fail. Below is the
        shape of the validation object that Formally accepts. You can provide
        your own custom validation rules by passing in these objects into the
        rules array for a given field.
      </p>
      <pre>{figure6}</pre>
      <p>
        The <code>test</code> property is a function that accepts as arguments
        the value of the field being tested, and a reference to the rest of the
        current state of the form data. This function should return true if the
        test passes, and false if it fails. The <code>message</code> property
        contains the message to be display should the test fail.
      </p>
      <p>
        Formally will evaluate the rules array for a field in the order that
        they are provided. If a given test fails, it will stop evaluating the
        rest of the rules for that field until the first failing test passes.
        Below is an example of using multiple validation rules:
      </p>
      <pre>{figure7}</pre>
      <Form
        validationRules={{
          first: [rules.required(), rules.minLength(3)],
          second: [rules.required(), rules.maxLength(5)]
        }}
        className="formally"
        resetAfterSubmit
        style={{ width: 300, marginLeft: 5 }}
      >
        <Input name="first" label="First (min length 3):" requiredLabel />
        <Input name="second" label="Second (max length 5):" requiredLabel />
        <Reset id="reset1" inline />
        <Submit id="submit3" inline style={{ float: "right" }} />
      </Form>
      <H size={18}>Included Validation Rules</H>
      <p>
        The included validation rules are functions that return the validation
        rule objects described above. The current rules that ship with Formally
        are as follows:
      </p>
      <QuickTable
        data={[
          {
            rule: "required",
            sig: "(msg) => bool",
            desc:
              "Tests if the field value is provided. Accepts an optional message override."
          },
          {
            rule: "checked",
            sig: "(msg) => bool",
            desc:
              "Tests if a radio or checkbox input is checked. Accepts an optional message override."
          },
          {
            rule: "min",
            sig: "(minVal, msg) => bool",
            desc:
              "Tests if the value is at least the minimum passed in. Accepts an optional message override."
          },
          {
            rule: "max",
            sig: "(maxVal, msg) => bool",
            desc:
              "Tests if the value is at most the maximum passed in. Accepts an optional message override."
          },
          {
            rule: "minLength",
            sig: "(minVal, msg) => bool",
            desc:
              "Tests if the characters of the value are at least the minimum passed in. Accepts an optional message override."
          },
          {
            rule: "maxLength",
            sig: "(maxVal, msg) => bool",
            desc:
              "Tests if the characters of the value are at most the maximum passed in. Accepts an optional message override."
          },
          {
            rule: "email",
            sig: "(msg) => bool",
            desc:
              "Tests if the value is a valid email address format. Accepts an optional message override. This rule utilizes a regular expression, which may or may not work for your situation. If it doesn't, consider creating a custom validation rule."
          },
          {
            rule: "url",
            sig: "(msg) => bool",
            desc:
              "Tests if the value is a valid URL format. Accepts an optional message override. This rule utilizes a regular expression, which may or may not work for your situation. If it doesn't, consider creating a custom validation rule."
          },
          {
            rule: "date",
            sig: "(msg) => bool",
            desc:
              "Tests if the value is a valid date. Accepts an optional message override."
          },
          {
            rule: "regExp",
            sig: "(regex, msg) => bool",
            desc:
              "Tests if the value matches the regular expression passed in. Accepts an optional message override."
          }
        ]}
        className="quicktable-cool"
      >
        <Column name="rule" heading="Rule" />
        <Column
          name="sig"
          heading="Function Signature"
          style={{ width: 150 }}
        />
        <Column name="desc" heading="Description" />
      </QuickTable>
    </div>
  );
};
