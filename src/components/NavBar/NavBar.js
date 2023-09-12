import React from 'react';
import CardWidget from "../CardWidget/CardWidget"
import logo from './assets/logo.png'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap';

function NavBar() {
  return (
<Navbar expand="lg" className="nav-color">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo' className='img-nav'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav-link'>Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" className='drop-item'>Plantas</NavDropdown.Item>
              <NavDropdown.Item href="#" className='drop-item'>Macetas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='nav-link'>Contacto</Nav.Link>
          </Nav>
        <Form inline>
            <Row>
            <Col>
                <Form.Control
                type="text"
                placeholder="Macetas color rosa"
                className=" mr-sm-2"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit" className='boton-buscar'>Buscar</Button>
            </Col>
            </Row>
        </Form>
        <CardWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;