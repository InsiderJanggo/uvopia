import {
    useHistory
} from 'react-router-dom'
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    const router = useHistory()
    const userData= window.localStorage.getItem('user')
    const user = JSON.parse(userData as any)
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Uvopia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/room">Room</Nav.Link>
                    <Nav.Link href="/user">User</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    {user ? (
                            <span>Welcome, {user.username}</span>
                    ): (
                        <Button variant="primary" onClick={() => window.location.href="/login"}>
                                Login
                        </Button>
                    )}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header