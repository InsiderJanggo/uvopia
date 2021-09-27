import { Container } from "react-bootstrap";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return(
        <>
            <Container>
                <Header />
                <LoginForm/>
            </Container>
        </>
    )
}

export default Login