import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navigationbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="" variant="" className='NavColor'>
                <Container>
                    <Navbar.Brand href="#home">MyBrand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/product">Product</Nav.Link>
                            {/* <Nav.Link href="/cart">Cart</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigationbar;