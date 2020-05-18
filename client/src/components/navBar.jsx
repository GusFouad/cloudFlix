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
							<Link to="#" className="brand-logo black-text cloudflix-nav">
								CloudFlix
							</Link>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li>
									<NavLink to="/search">Search</NavLink>
								</li>
								<li>
									<NavLink to="mylist">My List</NavLink>
								</li>
								{!user && (
									<React.Fragment>
										<li>
											<NavLink to="/login">Login</NavLink>
										</li>
										<li>
											<NavLink to="/register">Register</NavLink>
										</li>
									</React.Fragment>
								)}
								{user && (
									<React.Fragment>
										<li>
											<NavLink to="/mylist">{user.name}</NavLink>
										</li>
										<li>
											<NavLink to="/logout">Log Out</NavLink>
										</li>
									</React.Fragment>
								)}
							</ul>
						</div>
					</div>
				</nav>
				<div className="section navbar-sidenav">
					<ul id="slide-out" className="sidenav col s12 center-align section divider">
						<li>
							<NavLink to="/search">Search</NavLink>
						</li>
						<li>
							<NavLink to="mylist">My List</NavLink>
						</li>
						{!user && (
							<React.Fragment>
								<li>
									<NavLink to="/login">Login</NavLink>
								</li>
								<li>
									<NavLink to="/register">Register</NavLink>
								</li>
							</React.Fragment>
						)}
						{user && (
							<React.Fragment>
								<li>
									<NavLink to="/mylist">{user.name}</NavLink>
								</li>
								<li>
									<NavLink to="/logout">Log Out</NavLink>
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
