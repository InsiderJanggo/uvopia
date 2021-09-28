import { useState } from "react";
import { 
    Button, 
    Form,
    Alert
} from "react-bootstrap";
import useForm from "../hooks/useForm";
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginForm = () => {
    const [data, setData] = useForm({
        username: '',
        password: ''
    })
    const [error, setError] = useState({
        usernameError: '',
        isError: false,
        passwordError: ''
    })

    const validation = () => {
        if(!data.username || !data.password) {
            setError({
                ...error,
                isError: true,
                usernameError: 'Username field cant be empty',
                passwordError: 'Password field cant be empty'
            })
            return false
        } else if(!data.username) {
            setError({
                ...error,
                isError: true,
                usernameError: 'Username field cant be empty'
            })
            return false
        } else if(!data.password) {
            setError({
                ...error,
                isError: true,
                passwordError: 'Password field cant be empty'
            })
            return false
        }

        return true
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const isValid = validation();
        if(isValid) {
            console.log(e.target.value)
        }
    }

    return(
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {error.usernameError ? (
                            <Alert variant="danger">
                                    {error.usernameError}
                            </Alert>
                    ): (
                        ""
                    )}
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="username"
                        value={data.username}
                        onChange={setData}
                        placeholder="Enter username" 
                    />
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {error.passwordError ? (
                            <Alert variant="danger">
                                    {error.usernameError}
                            </Alert>
                    ): (
                        ""
                    )}
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password" 
                        value={data.password}
                        onChange={setData}
                        placeholder="Password" 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
        </Form>
    )
}

export default LoginForm