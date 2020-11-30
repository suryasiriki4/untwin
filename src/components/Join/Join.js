import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer"
import "./Join.css";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="container-fluid body">
            <h1 className="heading">StudyRoom</h1>
            <form className="form">
                <input placeholder="Your name" className="inputfield" type="text" onChange={(event) => setName(event.target.value)} />
                <input placeholder="Room name" className="inputfield" type="text" onChange={(event) => setRoom(event.target.value)} />
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
                    <button className="formbutton" type="submit">join</button>
                </Link>
            </form>
            <Footer/>
        </div>
    )
}

export default Join;