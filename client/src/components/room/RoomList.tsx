import { Card, Button } from "react-bootstrap";
import Room from "../../interfaces/Room";

interface RoomL {
    room: Room
}

const RoomList = ({room}: RoomL) => {
    return(
        <Card key={room?.room_id}>
                  <Card.Body>
                    <Card.Title>{room?.title}</Card.Title>
                    <Card.Text>
                        Owner: {room?.owner}
                    </Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => window.location.href= "/room/" + room?.room_id}
                    >
                        View {room?.title}
                    </Button>
                </Card.Body>
        </Card>
    )
}

export default RoomList