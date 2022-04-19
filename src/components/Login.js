import { Row, Col, Container,Form,Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



function Login() {
  return (
    
      <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col className = "pd50">
          <Card>
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
                  <Button variant="primary" size="sm">
                   Login
                  </Button>        
                </div>       
                <div className="d-grid gap-2">
                  <a href="#"> Register Here</a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    

    
  );
}

export default Login;
