import React from 'react';
import { Link } from 'react-scroll';
const HomeNav = () => {
	return (
		<div>
			<nav className="home-nav-bar ">
				<div className="container">
					<div className="nav-wrapper">
						<ul className=" home-nav">
							<li>
								<Link className="home-nav-text" to="portfolio" spy={true} smooth={true} duration={500}>
									Portfolio
								</Link>
							</li>
							<li>
								<Link className="home-nav-text" to="skills" spy={true} smooth={true} duration={500}>
									Skills
								</Link>
							</li>
							<li>
								<Link className="home-nav-text" to="contact" spy={true} smooth={true} duration={500}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HomeNav;
