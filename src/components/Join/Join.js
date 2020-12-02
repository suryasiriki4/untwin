import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"
import "./Join.css";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="container-fluid body">
            <h1 className="heading">StudyRooms</h1>
            <form className="form">
                <input placeholder="Your name" className="inputfield" type="text" required onChange={(event) => setName(event.target.value)} />
                <input placeholder="Room name" className="inputfield" type="text" required onChange={(event) => setRoom(event.target.value)} />
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/Rooms?name=${name}&room=${room}`}>
                    <button className="formbutton" type="submit">Create |  Join</button>
                </Link>
                <div className="instpara">
                    <p>
                        Share the room name to invite your friends
                    </p>
                </div>
            </form>
            <Footer/>
        </div>
    )
}

export default Join;