import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, } from "react-router-dom";
import usersService from "../services/usersService";
import './users.css';


const UserPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [repos, setRepos] = useState([]);

    console.log('userPage state', state)
    const userInfo = state.payload
    console.log("userInfo", userInfo);

    useEffect(() => {
        usersService
            .getUsersRepos(userInfo.login).then(getUsersReposSuccess).catch(getUsersReposError)
    })

    const getUsersReposSuccess = (data) => {
        console.log("getUsersReposSuccess", data);
        setRepos(data)
    }

    const getUsersReposError = (err) => {
        console.log("getUsersReposError", err);
    }

    const goBack = () => {
        navigate("/users")
    }

    return (
        <section className="user-results">
            <div className="column-6 push-1">
                <div className="user-page-profile">
                    <div className="profile-images">
                        <img className="active" src={userInfo.avatar_url} alt="user pic" />
                    </div>
                    <ul>
                        <h4>List of Repos</h4>
                        {repos.map(user => <li key={user.id}>{user.name} </li>)}
                    </ul>
                </div>
            </div>
            <div className="col">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>




    )

}

export default UserPage;


