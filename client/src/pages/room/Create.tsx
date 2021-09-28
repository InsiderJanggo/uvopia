import React from "react";
import CreateForm from "../../components/room/CreateForm";

const Create = () => {
    const user = window.localStorage.getItem('user')
    return(
        <>
            <CreateForm />
        </>
    )
}

export default Create