import React from 'react';
import techCss from './tech-skill-logos/tech-skill-css.png';
import techwordpress from './tech-skill-logos/tech-skill-wordpress.png';
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
					<img src={techhtml} alt="HTML logo" />
					<p>HTML 5</p>
				</li>
				<li className="tech-img">
					<img src={techCss} alt="CSS logo" />
					<p>CSS3</p>
				</li>
				<li className="tech-img">
					<img src={techjs} alt="JavaScript logo" />
					<p>JavaScript</p>
				</li>
				<li className="tech-img">
					<img src={techreact} alt="React logo" />
					<div>
						<p>React</p>
					</div>
				</li>
				<li className="tech-img">
					<img src={techsass} alt="Sass logo" />
					<p>SASS</p>
				</li>
				<li className="tech-img">
					<img src={techjquery} alt="JQuery logo" />
					<p>JQuery</p>
				</li>
				<li className="tech-img">
					<img src={techpython} alt="Python logo" />
					<p>Python</p>
				</li>
				<li className="tech-img">
					<img src={technodejs} alt="Node.js logo" />
					<p>NodeJS</p>
				</li>
				<li className="tech-img">
					<img src={techheroku} alt="Heroku logo" />
					<p>Heroku</p>
				</li>
				<li className="tech-img">
					<img src={techwordpress} alt="WordPress logo" />
					<p>WordPress</p>
				</li>
				<li className="tech-img">
					<img src={techgithub} alt="Github logo" style={{ filter: 'invert(1)' }} />
					<p>GitHub</p>
				</li>
				<li className="tech-img">
					<img src={techvscode} alt="Visual Studio Code logo" />
					<p>VS Code</p>
				</li>
			</ul>
		</div>
	);
};

export default TechList;
