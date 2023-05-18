import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <footer>
            <Container>
                <Row className = "text-center">
                    <Col>Copyright &copy; ProShop</Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer