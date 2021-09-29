import {
    useHistory
} from 'react-router-dom'
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.css'
import 'bulma/css/bulma.min.css'

const Header = () => {
    const router = useHistory()
    const userData= window.localStorage.getItem('user')
    const user = JSON.parse(userData as any)
    return (
       <>
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
            <header>
                    <Container>
                    <div className="columns reverse-row-order  p-2">
                                <div className="column is-8">
                                        <h1>Uvopia</h1>
                                        <h2>Chat With Your BestFriend!</h2>
                                        <div className="relative search-wrapper" style={{ maxWidth: '640px' }}>
                                          { /** <div className="input-with-btn">
                                                    <form>
                                                        <input type="search" autoComplete="off" placeholder="検索" />
                                                    <button aria-label="search">
                                                                <i className="search icon"></i>           
                                                        </button> 
                                                    </form>
                                            </div> */}
                                        </div>
                                </div>
                                <div className="column">
                                    <div id="kanji-logo">
                                        <img src="/src/favicon.svg" alt="uvopia-logo" />
                                    </div>
                                </div>
                            </div>
                    </Container>
            </header>
       </>
    )
}

export default Header