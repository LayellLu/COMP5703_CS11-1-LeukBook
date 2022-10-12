import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; LeukBook</Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">About Us</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
