import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import ScrollAnimation from "react-animate-on-scroll";
import * as firebase from 'firebase';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid sticky-top bg-light">
          <div className='container'>
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
                  <li
                    style={{ borderBottom: "1px solid #009999" }}
                    class="nav-item"
                  >
                    <a class="nav-link" href="/contactForm">
                      Contact <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/course">
                      Courses <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/donate">
                      About <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="feesubmission">
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
              <h1>Contact Us</h1>
              <p>
                do you have any confusion any sugession any mistake, feel free
                to contact us.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115782.27313977969!2d67.00450174806444!3d24.92539083841797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3c6be6963f%3A0xfc3be124dd280741!2sThe%20Horizon%20High!5e0!3m2!1sen!2s!4v1592215098967!5m2!1sen!2s"
              width="100%"
              height="300px"
              frameborder="0"
              style={{ border: "0px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        {/* contact form */}
        <div className="container p-5">
          <ScrollAnimation animateIn="fadeInRight">
            <div className="row">
              <div className="col-md-4 p-3">
                <input className="form-control" placeholder="Enter Your Name" />
              </div>
              <div className="col-md-4 p-3">
                <input className="form-control" placeholder="Enter Your Name" />
              </div>
              <div className="col-md-8 p-3">
                <input className="form-control" placeholder="Enter Your Name" />
              </div>
              <div className="col-md-8 p-3">
                <textarea
                  class="form-control mb-3"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <button className="btng">Send Message</button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        {/* contact details */}
        <div className="jumbotron"   style={{
            background:
              "linear-gradient(to bottom left, #66ccff 0%, #009999 100%)",
          }}>
          <div className="container p-5">
            <div className="row">
              <div className="col-md-4 text-white">
                <ScrollAnimation animateIn="fadeInDown">
                  <h2>Location</h2>
                  <p className="text-grey">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </ScrollAnimation>
              </div>
              <div className="col-md-4 text-white">
                <ScrollAnimation animateIn="fadeInDown">
                  <h2>Email</h2>
                  <p className="text-grey">example@gmail.com</p>
                </ScrollAnimation>
              </div>
              <div className="col-md-4 text-white">
                <ScrollAnimation animateIn="fadeInDown">
                  <h2>Call</h2>
                  <p className="text-grey">03072199560</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="jumbotron bg-light">
          <div className="container p-5">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="row">
                <div className="col-md-3 text-left">
                  <img width="80px" src={logo} />
                  <p>Horizone Academy near Bahadurabad Chowrangi</p>
                  <br />
                  <p className="b">
                    Phone:{" "}
                    <a style={{ color: "green" }} href="tel:123-456-7890">
                      123-456-7890
                    </a>
                  </p>
                  <p className="b">
                    Mobile:{" "}
                    <a style={{ color: "green" }} href="tel:03072199560">
                      03072199560
                    </a>
                  </p>
                </div>
                <div className="col-md-3  text-left">
                  <h4>Over Links</h4>
                  <ul>
                    <li>
                      <i
                        style={{ color: "green" }}
                        class="fas fa-chevron-right"
                      ></i>{" "}
                      Home
                    </li>
                    <li>
                      <i
                        style={{ color: "green" }}
                        class="fas fa-chevron-right"
                      ></i>{" "}
                      About
                    </li>
                    <li>
                      <i
                        style={{ color: "green" }}
                        class="fas fa-chevron-right"
                      ></i>{" "}
                      Courses
                    </li>
                    <li>
                      <i
                        style={{ color: "green" }}
                        class="fas fa-chevron-right"
                      ></i>{" "}
                      Contact
                    </li>
                    <li>
                      <i
                        style={{ color: "green" }}
                        class="fas fa-chevron-right"
                      ></i>{" "}
                      Teachers
                    </li>
                  </ul>
                </div>

                <div className="col-md-3  text-left">
                  <h4>Join over Newsletter</h4>
                  <p>enter your email address for subscribe</p>
                  <form action="" method="post">
                    <input
                      style={{
                        fontSize: "1em",
                        padding: "10px",
                        margin: "5px 0px",
                        border: "1px solid",
                        borderRadius: "5px",
                        color: "green",
                      }}
                      placeholder="example@gmail.com"
                      type="email"
                      name="email"
                    />
                    <button className="btng">Subscribe</button>
                  </form>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
