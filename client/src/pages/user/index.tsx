import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import usersService from "../../services/users.service";

interface User {
    user_id: any;
    username: string;
    email: string;
    avatar: string;
    created_at: Date;
}

const User = () => {
    const {id}: any = useParams() 
    const [user, setUser] = useState<User>()

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
            <span>
                {user?.username}
            </span>
        </>
    )
}

export default User;