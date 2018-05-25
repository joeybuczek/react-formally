import React from "react";
import { Form, FormData, Input, Submit } from "../components";
import { Heading as H } from "./Heading";

const basicUsage = `import { Form, Input, Submit } from "react-formally"

function BasicForm = () => {
  const onSubmit = (e, formData) => {
    alert("Hello " + formData.name + "!");
  };
  return (
    <Form onSubmit={onSubmit} prevent resetAfterSubmit>
      <Input name="name" label="Name:" />
      <Submit />
    </Form>
  );
}`;

const formDataUsage = `import { Form, FormData, Input, Submit } from "react-formally"

function LoginForm = () => {
  return (
    <Form onSubmit={(e, formData) => someLoginFunc(formData)}>
      <FormData>
        {({ formData }) => (
          <div>
            <Input name="username" label="Username:" />
            <Input
              name="password"
              label="Password:"
              type="password"
              hidden={!formData.username}
            />
            <Submit disabled={!formData.username || !formData.password} />
          </div>
        )}
      </FormData>
    </Form>
  );
}`;

export const OverviewDocs = () => {
  return (
    <div>
      <H size={24}>Simple Configuration</H>
      <p>
        Formally was designed with simplicity in mind. Import the components,
        compose the form fields together with a few props, and you have a
        working form where all of the form data is handled for you.
      </p>
      <H size={24}>Form Validation</H>
      <p>
        Included is form validation logic as well, so you do not have to
        configure a separate validation framework (unless you want to).
      </p>
      <H size={24}>Accessibility*</H>
      <p>
        Need accessibility? No problem. All of the Formally library components
        have accessibility properties built in that populate automatically based
        on your form configuration. Formally accessibility was tested against
        the popular <a href="https://www.deque.com/axe/">Deque aXe tool</a> for
        WCAG 2 A and AA issues.
      </p>
      <p
        style={{
          backgroundColor: "#f9f9ff",
          padding: 5,
          border: "1px solid #eeeeff"
        }}
      >
        <i>
          *The ADA & WCAG 2.0 standards may change at any time. This library is
          provided as-is, and cannot gaurantee it will always be compliant at
          any future moment in time. While the author of this library will try
          to stay up-to-date as often as possible, please always check to ensure
          you are meeting your compliance requirements and never rely solely
          upon this library to meet those requirements.
        </i>
      </p>

      <hr />

      <H size={24}>Installation</H>
      <pre>npm install --save react-formally</pre>

      <hr />

      <H size={24}>Basic Usage</H>
      <p>
        Simply import the components you need and declare them in your render
        function. The <code>{"<Form>"}</code> component is the parent, and the
        rest are children. You can place any element or component you want
        inside of <code>{"<Form>"}</code>.
      </p>
      <pre>{basicUsage}</pre>
      <Form
        className="formally"
        name="basic-form"
        prevent
        resetAfterSubmit
        onSubmit={(e, formData) => {
          //e.preventDefault();
          alert("Hello " + formData.name + "!");
        }}
        style={{ marginLeft: 5 }}
      >
        <div style={{ maxWidth: 200 }}>
          <Input name="name" label="Name:" />
          <Submit id="submit1" />
        </div>
      </Form>

      <hr />

      <H size={24}>Access to Form Data</H>
      <p>
        Sometimes you need access to the current state of the form data for
        conditional rendering (or any other) logic. This is accomplished with
        the <code>{"<FormData>"}</code> component. In the contrived example
        below, the second form field is hidden until the first one has accepted
        user input, and submit button is disabled until both fields are
        populated.
      </p>
      <pre>{formDataUsage}</pre>
      <Form
        onSubmit={(e, formData) => {
          alert("Welcome back, " + formData.username + "!");
        }}
        prevent
        resetAfterSubmit
        className="formally"
        style={{ marginLeft: 5 }}
      >
        <FormData>
          {({ formData }) => (
            <div style={{ maxWidth: 200 }}>
              <Input name="username" label="Username:" />
              <Input
                name="password"
                label="Password:"
                type="password"
                hidden={!formData.username}
              />
              <Submit
                id="submit2"
                disabled={!formData.username || !formData.password}
              />
            </div>
          )}
        </FormData>
      </Form>
    </div>
  );
};
