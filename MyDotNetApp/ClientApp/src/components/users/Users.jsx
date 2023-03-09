import React, { useEffect, useRef, useState } from "react";
import usersService from "../services/usersService";
import SingleUser from "./SingleUser";

const Users = () => {

    const [users, setUsers] = useState({
        arrayOfUsers: [],
        userComponents: [],
        since: 0,
        per_page: 28,
        // totalCount: 10
    });

    const [searchUser, setSearchUser] = useState({
        query: "",

    });

    const bottomRef = useRef(null);

    useEffect(() => {
        usersService
            .getAllUsers(users.since, users.per_page).then(onGetUserSuccess).catch(onGetUserError)
    }, [users.since, users.per_page])

    const onGetUserSuccess = (data) => {
        console.log(data);

        setUsers((prevState) => {
            const newUsers = { ...prevState };
            newUsers.arrayOfUsers = data;


            return newUsers
        })
    }

    const onGetUserError = (err) => {
        console.log(err)
    }

    const mapUsers = userData => {
        return <SingleUser key={"users" + userData.id} userProp={userData} />
    }

    const onFormFieldChanged = event => {
        const target = event.target;

        const newUserValue = target.value;

        const nameOfField = target.name

        setSearchUser((prevstate) => {
            const updatedFormData = { ...prevstate };
            updatedFormData[nameOfField] = newUserValue

            return updatedFormData

        });
    };

    const onUserSearch = (e) => {
        e.preventDefault();

        usersService
            .getUser(searchUser.query)
            .then(searchUserSuccess)
            .catch(searchUserError)
    }

    const searchUserSuccess = (data) => {
        console.log("searchUserSuccess", data);
        const arrayOfUsers = [];
        arrayOfUsers.push(data);
        setUsers((prevState) => {
            const pd = { ...prevState };
            pd.arrayOfUsers = arrayOfUsers;

            return pd;
        })
    }


    const searchUserError = (err) => {
        alert("User not found, Please try a different name")
        console.log("searchUserError", err);
    }

    const loadMore = () => {
        setUsers((prev) => {
            const pd = { ...prev };
            pd.since = prev.since + 28
            // pd.pageIndex = prev.pageIndex +1
            return pd
        })
    }

    return (
        <React.Fragment>
            <h1 className="">Users</h1>
            <div className="container">
                <form className="form-inline m-2">
                    <input className="" type="search" value={searchUser.query} onChange={onFormFieldChanged} name={"query"}
                        placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success m-2" onClick={onUserSearch} type="submit">Search User</button>
                </form>
                <div className="row">
                    {users.arrayOfUsers.map(mapUsers)}
                </div>
                <button className="btn btn-primary " ref={bottomRef} onClick={loadMore}>Load more Users</button>
            </div>

        </React.Fragment>
    )
}

export default Users;