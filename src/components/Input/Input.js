import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
    <div className="input-group mb-3">
        <input
            type="text"
            className="form-control"
            placeholder="Type.."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}
            aria-describedby="basic-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={(event) => sendMessage(event)}>send</button>
        </div>
    </div>
)

export default Input;
