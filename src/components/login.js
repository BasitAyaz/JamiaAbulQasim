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
    return <div>
        <h1>Login</h1>
    </div>
  }
}
export default Login;