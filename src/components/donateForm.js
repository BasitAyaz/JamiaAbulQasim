import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import caros from "../images/cover4.jpg";
import side from "../images/side-cover.jpg";
import book from "../images/book.jpg";
import book1 from "../images/book1.jpg";
import book3 from "../images/book3.jpg";
import teacher from "../images/teacher.jpg";
import teacher1 from "../images/teacher1.jpg";
import teacher2 from "../images/teacher2.jpg";
import logo from "../images/logo.png";
import ScrollAnimation from "react-animate-on-scroll";

class Donateform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToPage(e) {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div className="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="/">
              <img src={logo} width="80px" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="signup">
                    Registration <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contactForm">
                    Contact <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/course">
                    Courses <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li
                  style={{ borderBottom: "1px solid #009999" }}
                  class="nav-item"
                >
                  <a class="nav-link" href="/donate">
                    About <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/feesubmission">
                    Fee Submission
                  </a>
                </li>
              </ul>
              <div>
                <button className="donatebtn">
                  <i class="fas fa-donate"></i> Donate Us
                </button>
              </div>
            </div>
          </nav>{" "}
        </div>
        <div
          className="jumbotron"
          style={{
            background:
              "linear-gradient(to bottom left, #66ccff 0%, #009999 100%)",
          }}
        >
          <div className="container p-5 text-left text-white">
            <ScrollAnimation animateIn="fadeInLeft">
              <h1>Donate</h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className="container p-5">
          <form>
            <div className="row p-5">
              <div className="col-md-6 text-left pt-3 pb-3">
                <label for="First-Name">First Name</label>
                <input placeholder='First Name' className="form-control" id="First-Name" />
              </div>
              <div className="col-md-6 text-left  pt-3 pb-3">
                <label for="Last-Name">Last Name</label>
                <input placeholder='Last Name' className="form-control" id="Last-Name" />
              </div>
              <div className="col-md-8 text-left  pt-3 pb-3">
                <label for="email">email</label>
                <input placeholder='example@gmail.com' className="form-control" id="email" />
              </div>
              <div className="col-md-6 text-left  pt-3 pb-3">
                <label for="Contact">Contact</label>
                <input placeholder='03*********' className="form-control" id="Contact" />
              </div>
              <div className="col-md-6 text-left  pt-3 pb-3">
                <label for="cnic">CNIC</label>
                <input placeholder='42101********' className="form-control" id="cnic" />
              </div>
              <div className="col-md-12 text-left  pt-3 pb-3">
                <label for="message">Message</label>
                <textarea placeholder='Type Your message here' className="form-control" id="message"></textarea>
              </div>
              <div className='p-3'>
              <button className='btns'>Donate</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Donateform;
