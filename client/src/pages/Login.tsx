import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const router = useHistory()
    const userData= window.localStorage.getItem('user')
    const user = JSON.parse(userData as any)

    if(user) {
        router.push('/profile')
    }

    return(
        <>
           <Header />
            <Container>     
                <LoginForm/>
            </Container>
        </>
    )
}

export default Login