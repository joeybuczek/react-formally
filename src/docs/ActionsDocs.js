import React from "react";
import { Form, Input, Submit, Reset, Button } from "../components";
import { QuickTable, Column } from "react-quicktable";
import { Heading as H } from "./Heading";

const figureSubmit = `<Submit />`;
const figureReset = `<Input name="name" label="Name:" />
<Reset />`;
const figureButton = `<Input name="message" label="Message:" />
<Button onClick={formData => alert(formData.message)}>
  Alert Message
</Button>`;

export const ActionsDocs = () => {
  return (
    <div>
      <H size={24}>Submit Component</H>
      <p>
        The <code>{"<Submit>"}</code> component is a wrapper around a{" "}
        <code>{'<input type="input">'}</code> element with some additional
        styling and logic built in. The actual form submit event is handled in
        the <code>{"<Form>"}</code> component, the <code>{"<Submit>"}</code>{" "}
        component simply renders an element for the user to interact with to
        trigger it.
      </p>
      <pre>{figureSubmit}</pre>
      <Form
        prevent
        className="formally"
        onSubmit={e => alert("Submitted!")}
        style={{ width: 200, marginLeft: 5 }}
      >
        <Submit />
      </Form>
      <H size={18}>Submit Props</H>
      <p>
        The <code>{"<Submit>"}</code> component can accept any valid
        props/attributes that a standard <code>{'<input type="input">'}</code>{" "}
        element can accept, and work as you would expect. There are several
        additional Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc: "If set to true, applies inline-block styling"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of input: true === hidden, false === visible"
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

      <H size={24}>Reset Component</H>
      <p>
        If you want to allow users to reset your form, the{" "}
        <code>{"<Reset>"}</code> component is available to reset your form fields. 
        If you have form validation applied to your Formally form, this component 
        will reset that as well.
      </p>
      <pre>{figureReset}</pre>
      <Form prevent className="formally" style={{ width: 200, marginLeft: 5 }}>
        <Input name="name" label="Name:" />
        <Reset />
      </Form>
      <H size={18}>Reset Props</H>
      <p>
        The <code>{"<Reset>"}</code> component can accept any valid
        props/attributes that a standard <code>{'<input type="reset">'}</code>{" "}
        element can accept, and work as you would expect. There are several
        additional Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc: "If set to true, applies inline-block styling"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of input: true === hidden, false === visible"
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

      <H size={24}>Button Component</H>
      <p>
        For all other buttons you would like to implement into a Formally form,
        the <code>{"<Button>"}</code> component is available, which is a wrapper
        around a <code>{'<button type="button">'}</code> element with some
        additional styling and logic built in.
      </p>
      <p>
        The only required prop is <code>onClick</code>, which accepts a function
        that gets passed the <code>formData</code> object that holds the current
        state of the form data.
      </p>
      <pre>{figureButton}</pre>
      <Form prevent className="formally" style={{ width: 200, marginLeft: 5 }}>
        <Input name="message" label="Message:" />
        <Button onClick={formData => alert(formData.message)}>
          Alert Message
        </Button>
      </Form>
      <H size={18}>Button Props</H>
      <p>
        The <code>{"<Button>"}</code> component can accept any valid
        props/attributes that a standard <code>{'<button type="button">'}</code>{" "}
        element can accept, and work as you would expect. There are several
        additional Formally-specific props, which are defined below.
      </p>
      <QuickTable
        data={[
          {
            name: "inline",
            type: "bool",
            req: "No",
            desc: "If set to true, applies inline-block styling"
          },
          {
            name: "hidden",
            type: "bool",
            req: "No",
            desc:
              "Determines visibility of button: true === hidden, false === visible"
          },
          {
            name: "onClick",
            type: "func",
            req: "Yes",
            desc:
              "A function that gets applied to the onClick event of the underlying button element. It gets passed the formData object that holds the current state of the form data."
          },
          {
            name: "type",
            type: "string",
            req: "No",
            desc:
              "Overrides the default type of 'button' applied to the underlying button element. Useful for implementing a custom submit trigger."
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
