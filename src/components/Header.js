import React from "react"
import "./component-styles/Header.css"
import Logo from "./Logo-white"

function Header() {
    return (
        <div className="header container-fluid headercont">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand"><Logo /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="/Home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/QandA">Q/A</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Join">StudyRooms</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Issues">Issues</a></li>
                        <li className="nav-item"><a className="nav-link" href="/About" >About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Contact">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;