import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import logow from "../images/Logo-white.png";
import * as firebase from 'firebase';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div style={{
              display:'flex',
              flexDirection:'column',
            }} className="col-md-3 bg-primary">
              <div style={{
                flex:'2'
              }} className="p-5">
                <img src={logow} width="100px" />
              </div>
              <div style={{
                flex:'6',
              }} className="p-5">
                <ul>
                  <li className='sideBarList'>Course</li>
                  <li className='sideBarList'>Fees</li>
                  <li className='sideBarList'>Result</li>
                  <li className='sideBarList'>Logout</li>
                  <li className='sideBarList'>Teachers</li>
                </ul>
              </div>
              <div style={{padding:'10px', color:'white'}}>
                Made By <a target='blank' style={{color:'blue'}} href="https://basitahmed-31702.web.app/">Basit Ahmed</a> 
              </div>
            </div>
            <div  style={{height:'100vh',overflow:'scroll'}} className="col-md-9 bg-light p-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      style={{ borderLeft: "3px solid #009999",backgroundColor:'#fff',padding:'10px',margin:'10px' }}
                      className="p-4 shadow"
                    >
                      <p style={{ fontSize: "1.5em" }}>Students 786</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      style={{ borderLeft: "3px solid #009999",backgroundColor:'#fff',padding:'10px',margin:'10px' }}
                      className="p-4 shadow"
                    >
                      <p style={{ fontSize: "1.5em" }}>Teachers 786</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      style={{ borderLeft: "3px solid #009999",backgroundColor:'#fff',padding:'10px',margin:'10px' }}
                      className="p-4 shadow"
                    >
                      <p style={{ fontSize: "1.5em" }}>Courses 78</p>
                    </div>
                  </div>
                </div>
                <div className="row bg-white rounded shadow mt-5">
                  <div className='col-md-12 p-4'>
                    <h2>Enrollment Form</h2>
                  </div>
                  <div className="col-md-6 p-5">
                    <label className="text-left" for="course">
                      Enter Your Course If you want to open more then one course
                      seprate your Value by (,) like this
                    </label>
                    <input
                      id="course"
                      className="form-control"
                      placeholder="course 1, course 2, course 3"
                    />
                  </div>
                  <div className="col-md-6 p-5">
                    <label className="text-left" for="RollNo">
                      Enter Your Starting roll Number where you want to start
                      roll number from
                    </label>
                    <input
                      id="RollNo"
                      className="form-control"
                      placeholder="Starting Roll Number"
                    />
                  </div>
                  <div className='col-md-6 p-5'>
                    Course Status<button style={{
                    padding:10,
                    outline:'none',
                    fontSize:'2em',
                    color:'#009999',
                    border:'none',
                    backgroundColor:'transparent'
                  }}><i class="fas fa-toggle-on"></i></button></div>
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
