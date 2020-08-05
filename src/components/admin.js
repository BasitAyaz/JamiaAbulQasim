import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import logow from "../images/Logo-white.png";
import book3 from "../images/book3.jpg";
import * as firebase from "firebase";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpForm: false,
      dbcourse: [],
      dbcity: [],
      startingRoll: "",
      // data from database
      dataFromFirebase: "",
      // Student Data from Firebase
      studentdataFromFirebase:'',
      city: "",
      course: "",
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .child("registrationForm/")
      .on("value", (data) => {
        console.log(data.val());
        this.setState({ dataFromFirebase: data.val() });
      });
      firebase
      .database()
      .ref("/")
      .child("student/")
      .on("value", (data) => {
        console.log(data.val());
        this.setState({ studentdataFromFirebase: data.val() });
      });
  }
  toggle() {
    const { signUpForm, dbcourse, dbcity, startingRoll } = this.state;
    if (this.state.signUpForm == false) {
      let obj = {
        dbcourse,
        dbcity,
        startingRoll,
        form: true,
      };
      firebase.database().ref("/").child("registrationForm/").set(obj);
      this.setState({ signUpForm: true });
    } else {
      let obj = {
        dbcourse: null,
        dbcity: null,
        startingRoll: null,
        form: false,
      };
      firebase.database().ref("/").child("registrationForm/").set(obj);
      this.setState({ signUpForm: false });
    }
  }

  showStudent() {
    const { city, course } = this.state;
    firebase
      .database()
      .ref("/")
      .child(`student/${city}/${course}`)
      .on('value',(success)=>{
        console.log(success.val())
      })
      
  }
  render() {
    console.log(this.state.studentdataFromFirebase)
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              className="col-md-3 bg-primary"
            >
              <div
                style={{
                  flex: "2",
                }}
                className="p-5"
              >
                <img src={logow} width="100px" />
              </div>
              <div
                style={{
                  flex: "6",
                }}
                className="p-5"
              >
                <ul>
                  <li className="sideBarList">Course</li>
                  <li className="sideBarList">Fees</li>
                  <li className="sideBarList">Result</li>
                  <li className="sideBarList">Teachers</li>
                  <li className="sideBarList">Students</li>
                  <li className="sideBarList">Logout</li>
                </ul>
              </div>
              <div style={{ padding: "10px", color: "white" }}>
                Made By{" "}
                <a
                  target="blank"
                  style={{ color: "blue" }}
                  href="https://basitahmed-31702.web.app/"
                >
                  Basit Ahmed
                </a>
              </div>
            </div>
            <div
              style={{ height: "100vh", overflow: "scroll" }}
              className="col-md-9 bg-light p-5"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      style={{
                        borderLeft: "3px solid #009999",
                        backgroundColor: "#fff",
                        padding: "10px",
                        margin: "10px",
                      }}
                      className="p-4 shadow"
                    >
                      <p style={{ fontSize: "1.5em" }}>Students 786</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      style={{
                        borderLeft: "3px solid #009999",
                        backgroundColor: "#fff",
                        padding: "10px",
                        margin: "10px",
                      }}
                      className="p-4 shadow"
                    >
                      <p style={{ fontSize: "1.5em" }}>Teachers 786</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      style={{
                        borderLeft: "3px solid #009999",
                        backgroundColor: "#fff",
                        padding: "10px",
                        margin: "10px",
                      }}
                      className="p-4 shadow"
                    >
                      <p style={{ fontSize: "1.5em" }}>Courses 78</p>
                    </div>
                  </div>
                </div>
                <div className="row bg-white rounded shadow mb-5 mt-5">
                  <div className="col-md-12 p-4">
                    <h2>Enrollment Form</h2>
                  </div>
                  <div className="col-md-6 p-5">
                    <label className="text-left" for="course">
                      Enter Your Course If you want to open more then one course
                      seprate your Value by (,) like this
                    </label>
                    <input
                      onChange={(e) =>
                        this.setState({ dbcourse: e.target.value.split(",") })
                      }
                      id="course"
                      className="form-control"
                      placeholder="course 1, course 2, course 3"
                    />
                  </div>
                  <div className="col-md-6 p-5">
                    <label className="text-left" for="city">
                      Enter the city where you are offering these If you want to
                      open this course in more then one city seprate your Value
                      by (,) like this
                    </label>
                    <input
                      onChange={(e) =>
                        this.setState({ dbcity: e.target.value.split(",") })
                      }
                      id="city"
                      className="form-control"
                      placeholder="Karachi, Lahore, Islamabad"
                    />
                  </div>
                  <div className="col-md-6 p-5">
                    <label className="text-left" for="RollNo">
                      Enter Your Starting roll Number where you want to start
                      roll number from
                    </label>
                    <input
                      onChange={(e) =>
                        this.setState({ startingRoll: e.target.value })
                      }
                      id="RollNo"
                      className="form-control"
                      placeholder="Starting Roll Number"
                    />
                  </div>
                  <div className="col-md-6 p-5">
                    Course Status
                    <button
                      style={{
                        padding: 10,
                        outline: "none",
                        fontSize: "2em",
                        color: "#009999",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      {this.state.dataFromFirebase.form ? (
                        <i
                          onClick={() => this.toggle()}
                          class="fas fa-toggle-on"
                        ></i>
                      ) : (
                        <i
                          onClick={() => this.toggle()}
                          class="fas fa-toggle-off"
                        ></i>
                      )}
                    </button>
                  </div>
                </div>
                <div className="row bg-white rounded shadow mb-5 mt-5">
                  <div className="col-md-12 p-4">
                    <h2>Students Data</h2>
                  </div>
                  <div className="col-md-4 p-4">
                    <select
                      onChange={(e) => this.setState({ city: e.target.value })}
                      className="shadow"
                    >
                      <option>Select Your City</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Faisalabad</option>
                    </select>
                  </div>

                  <div className="col-md-4 p-4">
                    <select
                      onChange={(e) =>
                        this.setState({ course: e.target.value })
                      }
                      className="shadow"
                    >
                      <option>Select Your course</option>
                      <option>Dars-e-Nizami</option>
                      <option>Huqooq-e-Zojain Course</option>
                      <option>Hifze Quran</option>
                    </select>
                  </div>
                  <div className="col-md-4 p-4">
                    <button
                      onClick={(e) => this.showStudent(e)}
                      className="btns"
                    >
                      Show Students
                    </button>
                  </div>

                  <div className="col-md-12 p-4">
                    <table style={{ width: "100%" }}>
                      <tr>
                        <th>Name</th>
                        <th>Father</th>
                        <th>Contact</th>
                        <th>CNIC</th>
                        <th>Course</th>
                        <th>Fee Status</th>
                      </tr>
                      <tr>
                        <td>Basit Ahmed</td>
                        <td>Ayaz Ahmed</td>
                        <td>03072199560</td>
                        <td>4210119738169</td>
                        <td>Darse-e-NIzami</td>
                        <td className="color">Paid</td>
                      </tr>
                      <tr>
                        <td>Basit Ahmed</td>
                        <td>Ayaz Ahmed</td>
                        <td>03072199560</td>
                        <td>4210119738169</td>
                        <td>Darse-e-NIzami</td>
                        <td className="color">Paid</td>
                      </tr>
                      <tr>
                        <td>Basit Ahmed</td>
                        <td>Ayaz Ahmed</td>
                        <td>03072199560</td>
                        <td>4210119738169</td>
                        <td>Darse-e-NIzami</td>
                        <td className="color">Paid</td>
                      </tr>
                      <tr>
                        <td>Basit Ahmed</td>
                        <td>Ayaz Ahmed</td>
                        <td>03072199560</td>
                        <td>4210119738169</td>
                        <td>Darse-e-NIzami</td>
                        <td className="color">Paid</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="row bg-white rounded shadow mb-5 mt-5">
                  <div className="col-md-12 p-4">
                    <h2>Upload Result</h2>
                  </div>
                  <div className="col-md-4 p-4">
                    <select className="shadow">
                      <option>Select Your course</option>
                      <option>Dars-e-Nizami</option>
                      <option>Huqooq-e-Zojain</option>
                      <option>Hifze Quran</option>
                    </select>
                  </div>
                  <div className="col-md-4 p-4">
                    <select className="shadow">
                      <option>Select Your Semister</option>
                      <option>1st Semister</option>
                      <option>2nd Semister</option>
                      <option>3rd Semister</option>
                    </select>
                  </div>
                  <div className="col-md-8 p-4">
                    <input className="shadow" type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
