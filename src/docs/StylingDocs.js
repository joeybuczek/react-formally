import React from "react";
import { Form, Input, Submit } from "../components";
import { Heading as H } from "./Heading";

const figureTheme = `<Form className="formally">
  - or -
<Form className="formally-minimal">`;
const figureInline = `<Form>
  <div style={{ paddingBottom: 10 }}>
    <Input name="inline" style={{ border: "1px solid slategrey" }} />
  </div>
  <Submit style={{ border: "1px solid slategrey" }} />
</Form>`;
const figureLibrary = `<Form>
  <div className="form-group">
    <Input name="bootstrap" className="form-control" />
  </div>
  <Submit className="btn btn-primary" />
</Form>`;

export const StylingDocs = () => {
  return (
    <div>
      <H size={24}>Formally Themes</H>
      <p>
        Formally ships with two optional built-in themes for quick styling of
        form fields and components:
      </p>
      <ul>
        <li>
          "Formally": A generic, neutral theme that is pleasing on the eyes
        </li>
        <li>"Formally-Minimal": A modern, also neutral, minimalistic theme</li>
      </ul>
      <p>
        To use these themes, simply assign the <code>className</code> prop of
        the <code>{"<Form>"}</code> component to one of two values:
      </p>
      <pre>{figureTheme}</pre>
      <p>
        <i>
          All examples in this documentation are styled using the "Formally"
          theme, except where noted.
        </i>
      </p>

      <H size={18}>Formally Theme Example</H>
      <Form
        className="formally"
        prevent
        resetAfterSubmit
        style={{ width: 200 }}
      >
        <Input name="firstName" label="First Name:" />
        <Input name="lastName" label="Last Name:" />
        <Submit id="submit1" />
      </Form>

      <H size={18}>Formally-Minimal Theme Example</H>
      <Form
        className="formally-minimal"
        prevent
        resetAfterSubmit
        style={{ width: 200 }}
      >
        <Input name="firstNameMinimal" label="First Name:" labelBelow />
        <Input name="lastNameMinimal" label="Last Name:" labelBelow />
        <Submit id="submit2" />
      </Form>

      <H size={24}>Custom Styling</H>
      <p>
        If you would like to apply your own styling, or use a popular style
        library, it is easy to implement into Formally components. All Formally
        components that are capable of being styled accept both{" "}
        <code>className</code> and <code>style</code> props, and get applied to
        the appropriate underlying native element. See the documentation for
        each Formally component for more details on the underlying elements they
        contain.
      </p>
      <p>An example of applying custom inline styles:</p>
      <pre>{figureInline}</pre>
      <Form prevent resetAfterSubmit style={{ width: 200, marginLeft: 5 }}>
        <div style={{ paddingBottom: 10 }}>
          <Input name="inline" style={{ border: "1px solid slategrey" }} />
        </div>
        <Submit id="submit3" style={{ border: "1px solid slategrey" }} />
      </Form>
      <p>
        An example of applying classes from the popular{" "}
        <a
          href="https://getbootstrap.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bootstrap CSS
        </a>{" "}
        library:
      </p>
      <pre>{figureLibrary}</pre>
      <Form prevent resetAfterSubmit style={{ width: 200, marginLeft: 5 }}>
        <div className="form-group">
          <Input name="bootstrap" className="form-control" />
        </div>
        <Submit id="submit4" className="btn btn-primary" />
      </Form>
    </div>
  );
};
