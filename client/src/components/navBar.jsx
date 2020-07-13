import React, { Component } from 'react';
import { getUser } from '../services/authService';
import { Link, NavLink } from 'react-router-dom';
class NavBar extends Component {
	state = {};
	componentDidMount() {
		const user = getUser();
		this.setState({ user });
		const M = window.M;
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, { edge: 'right' });
		});
	}
	render() {
		const { user } = this.state;
		return (
			<div>
				<nav className="orange darken-2">
					<div className="container">
						<div className="nav-wrapper">
							<a href="#" data-target="slide-out" className="sidenav-trigger right valign-wrapper ">
								<i className="material-icons">menu</i>
							</a>
							<Link to="/cloudflix/home" className="brand-logo black-text cloudflix-nav">
								CloudFlix
							</Link>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li>
									<NavLink to="/cloudflix/search">Search</NavLink>
								</li>
								<li>
									<NavLink to="/cloudflix/mylist">My List</NavLink>
								</li>
								{!user && (
									<React.Fragment>
										<li>
											<NavLink to="/cloudflix/login">Login</NavLink>
										</li>
										<li>
											<NavLink to="/cloudflix/register">Register</NavLink>
										</li>
									</React.Fragment>
								)}
								{user && (
									<React.Fragment>
										<li>
											<NavLink to="/cloudflix/mylist">{user.name}</NavLink>
										</li>
										<li>
											<NavLink to="/cloudflix/logout">Log Out</NavLink>
										</li>
									</React.Fragment>
								)}
							</ul>
						</div>
					</div>
				</nav>
				<div className="section navbar-sidenav">
					<ul id="slide-out" className="sidenav sidenav-close col s12 center-align section divider">
						<li>
							<NavLink to="/cloudflix/search">Search</NavLink>
						</li>
						<li>
							<NavLink to="/cloudflix/mylist">My List</NavLink>
						</li>
						{!user && (
							<React.Fragment>
								<li>
									<NavLink to="/cloudflix/login">Login</NavLink>
								</li>
								<li>
									<NavLink to="/cloudflix/register">Register</NavLink>
								</li>
							</React.Fragment>
						)}
						{user && (
							<React.Fragment>
								<li>
									<NavLink to="/cloudflix/mylist">{user.name}</NavLink>
								</li>
								<li>
									<NavLink to="/cloudflix/logout">Log Out</NavLink>
								</li>
							</React.Fragment>
						)}
					</ul>
				</div>
			</div>
		);
	}
}

export default NavBar;
