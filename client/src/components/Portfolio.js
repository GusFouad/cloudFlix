import React from 'react';

import cfThumbnail from './thumbnails/cloudflix-thumbnail.png';
import dmThumbnail from './thumbnails/dumbmoney-thumbnail.png';
import jThumbnail from './thumbnails/juno-thumbnail.png';
const Portfolio = () => {
	return (
		<div className="home home-family port-home home-container portfolio-section">
			<h2 id="portfolio" className="tech-skills">
				Portfolio
			</h2>
			<span class="sexy-line" />
			<div className="portfolio-container">
				<div className="row portfolio-card ">
					<div className="col m12">
						<div class="card card-config">
							<span class="card-title">CloudFlix</span>
							<div class="card-image">
								<img src={cfThumbnail} className="port-img" />
							</div>
							<p>Full Stack</p>
							<div class="card-content">
								<p>
									A movie watchlist application. The user can create a profile, search the movie
									database for movies, and add it to their watchlist
								</p>
								<p className="hidden-text">
									monthly subscriptions,affiliate programs, authentication, authorization, and course
									tracking managementt.adding a bit more we need to add more
								</p>
							</div>
							<div className="card-action">
								<a href="http://www.gusfouad.com/cloudflix">View Site</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row portfolio-card col m12">
					<div>
						<div className="card card-config">
							<span className="card-title">DumbMoney</span>
							<div className="card-image">
								<img src={dmThumbnail} className="port-img" />
							</div>
							<p>Word Press</p>
							<div class="card-content">
								<p>
									Mitchell is a wealth wizard that offers online courses for wealth building and day
									trading, books, and live streams. The site offers one time products for sale,
									monthly subscriptions,affiliate programs, authentication, authorization, and course
									tracking management.
								</p>
								<p className="hidden-text">line</p>
							</div>
							<div class="card-action">
								<a href="http://dumbmoney.ca">View Site</a>
							</div>
						</div>
					</div>
				</div>
				<div class="row portfolio-card col m12">
					<div>
						<div class="card card-config">
							<span class="card-title">Juno Challenge</span>
							<div class="card-image">
								<img src={jThumbnail} className="port-img" />
							</div>
							<p>HTML & CSS</p>
							<div class="card-content">
								<p>
									Juno tech-challenge that requires a responsive, accessible, and pixel perfect
									development from design
								</p>
								<p className="hidden-text">
									monthly subscriptions,affiliate programs, authentication, authorization, and course
									tracking management and then som is this enough.lets add onre more
								</p>
							</div>
							<div class="card-action">
								<a href="http://gusfouad.com/juno.html">View Site</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
