import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../../components/Header";
import User from "../../interfaces/User";
import usersService from "../../services/users.service";

const UserPage = () => {
    const {id}: any = useParams() 
    const [user, setUser] = useState<User>()

    if(!id) return <span></span>

    const getOne = (id: any) => {
        usersService.getOne(id)
        .then((res) => {
            setUser(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getOne(id)
        //SET THE PAGE TITLE ACCORDING TO USER STATE
        document.title = `${user?.username} - Uvopia`
    }, [user?.username])

    return(
        <>
            <Header />
            <Container>
                    <div id={user?.user_id + '-profile'}>
                    <p id="kanjiOyaji" itemID={user?.user_id} className="txtColorRed">
                        {user?.username}
                    </p>
                    <p id="imi" className="Chiyaji">
                       Created At: {user?.created_at} 
                    </p>
                    </div>
            </Container>
        </>
    )
}

export default UserPage;