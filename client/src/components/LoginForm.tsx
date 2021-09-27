import { 
    Button, 
    Form 
} from "react-bootstrap";
import useForm from "../hooks/useForm";

const LoginForm = () => {
    const [data, setData] = useForm({
        username: '',
        password: ''
    })

    return(
      
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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