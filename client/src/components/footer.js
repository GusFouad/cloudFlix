import React, { Component } from 'react';
import axios from 'axios';

class Footer extends Component {
	state = {
		name: '',
		email: '',
		message: ''
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = this.state;
		const data = {
			name,
			email,
			message
		};
		axios.post(process.env.REACT_APP_API_FORM, data).then((res) => {
			this.resetForm();
		});
		console.log('submitted', name, email, message);
	};
	resetForm = () => {
		this.setState({
			name: '',
			email: '',
			message: ''
		});
	};
	render() {
		return (
			<div>
				<h2 id="contact" className="tech-skills">
					Contact Me
				</h2>
				<span class="sexy-line" />
				<div className="footer row">
					<form onSubmit={this.handleSubmit} className="footer-form">
						<div className="row form-name">
							<div className="input-field col s12">
								<label htmlFor="name">Name</label>
								<input
									name="name"
									id="name"
									type="text"
									className="validate"
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="row form-email">
							<div className="input-field col s12">
								<input
									name="email"
									type="email"
									className="validate"
									onChange={this.handleChange}
									value={this.state.email}
								/>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row form-message">
							<div className="row">
								<div className="input-field col s12">
									<label htmlFor="message">Message</label>
									<textarea
										id="message"
										className="materialize-textarea"
										name="message"
										onChange={this.handleChange}
										value={this.state.message}
									/>
								</div>
							</div>
						</div>
						<button className="waves-effect waves-light btn black orange-text" type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Footer;
