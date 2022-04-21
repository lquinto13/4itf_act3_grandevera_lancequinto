import { Row, Col, Container, Form, Card, Button } from 'react-bootstrap';
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import '../App.css'

// get registered user from local storage

function Login() {
  const registeredUser = localStorage.getItem('user') || null
  const [isRegistered, setIsRegistered] = useState(false)

  const [user, setUser] = useState({
    studentId: "",
    password: ""
  });

  const changeHandler = (e) => {
    // console.log(e.target)
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  const submitHandler = (e) => {
    e.preventDefault()

    const { studentId, password } = user
    const { studentId: registeredId, password: registeredPassword, firstName } = JSON.parse(registeredUser)
    // check registeredUser is not null
    if (registeredUser) {
      //check input === registered user attributes: user, password  
      if (studentId === registeredId && password === registeredPassword) {
        setIsRegistered(true)
        alert(`Welcome ${firstName} to your Online Student Portal`)
      }
      else {
        alert("Invalid credentials")
      }
    } else {
      alert("User is not yet registered. Please register in the registration page.")
    }


  }

  const renderLoginForm = (

    <Container>
      <Row>
        <div className="loginCard">
          <div></div>
          <div>
            <Col className="pd25 pdr10">
              <Card className="nobg">
                <Card.Title style={{ margin: '15px 0px 20px 15px', fontWeight: 'bold' }}>Student Portal Login</Card.Title>
                <Card.Body className="nobg">
                  <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control type="text" placeholder="20xxxxxxxx" required name="studentId" onChange={changeHandler}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" required name="password" onChange={changeHandler}/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button style={{ backgroundColor: "#A7E99C", borderColor: "#A7E99C" }} type="submit">Login</Button>
                      <Button variant="danger" type="reset">Cancel</Button>

                    </div>
                    <div className="d-grid gap-2">
                      <Link to="/registration"> Register Here</Link>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </div >
        </div>
      </Row>
    </Container>
  );

  return (
    <div className="app">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="title">
        </div>
        {renderLoginForm}
      </div>
    </div>
  );
}

export default Login;
