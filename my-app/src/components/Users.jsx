import React, { useEffect } from "react";
import getUser from "./services/usersService";

const Users = () => {


    useEffect(() => {
        getUser().then(onGetUserSuccess).catch(onGetUserError)
    }, [])

    const onGetUserSuccess = (response) => {
        console.log(response)
    }

    const onGetUserError = (err) => {
        console.log(err)
    }


    return (

        <p>Hello World</p>
    )
}

export default Users;