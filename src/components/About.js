import React from "react"
import "./component-styles/About.css"
import Logo from "./Logo-white"

function About() {
	return (
		<div class="aboutbody">
			<div id="titleabout">
				<div class="container-fluid aboutcont">
					<nav class="navbar navbar-expand-sm navbar-dark navabout">
						<a class="navbar-brand" id="logo"><Logo color="white" /></a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
							<ul class="navbar-nav ml-auto">
								<li class="nav-item"><a class="nav-link" href="/Home">Home</a></li>
								<li class="nav-item in"><a class="nav-link" href="/About" >About</a></li>
								<li class="nav-item"><a class="nav-link" href="/Contact">Contact</a></li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			<div>
				<div class="container-fluid">
					<h2 class="head">
						About
					</h2>
					<p class="para">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Quod autem ratione actum est, id officium appellamus. Illa videamus, quae a te de amicitia dicta sunt. Omnes enim iucundum motum, quo sensus hilaretur. Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus; Haec non erant eius, qui innumerabilis mundos infinitasque regiones, quarum nulla esset ora, nulla extremitas, mente peragravisset. Duo enim genera quae erant, fecit tria. Duo Reges: constructio interrete.

						Eiuro, inquit adridens, iniquum, hac quidem de re; Equidem e Cn. Qui ita affectus, beatum esse numquam probabis; Philosophi autem in suis lectulis plerumque moriuntur. Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Sed tu istuc dixti bene Latine, parum plane. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Idem iste, inquam, de voluptate quid sentit?

					</p>
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

