import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../Products";
import Product from "../components/Product";


export default function Homepage() {
    return (
        <>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
