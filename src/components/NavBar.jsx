import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">El Cosito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#teclados">Teclados</Nav.Link>
            <Nav.Link href="#monitores">Monitores</Nav.Link>
            <Nav.Link href="#mouse">Mouse</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>          
          </Nav>
        </Navbar.Collapse>
       
      </Container>
      <CartWidget />
    </Navbar>
    
  );
}

export default NavBar;

