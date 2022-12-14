import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(0);
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.stopPropagation()
    e.preventDefault()
    axios
      .post("/api/user/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log('response', response);
        console.log("success");
        setUserId(response.id);
        localStorage.setItem('userId', response.data.id)
        navigate('/')
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
