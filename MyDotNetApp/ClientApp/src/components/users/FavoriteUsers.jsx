import React, { useEffect, useState } from "react";
import SingleFavoriteUser from "./SingleFavoriteUser";

function FavoriteUsers(props) {

    const [favoriteUsers, setFavoriteUsers] = useState([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem("FavoriteUsers");
        console.log("storedUsers", storedUsers);
        if (storedUsers) {
            setFavoriteUsers(JSON.parse(storedUsers));
        }
    }, []);

    const removeFromFavorites = (userToRemove) => {
        const newFavorites = favoriteUsers.filter(
            (user) => user.login !== userToRemove.login
        );
        setFavoriteUsers(newFavorites);
        localStorage.setItem("FavoriteUsers", JSON.stringify(newFavorites));
    };

    return (
        <>
            <h1>My Favorite Users</h1>
            <div className="container">
                <div className="row">
                    {favoriteUsers.map((user) => (
                        <SingleFavoriteUser
                            key={user.id}
                            userProp={user}
                            onRemoveFromFavorites={removeFromFavorites}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}


export default FavoriteUsers;