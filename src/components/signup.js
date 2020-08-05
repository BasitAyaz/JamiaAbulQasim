import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import logoo from "../images/logowhiteOutline.png";
import ScrollAnimation from "react-animate-on-scroll";
import * as firebase from "firebase";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // form Control
      signupForm: false,
      // database from firebase
      signUpDataFromDatabase: "",
      databaseCourse: [],
      databaseCity: [],
      // details
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
      // error
      popUp: false,
      popUpMessage: "",
      popUpColor: "",
    };
  }
  async componentDidMount() {
    await firebase
      .database()
      .ref("/")
      .child("registrationForm/")
      .on("value", (data) => {
        console.log(data.val());
        let dt = data.val();
        this.setState({
          signupForm: dt.form,
          databaseCourse: dt.dbcourse,
          databaseCity: dt.dbcity,
        });
      });
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
    if (password1 === password2 && cnic.length === 13 && contact.length === 11) {
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
      };
      console.log(obj);
      firebase
        .auth()
        .createUserWithEmailAndPassword(obj.email, obj.password1)
        .then((success) => {
          console.log(success.user.uid);
          let uid = success.user.uid;
          firebase
            .database()
            .ref("/")
            .child(`student/${obj.city}/${obj.course}/${uid}`)
            .set(obj)
            .then((data) => {
              this.setState({
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
                popUp: true,
                popUpMessage: "Your form has been submitted",
                popUpColor: "green",
              });
            })
            .catch((error) => {
              this.setState({
                popUp: true,
                popUpMessage: error.message,
                popUpColor: "red",
              });
            });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            popUp: true,
            popUpMessage: error.message,
            popUpColor: "red",
          });
        });
    }else{
      this.setState({
        popUp: true,
        popUpMessage: 'Please correct Your CNIC and Contact Details',
        popUpColor: "red",
      });
    }
  }
  render() {
    const {
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
      signUpDataFromDatabase,
      databaseCourse,
      databaseCity,
    } = this.state;
    console.log(databaseCourse, databaseCity);
    return (
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container-fluid sticky-top bg-light">
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
                  <li
                    style={{ borderBottom: "1px solid #009999" }}
                    class="nav-item"
                  >
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

        {/* form */}
        {this.state.signupForm ? (
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
                        value={firstname}
                        required
                        id="FirstName"
                        className="form-control"
                        placeholder="Enter Your First Name"
                        onChange={(e) =>
                          this.setState({ firstname: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="LastName">Last Name</label>
                      <input
                        value={lastname}
                        required
                        id="LastName"
                        className="form-control"
                        placeholder="Enter Your Last Name"
                        onChange={(e) =>
                          this.setState({ lastname: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-8 mb-3">
                      <label for="FatherName">Father Name</label>
                      <input
                        value={FatherName}
                        required
                        id="FatherName"
                        className="form-control"
                        placeholder="Enter Your Father Name"
                        onChange={(e) =>
                          this.setState({ FatherName: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="contact">Enter Contact number without (-) and space</label>
                      <input
                        value={contact}
                        required
                        id="contact"
                        maxLength='11'
                        className="form-control"
                        placeholder="03000000000"
                        onChange={(e) =>
                          this.setState({ contact: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="cnic">Enter CNIC number without (-)</label>
                      <input
                        value={cnic}
                        required
                        id="cnic"
                        className="form-control"
                        maxLength='13'
                        placeholder="4210000000000"
                        onChange={(e) =>
                          this.setState({ cnic: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select
                        required
                        className="form-control"
                        onChange={(e) =>
                          this.setState({ country: e.target.value })
                        }
                      >
                        <option>Select Country</option>
                        <option>Pakistan</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <select
                        required
                        className="form-control"
                        onChange={(e) =>
                          this.setState({ city: e.target.value })
                        }
                      >
                        <option>Select City</option>
                        {databaseCity.map((item, i) => {
                          return <option id={i}>{item}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-10 mb-3">
                      <label for="email">Email</label>
                      <input
                        value={email}
                        required
                        id="email"
                        placeholder="example@gmail.com"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-5 mb-3">
                      <label for="password1">Password</label>
                      <input
                        value={password1}
                        required
                        type="password"
                        className="form-control"
                        id="password1"
                        placeholder="Password"
                        onChange={(e) =>
                          this.setState({ password1: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-5 mb-3">
                      <label for="password2">Confirm Password</label>
                      <input
                        value={password2}
                        required
                        type="password"
                        className="form-control"
                        id="password2"
                        placeholder="Password"
                        onChange={(e) =>
                          this.setState({ password2: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-12 mb-3"></div>
                  </div>
                  <hr className="mb-4" />
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select
                        required
                        className="form-control"
                        onChange={(e) =>
                          this.setState({ course: e.target.value })
                        }
                      >
                        <option>Select Course</option>
                        {databaseCourse.map((item, i) => {
                          return <option id={i}>{item}</option>;
                        })}
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
                  <p style={{ color: `${this.state.popUpColor}` }}>
                    {this.state.popUpMessage}
                  </p>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ marginTop: "-150px" }}
            className="container bg-white p-5 mb-5 shadow rounded"
          >
            <p style={{ fontSize: "3em", color: "lightgrey" }}>
              Form has been closed
            </p>
            <p style={{ fontSize: "2em", color: "lightgrey" }}>
              For More Course Follow the link
            </p>
            <p style={{ fontSize: "1.5em" }}>
              <a href="">
                <i class="fab fa-facebook-square"></i> /Jamia Abul Qasim
              </a>
            </p>
          </div>
        )}
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
        {/* donate form */}
        {/* <div className="donateForm">
          <div
            className="jumbotron"
            style={{
              background:
                "linear-gradient(to bottom left, #66ccff 0%, #009999 100%)",
            }}
          >
            <div className="container p-5 text-left text-white">
              <h1>
                Donate Us <i class="fas fa-donate"></i>
              </h1>
            </div>
          </div>
            <button className="closebtn">
              <i class="fas fa-times"></i>
            </button>
          <div style={{overflow:'scroll'}} className="container p-5">
            <form>
              <div className="row p-5">
                <div className="col-md-6">
                  <input placeholder="5214" />
                </div>
                <div className="col-md-6">
                  <input placeholder="5214" />
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Signup;
