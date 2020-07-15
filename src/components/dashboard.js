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

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="#">
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
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Fee Submission
                  </a>
                </li>
              </ul>
            </div>
          </nav>{" "}
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${caros})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            textAlign: "left",
            height: "70vh",
          }}
        >
          <div
            className="container-fluid"
            style={{ backgroundColor: "rgba(0,0,0,.5)", height: "100%" }}
          >
            <div className="container">
              <div className="row" style={{ padding: "12% 0px" }}>
                <div className="d-flex flex-column align-items-start">
                  <h1 className="fontLarge">
                    Start Learning Dars-E-Nizami Online
                  </h1>
                  <h3 style={{ color: "white" }}>
                    We are the team of best Islamic Scholars
                  </h3>
                  <button className="btnC">Registration</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left  mb-4">
                <h1>About Us</h1>
              </div>
              <div className="col-md-6 text-left p-2">
                <p>
                  We are an institute where we teach best quality of education
                  of Islamic courses for male and female.
                </p>
                <p>we are teaching over courses online also</p>
                <button className="btng">Registration</button>
              </div>
              <div className="col-md-6 text-left p-2">
                <img src={side} width="100%" />
              </div>
            </div>
          </div>
        </div>
        {/* Popular Courses */}
        <div className="jumbotron bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left  mb-4">
                <h1>Popular Courses</h1>
              </div>
              <div className="col-md-4 text-left p-3">
                <div className="courseCard">
                  <div className="card p-5 shadow rounded text-white text-center">
                    <p className="medium">Darse nizami Course</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-left p-3">
                <div className="courseCard">
                  <div className="card p-5 shadow rounded text-white text-center">
                    <p className="medium">Huqooq-e-Zojain course</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-left p-3">
                <div className="courseCard">
                  <div onClick={()=>this.props.history.push('/course')} className="card p-5 shadow rounded text-white text-center">
                    <p className="medium">Farz Uloom Course</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-left p-3">
                <div className="courseCard">
                  <div className="card p-5 shadow rounded text-white text-center">
                    <p className="medium">Darse nizami Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-left mb-4">
                <h1>Over Best Teachers</h1>
              </div>
              <div className="col-md-4 p-2">
                <div className="card border border-grey">
                  <img src={teacher} width="100%" className="img-fluid" />
                  <div className="p-4">
                    <h3 className="m-3">Madani Raza</h3>
                    <p className="text-muted font-italic">
                      certified Dars-e- Nizami and Muftee course from _______
                      institute
                    </p>
                    <hr />
                    <div class="social">
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-whatsapp"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-2">
                <div className="card border border-grey">
                  <img src={teacher1} width="100%" className="img-fluid" />
                  <div className="p-4">
                    <h3 className="m-3">Shaban Raza</h3>
                    <p className="text-muted font-italic">
                      certified Dars-e- Nizami and Muftee course from _______
                      institute
                    </p>
                    <hr />
                    <div class="social">
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-whatsapp"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-2">
                <div className="card border border-grey">
                  <img src={teacher2} width="100%" className="img-fluid" />
                  <div className="p-4">
                    <h3 className="m-3">Nadeem Attari</h3>
                    <p className="text-muted font-italic">
                      certified Dars-e- Nizami and Muftee course from _______
                      institute
                    </p>
                    <hr />
                    <div class="social">
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-whatsapp"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        href=""
                        style={{ color: "grey", fontSize: "1.2em" }}
                        className="m-2"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="jumbotron bg-light">
          <div className="container">
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
                <h4>Location</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115782.27313977969!2d67.00450174806444!3d24.92539083841797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3c6be6963f%3A0xfc3be124dd280741!2sThe%20Horizon%20High!5e0!3m2!1sen!2s!4v1592215098967!5m2!1sen!2s"
                  width="100%"
                  height="200px"
                  frameborder="0"
                  style={{ border: "0px", boxShadow: "5px 5px 8px grey" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
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

export default Dashboard;
