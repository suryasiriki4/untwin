import React from "react"
import "./component-styles/Header.css"
import Logo from "./Logo-white"

function Header() {
    return (
        <div className="header container-fluid headercont">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand"><Logo /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="/Home">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/QandA">Q/A</a></li>
						<li class="nav-item"><a class="nav-link" href="/issues">Issues</a></li>
                        <li class="nav-item"><a class="nav-link" href="/About" >About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/Contact">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;