import React from "react";
import product from "../components/Product";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import dress from "../dress-main.png";

export default function SizeRecommandation() {
  return (
    <>
      <Row>
        <Col md={6}>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={dress} fluid />
            </Link>
          </Card>
        </Col>

        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>ISIE OF SUMMER</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <div>Ivy Midi Dress Plus Size I Icy Blue Gingham</div>
            </ListGroup.Item>

            <ListGroup.Item>Price: $111.00</ListGroup.Item>
            <ListGroup.Item>Color: Blue</ListGroup.Item>
            <ListGroup.Item>Status: available</ListGroup.Item>
            <ListGroup.Item>
              Turn heads and stand out in the crowd wearing your Ivy Dress in
              Icy Blue Gingham. Designed to be a comfortable statement piece to
              wear on those special occasions where a little black dress just
              won't do! She looks fabulous layered with a denim jack for winter,
              and sandals for summer.
              <Col>·Boatneck shaped neckline</Col>
              <Col>·Elastic sleeve</Col>
              <Col>·Three tiers to the shin</Col>
              <Col>·Pockets</Col>
              <Col>·Designed in Australia, ethically made in Bali</Col>
            </ListGroup.Item>
            <ListGroup.Item>FABRIC: 100% PolyCotton</ListGroup.Item>
            <ListGroup.Item>
              MODEL DETAILS: Julia is 172cm tall and usually wears a size 16.
              She is wearing a size L in this style. Shoulder to Hem 118cm
            </ListGroup.Item>

            <Row>
              <Col>
                <h5>Color:</h5>
              </Col>
              <div>
                <Col md={10}>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Blue
                  </Button>
                </Col>
              </div>
            </Row>

            <Row>
              <Col>
                <h5>Sizes:</h5>
              </Col>
              <div>
                <Col md={13}>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    8
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    10
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    12
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    14
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    16
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    18
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    20
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    22
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    24
                  </Button>
                </Col>
              </div>
            </Row>
            <Card>
              <Button
                className="btn-block"
                type="button"
                style={{ color: "red", backgroundColor: "pink" }}
              >
                <h5>Size 18 is your best fit!</h5>
              </Button>
            </Card>

            <Card>
              <Button
                className="btn-block"
                type="button"
                style={{ color: "black", backgroundColor: "white" }}
              >
                Add to Cart
              </Button>
            </Card>

            <Card>
              <Button className="btn-block" type="button">
                Buy it Now
              </Button>
            </Card>

            <Card>
              <Button
                className="btn-block"
                type="button"
                style={{ color: "white", backgroundColor: "orange" }}
              >
                Add to wish list
              </Button>
            </Card>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
