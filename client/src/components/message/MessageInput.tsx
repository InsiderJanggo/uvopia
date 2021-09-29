import {
    Button,
    InputGroup,
    FormControl,
    Form
} from 'react-bootstrap'
import useForm from '../../hooks/useForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const MessageInput = () => {
    const [input, setInput] = useForm({
        message: ''
    })

    return(
        <Form autoComplete="off" autoCorrect="off">
        <InputGroup className="mb-3">
          <FormControl
                placeholder="Enter Your Message"
                aria-label="Message Input"
                name="message"
                value={input.message}
                onChange={setInput}
                aria-describedby="basic-addon2"
                required
            />
            <Button variant="outline-primary" id="button-addon2" type="submit">
                 <FontAwesomeIcon icon={ faAngleRight } />
            </Button>
          </InputGroup>
      </Form>
    )
}

export default MessageInput