import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className="outer">
            <div className="inner">
            <form>

                <h3><b>LOGIN</b></h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    New User?<Link to={"/signup"}>Register</Link>
                </p>
            </form>
            </div>
            </div>
        );
       
    }
  
}
