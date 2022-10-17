import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

export default function LoginPage() {
  const axios = require("axios").default;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("/submit", {
        params: {
          email: email,
          password: password,
        },
      })
      .then(function (response) {
        console.log(response);
        console.log("success");
        return (
          <Alert key="success" variant="success">
            Submitted successfully!
          </Alert>
        );
      })
      .catch(function (error) {
        console.log(error);
        return (
          <Alert key="danger" variant="danger">
            Something went wrong, please try again!
          </Alert>
        );
      });
  };

  return (
    <>
      <div className="center">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
