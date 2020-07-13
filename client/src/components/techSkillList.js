import React from 'react';
import techCss from './tech-skill-logos/tech-skill-css.png';
import techwordpress from './tech-skill-logos/tech-skill-wordpress.png';
import techgit from './tech-skill-logos/tech-skill-git.png';
import techgithub from './tech-skill-logos/tech-skill-github.png';
import techheroku from './tech-skill-logos/tech-skill-heroku.png';
import techhtml from './tech-skill-logos/tech-skill-html.png';
import techjquery from './tech-skill-logos/tech-skill-jquery.png';
import techjs from './tech-skill-logos/tech-skill-js.png';
import technodejs from './tech-skill-logos/tech-skill-nodejs.png';
import techpython from './tech-skill-logos/tech-skill-python.png';
import techreact from './tech-skill-logos/tech-skill-react.png';
import techsass from './tech-skill-logos/tech-skill-sass.png';
import techvscode from './tech-skill-logos/tech-skill-vscode.png';
const TechList = () => {
	return (
		<div className="portfolio-section">
			<h2 id="skills" className="tech-skills">
				Technical Skills
			</h2>
			<span className="sexy-line" />
			<ul className="tech-list">
				<li className="tech-img">
					<img src={techhtml} />
					<p>HTML 5</p>
				</li>
				<li className="tech-img">
					<img src={techCss} />
					<p>CSS3</p>
				</li>
				<li className="tech-img">
					<img src={techjs} />
					<p>JavaScript</p>
				</li>
				<li className="tech-img">
					<img src={techreact} />
					<div>
						<p>React</p>
					</div>
				</li>
				<li className="tech-img">
					<img src={techsass} />
					<p>SASS</p>
				</li>
				<li className="tech-img">
					<img src={techjquery} />
					<p>JQuery</p>
				</li>
				<li className="tech-img">
					<img src={techpython} />
					<p>Python</p>
				</li>
				<li className="tech-img">
					<img src={technodejs} />
					<p>NodeJS</p>
				</li>
				<li className="tech-img">
					<img src={techheroku} />
					<p>Heroku</p>
				</li>
				<li className="tech-img">
					<img src={techwordpress} />
					<p>WordPress</p>
				</li>
				<li className="tech-img">
					<img src={techgithub} style={{ filter: 'invert(1)' }} />
					<p>GitHub</p>
				</li>
				<li className="tech-img">
					<img src={techvscode} />
					<p>VS Code</p>
				</li>
			</ul>
		</div>
	);
};

export default TechList;
