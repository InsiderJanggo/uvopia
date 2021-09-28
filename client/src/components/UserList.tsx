import User from "../interfaces/User";
import {
    Card,
    Button
} from 'react-bootstrap'

interface UserI {
    user: User;
}

const UserList = ({user}: UserI) => {
    return(
        <Card key={user?.user_id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user?.avatar} />
                <Card.Body>
                    <Card.Title>{user?.username}</Card.Title>
                    <Button 
                    variant="primary"
                    onClick={() => window.location.href= "/user/" + user?.user_id}
                    >
                        View {user?.username}
                    </Button>
                </Card.Body>
        </Card>
    )
}

export default UserList