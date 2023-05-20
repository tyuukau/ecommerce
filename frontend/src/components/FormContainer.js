import React from "react";

import { Container, Row, Col } from "react-bootstrap";

/**
 * This is a React functional component that renders a container with a row and column, and accepts
 * children components to be rendered inside the column.
 * @returns The `FormContainer` component is being returned, which takes in a `children` prop and
 * renders a Bootstrap `Container` component with a centered `Row` and a `Col`. The `children` prop
 * is rendered inside the `Col`.
 */
function FormContainer({ children }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
