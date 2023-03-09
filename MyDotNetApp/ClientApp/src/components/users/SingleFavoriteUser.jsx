import React, { useEffect, useState } from "react";

function SingleUser(props) {

    const [note, setNote] = useState("");

    const [showNote, setShowNote] = useState(false);

    const onShowNotesClicked = (e) => {
        e.preventDefault();
        setShowNote(!showNote)

    }

    const aUser = props.userProp

    console.log("aUser", aUser);

    useEffect(() => {
        const savedNote = localStorage.getItem(`user-${aUser.id}-note`);
        if (savedNote) {
            setNote(savedNote);
        }
    }, [aUser.id]);

    const onRemoveClicked = (evt) => {
        evt.preventDefault();
        props.onRemoveFromFavorites(aUser, evt)
    }



    return (
        <React.Fragment>
            <div className="col-md-3">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={aUser.avatar_url} alt="Card cap" />
                    <div className="card-body">
                        <h4>{aUser.login}</h4>
                        <p className="card-text">{aUser.bio}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a href={aUser.htmlUrl} className="btn btn-sm btn-outline-secondary">View Profile</a>
                                <button onClick={onRemoveClicked}>Remove from Favorites</button>
                                <button onClick={onShowNotesClicked}> {showNote ? 'Edit Note' : 'Add Note'}</button>
                            </div>
                        </div>
                    </div>
                    {showNote &&
                        (<>
                            <div>
                                <input
                                    type="text"
                                    className="mx-2 m-2"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                                <button
                                    onClick={() =>
                                        localStorage.setItem(`user-${aUser.id}-note`, note)
                                    }
                                >
                                    Save Note
                                </button>
                            </div>

                        </>
                        )
                    }
                </div>
            </div>

        </React.Fragment>
    )
}


export default SingleUser;