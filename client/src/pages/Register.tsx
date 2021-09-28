import { Container } from "react-bootstrap";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    return(
        <>
            <Header  />
            <Container>
                <RegisterForm />
            </Container>
        </>
    )
}

export default Register