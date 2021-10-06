import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
	render() {
		return (
			<div className="outer1">
				<div className="inner">
					<form>
						<h3>
							<b>REGISTER</b>
						</h3>

						<div className="form-group">
							<label>First name</label>
							<input
								type="text"
								className="form-control"
								placeholder="First name"
								required
							/>
						</div>

						<div className="form-group">
							<label>Last name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Last name"
								required
							/>
						</div>

						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								required
							/>
						</div>

						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter password"
								required
							/>
						</div>

						<button
							type="submit"
							className="btn btn-dark btn-lg btn-block"
						>
							Register
						</button>
						<p className="forgot-password text-right">
							Already registered <Link to={'/login'}>Login?</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}
