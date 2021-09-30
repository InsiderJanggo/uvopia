import React from 'react'
import { useParams } from 'react-router'

const RoomPage = () => {
    const { id }: any = useParams()
    return(
        <span>This is room {id}</span>
    )
}

export default RoomPage