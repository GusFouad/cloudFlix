import React from 'react';
import './home.css';
import Footer from './footer';
import TechList from './techSkillList';

import HomeNav from './HomeNav';
import Portfolio from './Portfolio';
import PortHeader from './PortHeader';
const Home = () => {
	return (
		<div>
			<HomeNav />

			<PortHeader className="header-section" />

			<Portfolio className="portfolio-section" />

			<TechList className="sections" />
			<Footer className="sections" />
		</div>
	);
};

export default Home;
