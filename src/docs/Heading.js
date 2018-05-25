import React from "react";

export const Heading = ({ size, children }) => (
  <p style={{ fontSize: size, marginBottom: 5, marginTop: size / 2 }}>
    {children}
  </p>
);
