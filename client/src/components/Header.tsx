import React from "react"
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

interface User {
    user: any
}

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Uvopia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                                <Button 
                                variant="primary" 
                                onClick={() => window.location.href = "/login"}
                                >Login
                                </Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header