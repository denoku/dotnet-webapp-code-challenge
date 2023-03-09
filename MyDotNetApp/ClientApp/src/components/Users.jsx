import React, { useEffect, useState } from "react";
import getUser from "./services/usersService";

const Users = () => {

    const [data, setData] = useState({
        name: ""
    });

    console.log(data);

    useEffect(() => {
        getUser().then(onGetUserSuccess).catch(onGetUserError)
    }, [])

    const onGetUserSuccess = (response) => {
        console.log(response);
        localStorage.setItem("something", response.login);
        localStorage.setItem("somethingTwo", response.login);
        let storedItem = localStorage.getItem("something");
        localStorage.removeItem("something")
        console.log(storedItem, "local storage");
        setData((prevState) => {
            const pd = { ...prevState };
            pd.name = storedItem;
            return pd;
        });
    };

    const onGetUserError = (err) => {
        console.log(err)
    }


    return (

        <p>{data.name}</p>
    )
}

export default Users;