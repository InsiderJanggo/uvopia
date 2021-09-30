import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import RoomService from "../../services/room.service";
import Room from "../../interfaces/Room";

interface RoomL {
    room: Room
}

const RoomList = ({room}: RoomL) => {
    const [owner, setOwner] = useState<any>();

    const getOwner = () => {
        RoomService.getOwner(room?.owner)
        .then((res) => {
            setOwner(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getOwner()
    }, [])

    return(
        <Card key={room?.room_id}>
                  <Card.Body>
                    <Card.Title>{room?.title}</Card.Title>
                    <Card.Text>
                        Owner: {owner?.username}
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