import React from "react";
import CreateForm from "../../components/room/CreateForm";
import {
    useHistory
} from 'react-router-dom'

const Create = () => {
    const router = useHistory()
    const userData= window.localStorage.getItem('user')
    const user = JSON.parse(userData as any)

    if(!user) {
        router.push('/login')
    }
    
    return(
        <>
            <CreateForm />
        </>
    )
}

export default Create