import React from "react";
import TabContainer from "./TabContainer";
import { OverviewDocs } from "./OverviewDocs";
import { FormDocs } from "./FormDocs";
import { FieldsDocs } from "./FieldsDocs";
import { ActionsDocs } from "./ActionsDocs";
import { StylingDocs } from "./StylingDocs";
import "../components/formally-styles.css";

const Tab = ({ children, ...props }) => {
  return (
    <TabContainer.Tab {...props} style={{ padding: "0px 10px" }}>
      {children}
    </TabContainer.Tab>
  );
};

const Docs = () => {
  return (
    <div style={{ padding: 10 }} role="main">
      <h1>Formally</h1>
      <p style={{ marginBottom: 18 }}>
        A React component library for quickly creating accessibility-enabled
        forms.
        <br />
        <i>Requires React 16.3.0 or later.</i>
      </p>
      <TabContainer initialTab={0}>
        <Tab name="Overview">
          <OverviewDocs />
        </Tab>
        <Tab name="Form & Data">
          <FormDocs />
        </Tab>
        <Tab name="Fields">
          <FieldsDocs />
        </Tab>
        <Tab name="Actions">
          <ActionsDocs />
        </Tab>
        <Tab name="Styling">
          <StylingDocs />
        </Tab>
      </TabContainer>
    </div>
  );
};

export default Docs;
