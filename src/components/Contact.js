import React from "react"
import "./component-styles/About.css"
import Logo from "./Logo-white"
import Card from "./Card"
import contacts from "./contacts"
import "./component-styles/Contact.css"


function About() {
	return (
		<div>
			<div id="titleabout">
				<div class="container-fluid aboutcont">
					<nav class="navbar navbar-expand-sm navbar-dark navabout">
						<a class="navbar-brand" id="logo"><Logo /></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
							<ul class="navbar-nav ml-auto">
								<li class="nav-item"><a class="nav-link" href="/Home">Home</a></li>
								<li class="nav-item"><a class="nav-link" href="/QandA">Q and A</a></li>
								<li class="nav-item"><a class="nav-link" href="/issues">Collage Issues</a></li>
								<li class="nav-item"><a class="nav-link" href="/About" >About</a></li>
								<li class="nav-item in"><a class="nav-link" href="/Contact">Contact</a></li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			<div>
				<div>
					<div class="contactbody">
						<h2 class="contacttitle">Contacts</h2>
						<div class="container-fluid">
							<div class="row">
								<div class="col-lg-6">
									<Card
										name={contacts[0].name}
										img={contacts[0].imgURL}
										tel={contacts[0].phone}
										email={contacts[0].email}
									/>
								</div>
								<div class="col-lg-6">
									<Card
										name={contacts[1].name}
										img={contacts[1].imgURL}
										tel={contacts[1].phone}
										email={contacts[1].email}
									/>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<Card
										name={contacts[2].name}
										img={contacts[2].imgURL}
										tel={contacts[2].phone}
										email={contacts[2].email}
									/>
								</div>
								<div class="col-lg-6">
									<Card
										name={contacts[3].name}
										img={contacts[3].imgURL}
										tel={contacts[3].phone}
										email={contacts[3].email}
									/>
								</div>
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
		</div>
	);
}

export default About;

