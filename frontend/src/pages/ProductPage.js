import React, { useState, useEffect } from "react";
import product from "../components/Product";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import products from "../Products";

export default function ProductPage() {
  const params = useParams();
  const axios = require("axios").default;
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [waist, setWaist] = useState(0);
  const [bust, setBust] = useState(0);
  const [hip, setHip] = useState(0);
  const [upperArm, setUpperArm] = useState(0);
  const [upperThigh, setUpperThigh] = useState(0);
  const [shoulderWidth, setShoulderWidth] = useState(0);
  const [recommendationSize, setRecommendationSize] = useState(0);

  useEffect(() => {
    if (params._id) {
      let item = products.find((item) => item._id == params._id) || {};
      setData(item);
    }
  }, [params._id]);

  // useEffect(() => {
  //   //if it has already get the data
  //   //Get API
  //   axios
  //     .get("/get")
  //     .then(function (response) {
  //       console.log(response);
  //       console.log("success");
  //       //get the size recommendation
  //       setRecommendationSize(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [params._id]);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    setShow(false);
    axios
      .post("/user-body/size", {
        userId: userId,
        upperArm: upperArm,
        upperThigh: upperThigh,
        shoulderWidth: shoulderWidth,
        bust: bust,
        waist: waist,
        hip: hip,
      })
      .then(function (response) {
        console.log(response);
        console.log("success");
        // return (
        //   <Alert key="success" variant="success">
        //     Submitted successfully!
        //   </Alert>
        // );
      })
      .catch(function (error) {
        console.log(error);
        // return (
        //   <Alert key="danger" variant="danger">
        //     Something went wrong, please try again!
        //   </Alert>
        // );
      });
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product._id}`}>
              <Card.Img src={data.image} fluid="true" />
            </Link>
          </Card>
        </Col>

        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{data.brand}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <div>{data.name}</div>
            </ListGroup.Item>

            <ListGroup.Item>Price: {data.price}</ListGroup.Item>
            <ListGroup.Item>Status: {data.status}</ListGroup.Item>
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

            <Row style={{ paddingTop: "15px" }}>
              <Col>
                <h5>Color:</h5>
              </Col>
              <div>
                <Col md={10}>
                  <Button className="btn-block" type="button">
                    Blue
                  </Button>
                  <Button
                    className="btn-block"
                    type="button"
                    style={{ marginLeft: "15px" }}
                  >
                    Pink
                  </Button>
                </Col>
              </div>
            </Row>

            <Row style={{ paddingTop: "15px" }}>
              <h5>Sizes:</h5>

              <Col md={7}>
                <Form.Select aria-label="Default select example">
                  <option value="1">6</option>
                  <option value="2">8</option>
                  <option value="3">10</option>
                  <option value="4">12</option>
                  <option value="5">14</option>
                  <option value="6">16</option>
                  <option value="7">18</option>
                  <option value="8">20</option>
                  <option value="9">22</option>
                  <option value="10">24</option>
                </Form.Select>
              </Col>
              <Col>
                {recommendationSize === 0 && (
                  <Button
                    className="btn-block"
                    type="button"
                    variant="link"
                    onClick={handleShow}
                    style={{ marginLeft: "15px", float: "left" }}
                  >
                    Find my fit
                  </Button>
                )}
                {recommendationSize !== 0 && (
                  <>
                    <p>We recommend you size {recommendationSize}.</p>
                  </>
                )}
              </Col>
            </Row>

            <Button
              className="btn-block"
              type="button"
              style={{ marginTop: "15px" }}
            >
              Add to Cart
            </Button>
            <Button
              className="btn-block"
              type="button"
              style={{ marginTop: "15px" }}
            >
              Buy it Now
            </Button>
          </ListGroup>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Body Measurements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Waist </Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                placeholder="Enter measurements(cm)"
                onChange={(e) => setWaist(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Bust</Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                placeholder="Enter measurements(cm)"
                onChange={(e) => setBust(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Hip</Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                placeholder="Enter measurements(cm)"
                onChange={(e) => setHip(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Upper Arm</Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                placeholder="Enter measurements(cm)"
                onChange={(e) => setUpperArm(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Upper Thigh</Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                placeholder="Enter measurements(cm)"
                onChange={(e) => setUpperThigh(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Shoulder Width</Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                placeholder="Enter measurements(cm)"
                onChange={(e) => setShoulderWidth(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Footer>
            <div style={{ marginRight: "100px", marginBottom: "60px" }}>
              <span style={{ color: "red" }}>*</span>
              <span>Mandatory Fields</span>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
