import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      FatherName: "",
      contact: "",
      cnic: "",
      country: "",
      city: "",
      email: "",
      password1: "",
      password2: "",
      course: "",
      gender: "",
    };
  }
  signUp(e) {
    e.preventDefault();
    let {
      firstname,
      lastname,
      FatherName,
      contact,
      cnic,
      country,
      city,
      email,
      password1,
      password2,
      course,
      gender,
    } = this.state;
    if (password1 === password2) {
      let obj = {
        firstname,
        lastname,
        FatherName,
        contact,
        cnic,
        country,
        city,
        email,
        password1,
        password2,
        course,
        gender,
      }
      console.log(obj)
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f5f5f5" }}>
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
        <div className="container-fluid pb-5">
          <div
            style={{
              background:
                "linear-gradient(to bottom left, #66ccff 0%, #009999 100%)",
            }}
            className="row d-flex justify-content-center mb-5 pt-2 pb-5"
          >
            <img style={{ margin: "20px" }} width="100px" src={logo} />
          </div>
        </div>
        <div style={{ marginTop: "-150px" }} className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 m-2">
              <form
                onSubmit={(e) => this.signUp(e)}
                style={{
                  boxShadow: "0px 8px 8px grey",
                  borderRadius: "8px",
                  padding: "30px",
                  backgroundColor: "white",
                  textAlign: "left",
                }}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="FirstName">First Name</label>
                    <input
                      id="FirstName"
                      className="form-control"
                      placeholder="Enter Your First Name"
                      onChange={(e)=>this.setState({firstname:e.target.value})}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="LastName">Last Name</label>
                    <input
                      id="LastName"
                      className="form-control"
                      placeholder="Enter Your Last Name"
                      onChange={(e)=>this.setState({lastname:e.target.value})}
                    />
                  </div>
                  <div className="col-md-8 mb-3">
                    <label for="FatherName">Father Name</label>
                    <input
                      id="FatherName"
                      className="form-control"
                      placeholder="Enter Your Father Name"
                      onChange={(e)=>this.setState({FatherName:e.target.value})}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="contact">contact</label>
                    <input
                      id="contact"
                      className="form-control"
                      placeholder="03XXXXXXXXX"
                      onChange={(e)=>this.setState({contact:e.target.value})}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="cnic">CNIC</label>
                    <input
                      id="cnic"
                      className="form-control"
                      placeholder="XXXXX-XXXXXXX-X"
                      onChange={(e)=>this.setState({cnic:e.target.value})}
                    />
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <select className="form-control" 
                     onChange={(e)=>this.setState({country:e.target.value})}
                    >
                      <option>Select Country</option>
                      <option>Pakistan</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <select className="form-control"
                     onChange={(e)=>this.setState({city:e.target.value})}
                    >
                      <option>Select City</option>
                      <option>Karachi</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Pishawar</option>
                    </select>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10 mb-3">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      placeholder="example@gmail.com"
                      className="form-control"
                      onChange={(e)=>this.setState({email:e.target.value})}
                    />
                  </div>
                  <div className="col-md-5 mb-3">
                    <label for="password1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password1"
                      placeholder="Password"
                      onChange={(e)=>this.setState({password1:e.target.value})}
                    />
                  </div>
                  <div className="col-md-5 mb-3">
                    <label for="password2">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password2"
                      placeholder="Password"
                      onChange={(e)=>this.setState({password2:e.target.value})}
                    />
                  </div>
                  <div className="col-md-12 mb-3"></div>
                </div>
                <hr className="mb-4" />
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <select className="form-control"
                     onChange={(e)=>this.setState({course:e.target.value})}
                    >
                      <option>Select Course</option>
                      <option>Darse Nizami</option>
                      <option>Huqooq-e-Zojain Course</option>
                      <option>Farz Uloom Course</option>
                    </select>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="row">
                  <div className="col-md-6">
                    <input type="radio" id="male" name="gender" /> :
                    <label for="male">Male</label> <br />
                    <input type="radio" id="female" name="gender" /> :
                    <label for="female">Female</label>
                  </div>
                </div>
                <hr className="mb-4" />
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
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
export default Signup;
