import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    const router = useHistory()
    const userData= window.localStorage.getItem('user')
    const user = JSON.parse(userData as any)

    if(user) {
        router.push('/profile')
    }

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