import React from 'react';
import { Link } from 'react-scroll';
const HomeNav = () => {
	return (
		<div>
			<nav className="#757575 grey darken-1">
				<div className="container">
					<div className="nav-wrapper">
						<ul className=" home-nav">
							<li>
								<Link to="portfolio" spy={true} smooth={true} duration={500}>
									Portfolio
								</Link>
							</li>
							<li>
								<Link to="skills" spy={true} smooth={true} duration={500}>
									Skills
								</Link>
							</li>
							<li>
								<Link to="contact" spy={true} smooth={true} duration={500}>
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
