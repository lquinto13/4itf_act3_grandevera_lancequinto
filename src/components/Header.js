import {Navbar, Container, Stack, Col } from 'react-bootstrap';
import USTlogo from './images/Ustlogoblack.png';


function Header() {
    return(
        <Navbar>
        <Container>

                <Navbar.Brand href="/login">
                    <img
                        alt=""
                        src={USTlogo}
                        width="120"
                         height="120"
                        className="d-inline-block align-top"
                     />{' '}
                    </Navbar.Brand>
                    <Stack>
                    <div className="brandName pr"> Pontifical and Royal </div>
                    <div className="brandName school"> University of Santo Tomas</div>
                    <div className="brandName univ">The Catholic University of the Philippines</div>
                    </Stack>  
        </Container>
      </Navbar>

    );
}

export default Header;
