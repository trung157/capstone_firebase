import React, { Component } from 'react'
import './login-4.css'
class LoginAdmin extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-root" >
                <div className="login login-4 login-signin-on d-flex flex-row-fluid" id="kt_login">
                    <div className="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat" style={{ "backgroundImage": "url('./assets/media/bg/bg-3.jpg')" }}>
                        <div className="login-form text-center p-7 position-relative overflow-hidden">
                            <div className="d-flex flex-center mb-15">
                                <a href="!#">
                                    <img src="./assets/media/logos/logo-letter-13.png" className="max-h-75px" alt="logo" />
                                </a>
                            </div>
                            <div className="login-signin">
                                <div className="mb-20">
                                    <h3>Sign In To Admin</h3>
                                    <div className="text-muted font-weight-bold">Enter your details to login to your account:</div>
                                </div>
                                <form className="form" id="kt_login_signin_form">
                                    <div className="form-group mb-5">
                                        <input className="form-control h-auto form-control-solid py-4 px-8" type="text" placeholder="Email" name="username" autoComplete="off" />
                                    </div>
                                    <div className="form-group mb-5">
                                        <input className="form-control h-auto form-control-solid py-4 px-8" type="password" placeholder="Password" name="password" />
                                    </div>
                                    <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="checkbox-inline">
                                            <label className="checkbox m-0 text-muted">
                                                <input type="checkbox" name="remember" />
                                                <span></span>Remember me</label>
                                        </div>
                                    </div>
                                    <button id="kt_login_signin_submit" className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4">Sign In</button>
                                </form>
                                <div className="mt-40">
                                    <span className="opacity-70 mr-4"></span>
                                    <a href="!#" id="kt_login_signup" className="text-muted text-hover-primary font-weight-bold">.</a>
                                </div>
                                <div className="mt-13">
                                    <span className="opacity-70 mr-4"></span>
                                    <a href="!#" id="kt_login_signup" className="text-muted text-hover-primary font-weight-bold">.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginAdmin