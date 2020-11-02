import React from "react"
import "./component-styles/Home.css"
import Logo from "./Logo-white"
import title from "./images/title.png"
import doubt from "./images/doubt.png"
import study from "./images/studygrp.png"
import issues from "./images/issues.jpg"

function Home(){
    return(
	<div>
		<div id="title">
			<div class="container-fluid">
				<nav class="navbar navbar-expand-sm navbar-dark navbarabout">
					<a class="navbar-brand" id="logo"><Logo/></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item in"><a class="nav-link" href="/Home">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="/About" >About</a></li>
						<li class="nav-item"><a class="nav-link" href="/Contact">Contacts</a></li>
					</ul>
					</div>
				</nav>

				<div class="row">
					<div class="col-lg-6">
					<h1>Have a question?</h1>
					<h2>Don't hesitate ask your friend.</h2>
					<a type="button" class="btn btn-light btn-lg enter-btn" href="/Login"><i class="fa fa-sign-in" aria-hidden="true" ></i> Login </a>
					<a type="button" class="btn btn-outline-light btn-lg enter-btn" href="/Register"><i class="fa fa-user-circle" aria-hidden="true"></i> Register</a>
					</div>
					<div class="col-lg-6">
					<img src={title} class="title-img"/>
					</div>
				</div>
			</div>
		</div>
		<div id="features">
			<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6">
				<img src={doubt} class="doubt-img"/>
				</div>
				<div class="col-lg-6" id="feature">
					<h2>Post Something!</h2>
					<p id="featurepara">Ask a question or share something with your friends.</p>
				</div>
			</div>
			
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6" id="feature">
					<h2>Study Groups!</h2>
					<p id="featurepara">Form study groups online from where ever you are.</p>
				</div>
				<div class="col-lg-6">
				<img src={study} class="study-img"/>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6">
				<img src={issues} class="issues-img"/>
				</div>
				<div class="col-lg-6" id="feature">
					<h2>Issues!</h2>
					<p id="featurepara">Got any issues or greviences put them here, you will get the answer in no time.</p>
				</div>
			</div>
		</div>
	</div>
	<div id="footer" class="container-fluid">

  	<a href="https://twitter.com/" target="new-tab"><i class="fa fa-twitter footer-icon" aria-hidden="true"></i></a>
  	<a href="https://www.facebook.com/" target="new-tab"><i class="fa fa-facebook footer-icon" aria-hidden="true"></i></a>
  	<a href="https://www.instagram.com/" target="new-tab"><i class="fa fa-instagram footer-icon" aria-hidden="true"></i></a>
  	<a href="https://www.gmail.com/" target="new-tab"><i class="fa fa-envelope footer-icon" aria-hidden="true"></i></a>

    <p id="footer-para">© Copyright 2020 UnTwine</p>

  </div>
	</div>
	);
}

export default Home;