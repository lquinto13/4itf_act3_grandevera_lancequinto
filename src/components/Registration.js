import { Row, Col, Container,Form,Card, Button, Stack} from 'react-bootstrap';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";




function Registration() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isRegistered, setIsRegigistered] = useState(false);
  const handelSubmitReg = (event)=>{
    event.preventDefault();
    setIsRegigistered(true);

  }
  const rendersomething = (
    <div>
      Hello
    </div>
  );
  
  const renderRegistrationForm = (
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col className = "pd15">
          <Card>
            <Card.Body >
              <Form onSubmit={handelSubmitReg}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Student ID</Form.Label>
                  <Form.Control type="text" placeholder="20xxxxxxxx" />
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Dela Cruz" />
                  </Form.Group> 

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Given Name</Form.Label>
                    <Form.Control type="text" placeholder="Juan" />
                  </Form.Group> 

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" placeholder="Mariano" />
                  </Form.Group> 
                </Stack>
                
                <Stack direction="horizontal" gap={2}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>College</Form.Label>
                    <Form.Control type="text" placeholder="CICS" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Year Level</Form.Label>
                    <Form.Control type="text" placeholder="1st Year" />
                  </Form.Group>
                </Stack>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Program Enrolled</Form.Label>
                  <Form.Control type="text" placeholder="Information Technology" />
                </Form.Group>


                <Stack direction="horizontal" gap={2}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                  </Form.Group>
                </Stack>
              
                <div className="d-grid gap-2">
                  <Button type= "submit" variant="primary" size="sm">
                   Register
                  </Button>        
                </div>       
                <div className="d-grid gap-2">
                <Link to= "/login"> Login Here</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  const renderSuccess =(
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col className = "pd25">
          <Card>
            <Card.Body >
              Succesfully Registered 
              <Link to= "/login"> Login Here</Link>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  return (
    <div className ="app"> 
      <div className = "login-form">
        <div className = "title">
        </div>
        {isRegistered ?renderSuccess:renderRegistrationForm}
      </div>
    </div>
    
  );
}

export default Registration;
