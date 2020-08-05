import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import logow from "../images/Logo-white.png";
import book3 from "../images/book3.jpg";
import * as firebase from "firebase";

export default class StudentPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpForm: false,
      dbcourse: [],
      dbcity: [],
      startingRoll: "",
      // data from database
      dataFromFirebase: "",
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
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              className="col-md-3 bg-success"
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
                <div className='container'>
                    <div className='row'>
                      <div className='col-md-4 mt-2 mb-2'>
                        <div className='bg-info text-white shadow rounded'>
                          <div className='p-3'>
                          <p>Month of July 2020</p>
                          </div>
                          <p style={{backgroundColor:'rgba(0,0,0,.2)',padding:'10px'}}> status: pending</p>
                          </div>
                      </div>
                      <div className='col-md-4 mt-2 mb-2'>
                        <div className='bg-info text-white shadow rounded'>
                          <div className='p-3'>
                          <p>Month of July 2020</p>
                          </div>
                          <p style={{backgroundColor:'rgba(0,0,0,.2)',padding:'10px'}}> status: pending</p>
                          </div>
                      </div>
                      <div className='col-md-4 mt-2 mb-2'>
                        <div className='bg-info text-white shadow rounded'>
                          <div className='p-3'>
                          <p>Month of July 2020</p>
                          </div>
                          <p className='text-danger' style={{backgroundColor:'rgba(0,0,0,.2)',padding:'10px'}}> status: pending</p>
                          </div>
                      </div>
                      <div className='col-md-4 mt-2 mb-2'>
                        <div className='bg-info text-white shadow rounded'>
                          <div className='p-3'>
                          <p>Month of July 2020</p>
                          </div>
                          <p className='text-danger' style={{backgroundColor:'rgba(0,0,0,.2)',padding:'10px'}}> status: pending</p>
                          </div>
                      </div>
                      <div className='col-md-4 mt-2 mb-2'>
                        <div className='bg-info text-white shadow rounded'>
                          <div className='p-3'>
                          <p>Month of July 2020</p>
                          </div>
                          <p className='text-danger' style={{backgroundColor:'rgba(0,0,0,.2)',padding:'10px'}}> status: pending</p>
                          </div>
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
