import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../components/Firebase';
import './login.css'
// import * as ROUTES from '../constants/routes';
// import GoogleLogin from 'react-google-login';
const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listId: [],
      error: null
    };
  }
  facebookLogin = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        const currentUser = this.state.listId.find(x => x.id === socialAuthUser.user.uid);
        if (!!currentUser === true) {
          localStorage.setItem("lock", currentUser.lock)
          localStorage.setItem("roles", currentUser.roles)
          return;
        }
        else if ((!!currentUser === false)) {
          return this.props.firebase.user(socialAuthUser.user.uid).set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: "USER",
            lock: 0,
            photoURL: socialAuthUser.additionalUserInfo.photoURL,
            phoneNumber: '',
            identityCard: ''
          });
        }
      }).then(() => {
        this.setState({ error: null });
        var role = localStorage.getItem("roles");
        var lock = localStorage.getItem("lock");
        if (lock === '0' || lock === null) {
          if (role === 'USER') {
            window.history.pushState(null, '', "/homepage-user");
            window.location.reload()
          } else if (role === 'ADMIN') {
            window.history.pushState(null, '', "/homepage_admin");
            window.location.reload()
          } else if (role === 'STAFF_FOOD') {
            window.history.pushState(null, '', "/homepage-staff");
            window.location.reload()
          }else if(role === 'STAFF_INSPECTOR'){
            window.history.pushState(null, '', "/homepage-staff");
            window.location.reload()
          }
          else {
            window.history.pushState(null, '', "/homepage-user");
            window.location.reload()
          }
        } else if (lock === '1') {
          alert('tài khoản của bạn đã bị khóa')
        }
      }).then(() => {
        window.localStorage.removeItem("roles");
        window.localStorage.removeItem("lock");

      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };
  componentDidMount() {
    const userRef = this.props.firebase.db.ref('users');
    userRef.on('value', (snapshot) => {

      let newUserState = [];
      snapshot.forEach(data => {
        var lock = snapshot.child(`${data.key}/lock`).val();
        var roles = snapshot.child(`${data.key}/roles`).val();
        newUserState.push({
          id: data.key,
          lock: lock,
          roles: roles
        })
      })
      this.setState({
        listId: newUserState
      })
    })
  }
  googleLogin = event => {
    this.props.firebase.doSignInWithGoogle()
      .then(socialAuthUser => {
        const currentUser = this.state.listId.find(x => x.id === socialAuthUser.user.uid);
        if (!!currentUser === true) {
          localStorage.setItem("lock", currentUser.lock)
          localStorage.setItem("roles", currentUser.roles)
          return;
        }
        else if ((!!currentUser === false)) {
          return this.props.firebase.user(socialAuthUser.user.uid).set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: "USER",
            lock: 0,
            photoURL: socialAuthUser.user.photoURL,
            phoneNumber: '',
            identityCard: ''
          });
        }
      }).then(() => {
        this.setState({ error: null });
        var role = localStorage.getItem("roles");
        var lock = localStorage.getItem("lock");
        if (lock === '0' || lock === null) {
          if (role === 'USER') {
            window.history.pushState(null, '', "/homepage-user");
            window.location.reload()
          } else if (role === 'ADMIN') {
            window.history.pushState(null, '', "/homepage_admin");
            window.location.reload()
          } else if (role === 'STAFF_FOOD') {
            window.history.pushState(null, '', "/homepage-staff");
            window.location.reload()
          }else if(role === 'STAFF_INSPECTOR'){
            window.history.pushState(null, '', "/homepage-staff");
            window.location.reload()
          }
          else {
            window.history.pushState(null, '', "/homepage-user");
            window.location.reload()
          }
        } else if (lock === '1') {
          alert('tài khoản của bạn đã bị khóa')
        }
      }).then(() => {
        window.localStorage.removeItem("roles");
        window.localStorage.removeItem("lock");

      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;
    return (
  //     <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
  //     <div className="login-aside d-flex flex-column flex-row-auto" style={{ backgroundColor: '#c1a2ff' }}>
  //         {/*begin::Aside Top*/}
  //         <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
  //             {/*begin::Aside header*/}
  //             <a href="#" className="text-center mb-10">
  //                 <img src="assets/media/logos/train.png" className="max-h-70px" alt="" />
  //             </a>
  //             {/*end::Aside header*/}
  //             {/*begin::Aside title*/}
  //             <h3 className="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style={{ color: '#ffffff' }}>Discover Amazing Metronic
  //                 <br />with great build tools</h3>
  //             {/*end::Aside title*/}
  //         </div>
  //         {/*end::Aside Top*/}
  //         {/*begin::Aside Bottom*/}
  //         <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{ backgroundImage: 'url(assets/images/stock.png)' }} />
  //         {/*end::Aside Bottom*/}
  //     </div>
  //     <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
  //         {/*begin::Content body*/}
  //         <div className="d-flex flex-column-fluid flex-center">
  //             {/*begin::Signin*/}
  //             <div className="login-form login-signin">
  //                 {/*begin::Form*/}
  //                 <form className="form" noValidate="novalidate" id="kt_login_signin_form">
  //                     {/*begin::Title*/}
  //                     <div className="pb-13 pt-lg-0 pt-5">
  //                         <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Welcome to Huy</h3>
  //                         <span className="text-muted font-weight-bold font-size-h4">New Here?
  //                             <a href="javascript:;" id="kt_login_signup" className="text-info font-weight-bolder">Create an Account</a></span>
  //                     </div>
  //                     {/*begin::Title*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
  //                         <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" type="text" name="username" autoComplete="off" />
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <div className="d-flex justify-content-between mt-n5">
  //                             <label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
  //                             <a href="javascript:;" className="text-info font-size-h6 font-weight-bolder text-hover-info pt-5" id="kt_login_forgot">Forgot Password ?</a>
  //                         </div>
  //                         <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" type="password" name="password" autoComplete="off" />
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Action*/}
  //                     <div className="pb-lg-0 pb-5">
  //                         <button type="button" id="kt_login_signin_submit" className="btn btn-info font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">Sign In</button>
  //                         <button type="button" className="btn btn-light-info font-weight-bolder px-8 py-4 my-3 font-size-lg">
  //                             <span className="svg-icon svg-icon-md">
  //                                 {/*begin::Svg Icon | path:assets/media/svg/social-icons/google.svg*/}
  //                                 <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
  //                                     <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4" />
  //                                     <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853" />
  //                                     <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05" />
  //                                     <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335" />
  //                                 </svg>
  //                                 {/*end::Svg Icon*/}
  //                             </span>
  //                         </button>
  //                     </div>
  //                     {/*end::Action*/}
  //                 </form>
  //                 {/*end::Form*/}
  //             </div>
  //             {/*end::Signin*/}
  //             {/*begin::Signup*/}
  //             <div className="login-form login-signup">
  //                 {/*begin::Form*/}
  //                 <form className="form" noValidate="novalidate" id="kt_login_signup_form">
  //                     {/*begin::Title*/}
  //                     <div className="pb-13 pt-lg-0 pt-5">
  //                         <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Sign Up</h3>
  //                         <p className="text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
  //                     </div>
  //                     {/*end::Title*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="text" placeholder="Fullname" name="fullname" autoComplete="off" />
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autoComplete="off" />
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="password" placeholder="Password" name="password" autoComplete="off" />
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="password" placeholder="Confirm password" name="cpassword" autoComplete="off" />
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <label className="checkbox mb-0">
  //                             <input type="checkbox" name="agree" />
  //                             <span />
  //                             <div className="ml-2">I Agree the
  //                                 <a href="#"> terms and conditions</a>.</div>
  //                         </label>
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
  //                         <button type="button" id="kt_login_signup_submit" className="btn btn-info font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
  //                         <button type="button" id="kt_login_signup_cancel" className="btn btn-light-info font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
  //                     </div>
  //                     {/*end::Form group*/}
  //                 </form>
  //                 {/*end::Form*/}
  //             </div>
  //             {/*end::Signup*/}
  //             {/*begin::Forgot*/}
  //             <div className="login-form login-forgot">
  //                 {/*begin::Form*/}
  //                 <form className="form" noValidate="novalidate" id="kt_login_forgot_form">
  //                     {/*begin::Title*/}
  //                     <div className="pb-13 pt-lg-0 pt-5">
  //                         <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Forgotten Password ?</h3>
  //                         <p className="text-muted font-weight-bold font-size-h4">Enter your email to reset your password</p>
  //                     </div>
  //                     {/*end::Title*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group">
  //                         <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autoComplete="off" />
  //                     </div>
  //                     {/*end::Form group*/}
  //                     {/*begin::Form group*/}
  //                     <div className="form-group d-flex flex-wrap pb-lg-0">
  //                         <button type="button" id="kt_login_forgot_submit" className="btn btn-info font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
  //                         <button type="button" id="kt_login_forgot_cancel" className="btn btn-light-info font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
  //                     </div>
  //                     {/*end::Form group*/}
  //                 </form>
  //                 {/*end::Form*/}
  //             </div>
  //             {/*end::Forgot*/}
  //         </div>
  //         {/*end::Content body*/}
  //         {/*begin::Content footer*/}
  //         <div className="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">
  //             <div className="text-dark-50 font-size-lg font-weight-bolder mr-10">
  //                 <span className="mr-1">2021©</span>
  //                 <a href="http://keenthemes.com/metronic" target="_blank" className="text-dark-75 text-hover-info">Huy</a>
  //             </div>
  //             <a href="#" className="text-info font-weight-bolder font-size-lg">Terms</a>
  //             <a href="#" className="text-info ml-5 font-weight-bolder font-size-lg">Plans</a>
  //             <a href="#" className="text-info ml-5 font-weight-bolder font-size-lg">Contact Us</a>
  //         </div>
  //         {/*end::Content footer*/}
  //     </div>
  // </div>
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="login100-more" style={{ "backgroundImage": "url('assets/images/train-60539_1920.jpg')" }}></div>

            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
              <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
                <span className="login100-form-title p-b-59">
                  Sign In
                </span>
                <div className="login100-form-social flex-c-m" style={{ "width": "100%" }}>
                  <div>
                    {/* <div className="container"> */}
                    <button className="btn btn-lg btn-social btn-facebook" onClick={this.facebookLogin}>
                      <i className="fa fa-facebook fa-fw"></i> Sign in with Facebook
                    </button>
                    {/* </div> */}
                    {/* <button className="login100-form-social-item flex-c-m bg1 m-r-5" onClick={this.facebookLogin}>
                      <i className="fa fa-facebook-f" aria-hidden="true" style={{ "color": "white" }} >
                      </i>
                    </button> */}
                    {/* </div>
                  <div>
                    <div className="container"> */}

                    <button className="btn btn-lg btn-google btn-block btn-outline" onClick={this.googleLogin}>
                      <i className="fa fa-google fa-fw"></i> Sign in with Google
                    </button>
                    {/* </div> */}
                    {/* <button className="login100-form-social-item flex-c-m bg2 m-r-5" onClick={this.googleLogin}>
                      <i className="fa fa-google" aria-hidden="true" style={{ "color": "white" }} ></i>
                    </button> */}
                  </div>

                </div>
                {error && <p>{error.message}</p>}

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  withRouter,
  withFirebase,
)(Login)