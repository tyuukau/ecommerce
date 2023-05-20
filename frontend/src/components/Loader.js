import React from "react";

import { Spinner } from "react-bootstrap";

/**
 * The function returns a spinner component with animation and a loading message.
 * @returns A React component that renders a spinner with a border animation and a "Loading..." text.
 */
function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default Loader;
