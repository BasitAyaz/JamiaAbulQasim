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

class Donate extends React.Component {
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
                <li
                  style={{ borderBottom: "1px solid #009999" }}
                  class="nav-item"
                >
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
        <div className="jumbotron" style={{ background:'linear-gradient(to bottom left, #66ccff 0%, #009999 100%)'}}>
          <div className="container p-5 text-center">
            <h1>About Us</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-5">
              <h1> 
                <img src={logo} width="150px" />
                Jamia Abul Qasim
              </h1>
            </div>
            <div className='text-left p-5'>
              <h3  style={{color:'#009999'}}>Who Are We and What Do We Do?</h3>
              <p style={{color:'grey'}}>
                Jamia and Madrasa Abul Qasim is working under the supervision of
                Mufti Muhammad Madani Raza, an islamic scholar from Pakistan.
                This Jamia and Madrasa is currently an Online Institute where
                our Scholars' team teaches different courses (mentioned on our
                website) all over the world at your feasible time. Basically the
                aim of our institute is to provide authentic Islamic Knowledge
                with a best standard and provide vast scope to students so that
                they can work with relaxation.
              </p>
              <h3  style={{color:'#009999'}}>Why we started this Jamia and Madrasa?</h3>
              <p style={{color:'grey'}}>
                Many people specially in abroad want to learn Islam, but they
                couldn't manage their time according to the Institutes or they
                didn't statisfied with their standards, so we have tried our
                best to solve all this issues and we are still working to
                maintain our standards, so one can easily understand what they
                are learning.
              </p>
              <h3  style={{color:'#009999'}}>How we are maintaining our Standards?</h3>
              <ol>
                <li style={{color:'grey'}}>
                  For maintaining the standards Mufti Muhammad Madani Raza
                  trains other teachers regarding the methods of teaching.
                </li>
                <li style={{color:'grey'}}>
                  We are in searching of a site where we make proper Online
                  classrooms so the students can learn easily and feel the
                  environment of classroom.
                </li>
                <li style={{color:'grey'}}>
                  Once a week Mufti Muhammad Madani Raza attends Online Classes
                  and does Q&A Sessions with students regarding their subjects
                  and clear their concepts (if needed).
                </li>
                <li style={{color:'grey'}}>
                  Mufti Muhammad Madani Raza himself conducts one of the class
                  of Dars e Nizami.
                </li>
              </ol>
              <h3  style={{color:'#009999'}}>What are our Aims?</h3>
              <ol>
                <li style={{color:'grey'}}>To start a Jamia and Madrasa at proper site as well.</li>
                <li style={{color:'grey'}}>
                  To start proper Darulifta so our students can serve Islam by
                  joining it and get paid well for their services.
                </li>
              </ol>
              <h3  style={{color:'#009999'}}>How visitors support us?</h3>
              <p style={{color:'grey'}}>
                We have a great vision for Islamic Students and to serve Islam
                and to accomplish this, obviously we need financial support. If
                you're joining our courses so you can help us by paying the
                fees, but if you are not joining then donate us as much as you
                can. No matter if it is a single Penny with the intention of
                seeking Allah's mercy. Your donation will be the saving for your
                Akhirah.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Donate;