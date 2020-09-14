import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authAction';
import { Link } from 'react-router-dom';
class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			name: '',
			submitted: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ submitted: true });
		this.props.register({
			email: this.state.username,
			password: this.state.password,
			name: this.state.name,
		});
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		const { registering } = this.props.auth;
		const { username, password, name, submitted } = this.state;
		return (
			<div className='col-md-6 col-md-offset-3'>
				<h2>Register</h2>
				<form name='form' onSubmit={this.handleSubmit}>
					<div
						className={
							'form-group' + (submitted && !name ? ' has-error' : '')
						}
					>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							className='form-control'
							name='name'
							value={name}
							onChange={this.handleChange}
						/>
						{submitted && !name && (
							<div className='help-block'>Name is required</div>
						)}
					</div>

					<div
						className={
							'form-group' + (submitted && !username ? ' has-error' : '')
						}
					>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							className='form-control'
							name='username'
							value={username}
							onChange={this.handleChange}
						/>
						{submitted && !username && (
							<div className='help-block'>Username is required</div>
						)}
					</div>
					<div
						className={
							'form-group' + (submitted && !password ? ' has-error' : '')
						}
					>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							className='form-control'
							name='password'
							value={password}
							onChange={this.handleChange}
						/>
						{submitted && !password && (
							<div className='help-block'>Password is required</div>
						)}
					</div>
					<div className='form-group'>
						<button className='btn btn-primary'>Register</button>
						{registering && (
							<img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
						)}
						<Link to='/login' className='btn btn-link'>
							Cancel
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.authReducer,
});

export default connect(mapStateToProps, {
	register,
})(Signup);
