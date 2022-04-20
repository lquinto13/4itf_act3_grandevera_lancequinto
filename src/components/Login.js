import { Row, Col, Container, Form, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import '../App.css'




function Login() {
  return (

    <Container>
      <Row>
        <div className="loginCard">
          <div></div>
          <div>
            <Col className="pd25">
              <Card>
                <Card.Title style={{margin:'15px 0px 20px 15px',fontWeight:'bold'}}>Student Portal Login</Card.Title>
                <Card.Body >
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control type="email" placeholder="20xxxxxxxx" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                    <Button style={{backgroundColor:"#A7E99C", borderColor:"#A7E99C"}}>Login</Button>
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
}

export default Login;
