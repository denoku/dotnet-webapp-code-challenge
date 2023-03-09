import React from "react";
import { useLocation, } from "react-router-dom";
import './users.css';


const UserPage = () => {
    const { state } = useLocation();

    console.log('userPage state', state)
    const userInfo = state.payload
    console.log("userInfo", userInfo);

    return (
        <section className="user-results">
            <div className="column-6 push-1">
                <div className="user-page-profile">
                    <div className="profile-images">
                        <img className="active" src={userInfo.avatar_url} alt="user pic" />
                    </div>
                </div>
            </div>
        </section>




    )

}

export default UserPage;


