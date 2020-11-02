import React from "react"
import "./component-styles/About.css"

function Footer() {
    return (
        <div id="footer" class="container-fluid">

            <a href="https://twitter.com/" target="new-tab"><i class="fa fa-twitter footer-icon" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/" target="new-tab"><i class="fa fa-facebook footer-icon" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/" target="new-tab"><i class="fa fa-instagram footer-icon" aria-hidden="true"></i></a>
            <a href="https://www.gmail.com/" target="new-tab"><i class="fa fa-envelope footer-icon" aria-hidden="true"></i></a>

            <p id="footer-para">© Copyright 2020 UnTwine</p>

        </div>
    );
}

export default Footer;