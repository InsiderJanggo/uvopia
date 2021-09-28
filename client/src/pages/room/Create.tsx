import React from "react";
import CreateForm from "../../components/room/CreateForm";
import {
    useHistory
} from 'react-router-dom'

const Create = () => {
    const router = useHistory()
    const user = window.localStorage.getItem('user')

    if(!user) {
        return router.push('/login')
    }

    return(
        <>
            <CreateForm />
        </>
    )
}

export default Create