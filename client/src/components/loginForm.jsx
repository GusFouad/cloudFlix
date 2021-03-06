import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from '../common/input';
import { login } from '../services/authService';

class LoginForm extends Component {
	state = {
		account: { username: '', password: '' },
		errors: {}
	};
	schema = {
		username: Joi.string().required().label('Email'),
		password: Joi.string().required().label('Password')
	};
	validate = () => {
		const { error } = Joi.validate(this.state.account, this.schema, {
			abortEarly: false
		});
		if (!error) return null;
		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const errors = this.validate();
		console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;
		console.log('submitted');
		//
		try {
			const { account } = this.state;
			const { data: jwt } = await login(account.username, account.password);
			localStorage.setItem('token', jwt);
			window.location = '/cloudflix/mylist';
		} catch (ex) {
			if (ex.response && ex.response === 400) {
				const errors = { ...this.state.errors };
				errors.email = ex.response.account;
				this.setState({ errors });
				console.log(ex);
			}
		}
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account, errors });
	};
	render() {
		const { account, errors } = this.state;
		return (
			<div className="container">
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<Input
						name="username"
						value={account.username}
						label="Email"
						onChange={this.handleChange}
						error={errors.username}
						type="text"
					/>

					<Input
						name="password"
						value={account.password}
						label="Password"
						onChange={this.handleChange}
						error={errors.password}
						type="password"
					/>
					<div className="home">
						<button disabled={this.validate()} className="btn btn-primary">
							Login
						</button>
					</div>
				</form>
				<div className="home">
					<p>Dont have an account?</p>
					<a href="/cloudflix/register">Click here to Register!</a>
				</div>
			</div>
		);
	}
}

export default LoginForm;
