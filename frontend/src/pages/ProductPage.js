import React from "react";
import product from "../components/Product"
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import dress from '../dress-main.png';
import { LinkContainer } from "react-router-bootstrap";

// export default function ProductPage(props) {
//     console.log(props);
//     return <div>product</div>;
// }


export default function ProductPage() {
    return (
        <>

            <Row>
                <Col md={5}>
                    <Card className="my-3 p-3 rounded">
                        <Link to={`/products/${product._id}`}>
                            <Card.Img src={dress} fluid="true" />
                        </Link>
                    </Card>
                </Col>

                <Col md={7}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>ISIE OF SUMMER</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <div><h5>Ivy Midi Dress Plus Size I Icy Blue Gingham</h5></div>
                        </ListGroup.Item>

                        <ListGroup.Item>Price: $111.00</ListGroup.Item>
                        <ListGroup.Item>Color: Blue</ListGroup.Item>
                        <ListGroup.Item>Status: available</ListGroup.Item>
                        <ListGroup.Item>Turn heads and stand out in the crowd wearing your Ivy Dress in Icy Blue Gingham. Designed to be a comfortable statement piece to wear on those special occasions where a little black dress just won't do! She looks fabulous layered with a denim jack for winter, and sandals for summer.
                            <Col>
                                ·Boatneck shaped neckline
                            </Col>
                            <Col>
                                ·Elastic sleeve
                            </Col>
                            <Col>
                                ·Three tiers to the shin
                            </Col>
                            <Col>
                                ·Designed in Australia, ethically made in Bali
                            </Col>
                        </ListGroup.Item>
                        <ListGroup.Item>FABRIC: 100% PolyCotton</ListGroup.Item>
                        <ListGroup.Item>MODEL DETAILS: Julia is 172cm tall and usually wears a size 16. She is wearing a size L in this style. Shoulder to Hem 118cm</ListGroup.Item>




                        {/* <Row>
                            <Col><h5>Color:</h5></Col>
                            <div>

                                <Col md={10}>
                                    <Button
                                        className="btn-block"
                                        type="button">
                                        Blue
                                    </Button>
                                </Col>
                            </div>
                        </Row> */}

                        <Row>
                            <Col md={6}><h4>Select your size:</h4></Col>
                        </Row>

                        <Row>
                            <Col md={4}>

                                <label>
                                    <Row>
                                        <Col md={4}>
                                            <select>
                                                <option value="6">6</option>
                                                <option value="8">8</option>
                                                <option value="10">10</option>
                                                <option value="12">12</option>
                                                <option value="12">14</option>
                                                <option value="12">16</option>
                                                <option value="12">18</option>
                                                <option value="12">20</option>
                                                <option value="12">22</option>
                                                <option value="12">24</option>
                                            </select>
                                        </Col>
                                    </Row>
                                </label>
                            </Col>


                            <Col>
                                <LinkContainer to="/sizerecommendation" style={{ color: 'black', backgroundColor: 'white' }}>
                                    <div>
                                        <h5>Recommend Size For Me!!</h5>
                                    </div>

                                </LinkContainer>
                            </Col>



                        </Row>









                        <Col>
                            <Card>
                                <LinkContainer to="/" style={{ color: 'white', backgroundColor: 'pink' }}>
                                    <Button

                                        className="btn-block"
                                        type="button" >
                                        Add to Cart

                                    </Button>
                                </LinkContainer>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <LinkContainer to="/" style={{ color: 'white', backgroundColor: 'black' }}>
                                    <Button

                                        className="btn-block"
                                        type="button" >
                                        Buy It Now!

                                    </Button>
                                </LinkContainer>
                            </Card>
                        </Col>



                    </ListGroup>
                </Col >
            </Row >
        </>
    );
}