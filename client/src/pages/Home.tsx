import React from "react";
import Header from "../components/Header";

export interface User {
    username: string;
    email?: string;
    password: string
}

const Home = () => {
    return (
        <>
            <Header />
        </>
    )
}   

export default Home;