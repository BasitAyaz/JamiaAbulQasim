import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header class="masthead mb-auto">
          <div class="inner p-4">
            <h3 class="masthead-brand">Jamia Abul Qasim</h3>
            <nav class="nav nav-masthead justify-content-center">
              <a class="nav-link active" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About Us
              </a>
              <a class="nav-link" href="#">
                Contact
              </a>
              <a class="nav-link" href="#">
                Courses
              </a>
            </nav>
          </div>
        </header>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left">
                <h1>Contact Us</h1>
                <p>sdtfa sgfjgsdhjfg sdjgf jhds gfjdsg fjds g</p>
              </div>
            </div>
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
        <div className="jumbotron bg-white">
          <div className="container">
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
          </div>
        </div>
        <div className="jumbotron" style={{ backgroundColor: "green" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-white">
                <h2>Location</h2>
                <p className="text-grey">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
              <div className="col-md-4 text-white">
                <h2>Email</h2>
                <p className="text-grey">example@gmail.com</p>
              </div>
              <div className="col-md-4 text-white">
                <h2>Call</h2>
                <p className="text-grey">03072199560</p>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-left">
                <h3>Jamia Abul Qasim</h3>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;