import { Row, Col, Container, Form, Card, Button, Stack } from 'react-bootstrap';
import Header from './Header';
import UST from './images/UST.jpg';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";




function Registration() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


  const [user, setUser] = useState({
    studentId: "",
    lastName: "",
    firstName: "",
    middleName: "",
    college: "",
    yearLevel: "",
    programEnrolled: "",
    password: "",
    confirmPassword: ""

  });

  const changeHandler = (e) => {
    // console.log(e.target)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  console.table(user)
  
  const handleSubmitReg = (event) => {
    event.preventDefault();
    // studentId 10 digits
    const regEx = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    const { password, confirmPassword, studentId } = user

    if (studentId.length === 10) {
      if(!strongRegex.test(password))
      {
        alert("Pass must be at least 8 characters cotains uppercase lowercase and special characters")

      }else{  
        // password === confirmPassword
        if(password === confirmPassword){
          setIsRegistered(true);
          // save to local storage the user attributes
          localStorage.setItem("user", JSON.stringify(user));
          alert("Registration successful! User details are saved to our system.")
        }else{
          alert("Password does not match. Please re enter both fields correctly.")
        }
      }
    } else {
      alert("Please enter a valid student ID No. with exactly 10 digits.")
    }



  }

  const renderRegistrationForm = (
    <Container>
      <Row className="pd15">
      <Col style ={{padding:'0px', height:'20vh'}}>
          <Card style ={{ height:'70vh'}}>
            <Card.Title style={{ margin: '15px 0px 20px 15px', fontWeight: 'bold' }}>Student Portal Registration</Card.Title>

            <Card.Body >
              <Form onSubmit={handleSubmitReg}>
                <Form.Group className="mb-3" >
                  <Form.Label>Student ID</Form.Label>
                  <Form.Control name="studentId" type="text" placeholder="20xxxxxxxx" required onChange={changeHandler} />
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                  <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" type="text" placeholder="Dela Cruz" required onChange={changeHandler} />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Given Name</Form.Label>
                    <Form.Control name="firstName" type="text" placeholder="Juan" required onChange={changeHandler} />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control name="middleName" type="text" placeholder="Mariano" required onChange={changeHandler} />
                  </Form.Group>
                </Stack>

                <Stack direction="horizontal" gap={2}>
                  <Form.Group className="mb-3" >
                    <Form.Label>College</Form.Label>
                    <Form.Control name="college" type="text" placeholder="CICS" required onChange={changeHandler} />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Year Level</Form.Label>
                    <Form.Select aria-label="Default select example" name="yearLevel" required onChange={changeHandler}>
                      <option>--</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="5th Year">5th Year</option>
                      </Form.Select>
                  </Form.Group>
                </Stack>

                <Form.Group className="mb-3" >
                  <Form.Label>Program Enrolled</Form.Label>
                  <Form.Control name="programEnrolled" type="text" placeholder="Information Technology" required onChange={changeHandler} />
                </Form.Group>

                <Stack direction="horizontal" gap={2}>
                  <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required onChange={changeHandler} />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" required onChange={changeHandler} />
                  </Form.Group>
                </Stack>

                <div className="d-grid gap-2">
                  <Button style={{ backgroundColor: "#A7E99C", borderColor: "#A7E99C" }} type="submit">
                    Register
                  </Button>
                  <Button variant="danger" type="reset">Cancel</Button>

                </div>
                <div className="d-grid gap-2">
                  <Link to="/login"> Login Here</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col style ={{padding:'0px', height:'20vh'}}>
          <img  src={UST} style={{ height: '70vh', width:'40vw'}}/>

        </Col>

       
      </Row>
    </Container>
  );

  const renderSuccess = (
    <Container>
      <Row>
        <Col className="pd25">
          <Card>
            <Card.Body >
              Succesfully Registered
              <Link to="/login"> Login Here</Link>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  return (
    <div className="app">
      <Header></Header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="title">
        </div>
        {isRegistered ? renderSuccess : renderRegistrationForm}
      </div>
    </div>

  );
}

export default Registration;
