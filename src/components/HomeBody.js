 // eslint-disable-next-line

import React from "react"
import "./component-styles/HomeBody.css"
import title from "./images/title.png"
import doubt from "./images/doubt.png"
import study from "./images/studygrp.png"
import issues from "./images/issues.jpg"

function HomeBody() {
    return (
        <div id="HomeBody">
            <div id="HomeTitle" className="headercont">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 id="head1">Have a question?</h1>
                        <h2 id="head2">Don't hesitate ask your friend.</h2>
                        <a type="button" className="btn btn-light btn-lg enter-btn" href="/Login"><i className="fa fa-sign-in" aria-hidden="true" ></i> Login </a>
                        <a type="button" className="btn btn-outline-light btn-lg enter-btn" href="/Register"><i className="fa fa-user-circle" aria-hidden="true"></i> Register</a>
                    </div>
                    <div className="col-lg-6">
                        <img src={title} className="title-img" />
                    </div>
                </div>
            </div>
            <div id="HomeFeatures">
                <div className="container-fluid cont">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={doubt} className="doubt-img" />
                        </div>
                        <div className="col-lg-6" id="Feature">
                            <h2 id="head2">Post Something!</h2>
                            <p id="FeaturePara">Ask a question or share something with your friends.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid cont">
                    <div className="row">
                        <div className="col-lg-6" id="Feature">
                            <h2 id="head2">Study Groups!</h2>
                            <p id="FeaturePara">Form study groups online from where ever you are.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src={study} className="study-img" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid cont">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={issues} className="issues-img" />
                        </div>
                        <div className="col-lg-6" id="Feature">
                            <h2 id="head2">Issues!</h2>
                            <p id="FeaturePara">Got any issues or greviences put them here, you will get the answer in no time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;