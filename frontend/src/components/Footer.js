import React from "react";

import { Container, Row, Col } from "react-bootstrap";

/**
 * The function returns a footer component with a copyright message.
 * @returns The `Footer` component is being returned, which renders a footer element with a container,
 * row, and column that displays the text "Copyright © ProShop".
 */
function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row className="text-center">
            <Col>Copyright &copy; ProShop</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
