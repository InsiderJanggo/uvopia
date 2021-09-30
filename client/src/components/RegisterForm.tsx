import { useState } from "react";
import { 
    Button, 
    Form,
    Alert
} from "react-bootstrap";
import useForm from "../hooks/useForm";
import authService from "../services/auth.service";

const RegisterForm = () => {
    const [data, setData] = useForm({
        username: '',
        email: '',
        password: '',
        avatar: ''
    })
    const [error, setError] = useState({
        usernameError: '',
        emailError: '',
        isError: false,
        passwordError: '',
        avatarError: ''
    })

    const validation = () => { 
        if(!data) {
            setError({
                isError: true,
                usernameError: 'Username field cant be empty',
                passwordError: 'Password field cant be empty',
                emailError: 'Field cant be empty',
                avatarError: 'Field cant be empty'
            })
        }
        return true
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const isValid = validation()
        if(isValid) {
            authService.register({
                username: data.username,
                email: data.email,
                avatar: data.avatar,
                password: data.password
            })
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                {error.usernameError ? (
                    <Alert variant="danger">
                            {error.usernameError}
                    </Alert>
                ) : (
                    ""
                )}
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username"
                        name="username"
                        value={data.username}
                        onChange={setData}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {error.emailError ? (
                        <Alert variant="danger">
                                {error.emailError}
                        </Alert>
                    ) : (
                        ""
                    )}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email" 
                        value={data.email}
                        onChange={setData}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    {error.avatarError? (
                        <Alert variant="danger">
                                {error.avatarError}
                        </Alert>
                    ) : (
                        ""
                    )}
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control 
                        type="url" 
                        placeholder="Enter avatar URL"
                        name="avatar"
                        value={data.avatar}
                        onChange={setData}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {error.passwordError ? (
                        <Alert variant="danger">
                                {error.passwordError}
                        </Alert>
                    ) : (
                        ""
                    )}
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={data.password}
                        onChange={setData}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                           <span>Already have an account?  <a href="/register">Login Now</a></span>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
        </Form>
    )
}

export default RegisterForm