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

  const renderRegistrationForm = (
    <Container>
      <Row >
        <Col className = "pd25">    
          <img src='.\media\website.png' height="300" width="300" class/>
        </Col>
      
        <Col className = "pd15">
          <Card>
          <Card.Title style={{margin:'15px 0px 20px 15px',fontWeight:'bold'}}>Student Portal Registration</Card.Title>

            <Card.Body >
              <Form onSubmit={handelSubmitReg}>
                <Form.Group className="mb-3" >
                  <Form.Label>Student ID</Form.Label>
                  <Form.Control type="text" placeholder="20xxxxxxxx" required/>
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                  <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Dela Cruz" required />
                  </Form.Group> 

                  <Form.Group className="mb-3" >
                    <Form.Label>Given Name</Form.Label>
                    <Form.Control type="text" placeholder="Juan" required/>
                  </Form.Group> 

                  <Form.Group className="mb-3" >
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" placeholder="Mariano" required/>
                  </Form.Group> 
                </Stack>
                
                <Stack direction="horizontal" gap={2}>
                  <Form.Group className="mb-3" >
                    <Form.Label>College</Form.Label>
                    <Form.Control type="text" placeholder="CICS" required />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Year Level</Form.Label>
                    <Form.Control type="text" placeholder="1st Year" required />
                  </Form.Group>
                </Stack>

                <Form.Group className="mb-3" >
                  <Form.Label>Program Enrolled</Form.Label>
                  <Form.Control type="text" placeholder="Information Technology" required/>
                </Form.Group>


                <Stack direction="horizontal" gap={2}>
                  <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password"required />
                  </Form.Group>
                </Stack>
              
                <div className="d-grid gap-2">
                    <Button style={{backgroundColor:"#A7E99C", borderColor:"#A7E99C"}} type ="submit">
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
      <Col className = "pd25">    
          <img src='.\media\website.png' height="300" width="300" class/>
        </Col>        
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
      <div style={{display:'flex', justifyContent:'center'}}>
        <div className = "title">
        </div>
        {isRegistered ?renderSuccess:renderRegistrationForm}
      </div>
    </div>
    
  );
}

export default Registration;
