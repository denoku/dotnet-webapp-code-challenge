import React from "react";
import { useNavigate } from "react-router-dom";

function SingleUser(props) {

    const navigate = useNavigate();

    const aUser = props.userProp

    const addToFavorites = (user) => {
        console.log("addToFavorites", user);
        let favoriteUsers = localStorage.getItem("FavoriteUsers");
        if (!favoriteUsers) {
            favoriteUsers = [];
        } else {
            favoriteUsers = JSON.parse(favoriteUsers);
        }

        if (favoriteUsers.indexOf(user) === -1) {
            favoriteUsers.push(user);
            localStorage.setItem("FavoriteUsers", JSON.stringify(favoriteUsers));
        } else {
            console.log(`${user} already exists in favorites`);
        }
    }

    const navigateToUser = () => {
        const state = { type: 'User', payload: aUser }
        console.log('state', state)
        navigate(`/user/${aUser.login}`, { state: state });
    }

    return (
        <React.Fragment>
            <div className="col-md-3">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" onClick={navigateToUser} src={aUser.avatar_url} alt="Card cap" />
                    <div className="card-body">
                        <h4>{aUser.login}</h4>
                        <p className="card-text">{aUser.bio}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a href={aUser.htmlUrl} className="btn btn-sm btn-outline-secondary">View Profile</a>
                                <form method="post" action="Favorites">
                                    <input type="hidden" name="username" value={aUser.login} />
                                    <button type="button" className="btn btn-sm btn-outline-secondary"
                                        onClick={() => addToFavorites(aUser)}>Add to Favorites</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}


export default SingleUser;