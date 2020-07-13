import React from 'react';
import chess from './thumbnails/symbol-chess.png';
import film from './thumbnails/symbol-film.png';
import fullstack from './thumbnails/symbol-fullstack.png';
const PortHome = () => {
	return (
		<div>
			<div id="stars" />
			<div id="stars2" />
			<div id="stars3" />

			<div className="home home-family port-home home-container">
				<div>
					<div className="header">
						<h1>Gus Fouad</h1>
						<span class="sexy-line" />
					</div>

					<a href="http://www.github.com/gusfouad">
						<i className="fab fa-github  fa-3x" />
					</a>
					<a href="https://www.linkedin.com/in/gusfouad/">
						<i className="fab fa-linkedin fa-3x" />
					</a>
				</div>
				<div className="blurb">
					<p>
						I am a full-stack developer building responsive and accessible web applications. As a filmmaker
						and a chess champion, I have excellent experience in teamwork and problem solving.
					</p>
				</div>
				<div className=" header-container">
					<div className="header-img first-card">
						<img src={fullstack} />
						<p>Full-stack Developer</p>
					</div>
					<div className="header-img second-card" />
					<div className="header-img third-card" />
					<div className="header-img first-card" />
					<div className="header-img second-card">
						<img src={film} />
						<p>Filmmaker</p>
					</div>
					<div className="header-img third-card" />
					<div className="header-img first-card" />
					<div className="header-img second-card" />
					<div className="header-img third-card">
						<img src={chess} />
						<p>Chess Champion</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortHome;
