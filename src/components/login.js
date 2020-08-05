import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import ScrollAnimation from "react-animate-on-scroll";
import * as firebase from "firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToPage(e) {
    console.log(this.props);
  }
  render() {
    return (
      <div style={{ height: "100vh" }} className="bg-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form class="form-signin p-4 rounded shadow bg-white">
                <img class="mb-4" src={logo} alt="" width="72" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control mt-2 mb-2"
                  placeholder="Email address"
                  required=""
                  autofocus=""
                />
                <label for="inputPassword" class="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control mt-2 mb-2"
                  placeholder="Password"
                  required=""
                />
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Sign in
                </button>
                <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
              </form>
            </div>
            <div className='col-md-8'>
              <img width='200px' src={logo} />
              <div>
                <h1>Knowledge is light</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
