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
import logow from "../images/Logo-white.png";
import QRCode from 'qrcode.react'
// var QRCode = require('qrcode.react');

class Fees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText:true,
      feeSlip: false,
      idCard:false,
      feeControl:'',
      resultText:false,
    };
  }
  show(e){
    const {feeControl,feeSlip}= this.state
    if(e == 'Fee Slip'){
      this.setState({feeSlip:true,idCard:false,displayText:false,resultText:false})
    }else if(e == 'ID Card'){
      this.setState({feeSlip:false,idCard:true,displayText:false,resultText:false})
    }else if(e == 'Result'){
      this.setState({feeSlip:false,idCard:false,displayText:false,resultText:true})
    }
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
                <li class="nav-item">
                      <a class="nav-link" href="/donate">
                        About <span class="sr-only">(current)</span>
                      </a>
                    </li>
                <li
                  style={{ borderBottom: "1px solid #009999" }}
                  class="nav-item"
                >
                  <a class="nav-link" href="/feesubmission">
                    Fee Submission
                  </a>
                </li>
              </ul>
              <div><button className='donatebtn'><i class="fas fa-donate"></i> Donate Us</button></div>
            </div>
          </nav>
        </div>
        {/* Fee search bar */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 mt-3 mb-3">
              <select
                style={{ width: "90%", outline: "none" }}
                className="shadow"
                onChange={(e)=>this.show(e.target.value)}
              >
                <option>Select by CNIC</option>
                <option>Fee Slip</option>
                <option>ID Card</option>
                <option>Result</option>
              </select>
            </div>
            <div className="col-md-8 mt-3 mb-3">
              <form>
                <input
                  style={{ width: "80%", outline: "none" }}
                  className="shadow"
                  placeholder="Enter CNIC Number"
                />
                <button className="shadow">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* display Text */}
        {this.state.displayText?<div className='container mt-5'>
          <p style={{color:'lightgrey',fontSize:'4em'}}>Search you ID Card, Fee Slip, Result by CNIC Number</p>
        </div>:false}
        {/* fee Slip */}
        {this.state.feeSlip ? (
          <div className="container mt-5">
            <div className="row p-5">
              <div className="col-md-6 mt-3 mb-3">
                <div className="shadow">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <img width="80px" src={logo} />
                    </div>
                    <div className="text-left">
                      <h3>Jamia Abul Qasim</h3>
                      <p className="text-muted">
                        Fee Slip of the month of July 2020
                      </p>
                    </div>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div style={{ display: "flex" }}>
                    <div className="text-muted text-left p-3">
                      <p>
                        Name of Student:{" "}
                        <span className="color">Basit Ahmed</span>
                      </p>
                      <p>
                        Course: <span className="color">Dars-e-Nizami</span>
                      </p>
                      <p>
                        CNIC: <span className="color">4210119738169</span>
                      </p>
                      <p>
                        Contact: <span className="color">03072199560</span>
                      </p>
                    </div>
                    <div style={{ display: "flex", padding: "10px" }}>
                      <p className="btns">Reciept No:</p>
                      <p
                        style={{
                          padding: "10px",
                        }}
                      >
                        32541
                      </p>
                    </div>
                  </div>
                  <div className="feeShedule">
                    <table
                      border="1"
                      style={{
                        width: "90%",
                        textAlign: "left",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <tr>
                        <th>S.No</th>
                        <th>Particular</th>
                        <th>Amount</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>July 2020</td>
                        <td>2500</td>
                      </tr>
                      <tr>
                        <td>. </td>
                        <td>. </td>
                        <td>. </td>
                      </tr>
                      <tr>
                        <th rowSpan="2"></th>
                        <th>Total</th>
                        <th>2500/-</th>
                      </tr>
                    </table>
                  </div>
                  <div className="mt-5" style={{ display: "flex" }}>
                    <div className="p-2">
                      <p
                        style={{
                          width: "100%",
                          margin: "50px 5px 10px 5px",
                          borderTop: "1px solid black",
                        }}
                      >
                        Signature Of Accountant
                      </p>
                    </div>
                    <div className="p-2">
                      <p
                        style={{
                          width: "100%",
                          margin: "50px 5px 10px 5px",
                          borderTop: "1px solid black",
                        }}
                      >
                        Signature Of Accountant
                      </p>
                    </div>
                  </div>
                  <p className="color">Institute Copy</p>
                </div>
              </div>
              <div className="col-md-6 mt-3 mb-3">
                <div className="shadow">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <img width="80px" src={logo} />
                    </div>
                    <div className="text-left">
                      <h3>Jamia Abul Qasim</h3>
                      <p className="text-muted">
                        Fee Slip of the month of July 2020
                      </p>
                    </div>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div style={{ display: "flex" }}>
                    <div className="text-muted text-left p-3">
                      <p>
                        Name of Student:{" "}
                        <span className="color">Basit Ahmed</span>
                      </p>
                      <p>
                        Course: <span className="color">Dars-e-Nizami</span>
                      </p>
                      <p>
                        CNIC: <span className="color">4210119738169</span>
                      </p>
                      <p>
                        Contact: <span className="color">03072199560</span>
                      </p>
                    </div>
                    <div style={{ display: "flex", padding: "10px" }}>
                      <p className="btns">Reciept No:</p>
                      <p
                        style={{
                          padding: "10px",
                        }}
                      >
                        32541
                      </p>
                    </div>
                  </div>
                  <div className="feeShedule">
                    <table
                      border="1"
                      style={{
                        width: "90%",
                        textAlign: "left",
                        margin: "10px",
                        textAlign: "center",
                      }}
                    >
                      <tr>
                        <th>S.No</th>
                        <th>Particular</th>
                        <th>Amount</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>July 2020</td>
                        <td>2500</td>
                      </tr>
                      <tr>
                        <td>. </td>
                        <td>. </td>
                        <td>. </td>
                      </tr>
                      <tr>
                        <th rowSpan="2"></th>
                        <th>Total</th>
                        <th>2500/-</th>
                      </tr>
                    </table>
                  </div>
                  <div className="mt-5" style={{ display: "flex" }}>
                    <div className="p-2">
                      <p
                        style={{
                          width: "100%",
                          margin: "50px 5px 10px 5px",
                          borderTop: "1px solid black",
                        }}
                      >
                        Signature Of Accountant
                      </p>
                    </div>
                    <div className="p-2">
                      <p
                        style={{
                          width: "100%",
                          margin: "50px 5px 10px 5px",
                          borderTop: "1px solid black",
                        }}
                      >
                        Signature Of Accountant
                      </p>
                    </div>
                  </div>
                  <p className="color">Student Copy</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        {/* id card */}
      {this.state.idCard?<div className='container mt-5'>
          <div className='row'>
              <div className='col-md-6 text-center mt-5 mb-5'>
                  <div style={{
                    width:'300px',
                    border: '1px solid grey',
                    backgroundColor:'rgb(244 252 255)'
                  }} className='studentCard'>
                      <div style={{
                          borderRadius: '0 0 15px 15px',
                          backgroundColor:'rgb(19 130 167)' ,
                          padding: '10px'
                      }} className='cardLogo'>
                          <img style={{
                          }} width='70px' src={logow} />
                          <p style={{color:'white'}}>Jamia Abul Qasim</p>
                      </div>
                      <div>
                      <div style={{
                        padding:'30px'
                      }} class="imgContainer">
                        <img style={{
                          borderRadius:'5px'
                        }} width='100px' src={teacher} />
                      </div>
                      <div className='studentDetail'>
                        <p style={{
                          color:'rgb(0 72 97)',
                          fontSize:'1.5em'
                        }} className='studentName'>Basit Ahmed</p>
                        <p style={{
                          backgroundColor:'rgb(19 130 167)',
                          color:'white',
                          width:'80%',
                          margin:'0',
                          padding:'10px',
                          borderRadius:'0 8px 0 0',
                          fontSize:'1.2em'
                        }} className='course'>Darse Nizami</p>
                        <p style={{
                          backgroundColor:'rgb(11 78 101)',
                          padding:'10px',
                          width:'90%',
                          borderRadius:'0 8px 8px 0',
                          color:'white'
                        }} className='rollNo'>786</p>
                      </div>
                      <div>
                        <p>Student ID card</p>
                      </div>
                      </div>
                  </div>
              </div>
              <div className='col-md-6 text-center mt-5 mb-5'>
              <div style={{
                    width:'300px',
                    border: '1px solid grey',
                    backgroundColor:'rgb(244 252 255)'
                  }} className='studentCard'>
                      <div style={{
                          borderRadius: '0 0 15px 15px',
                          backgroundColor:'rgb(19 130 167)',
                          padding: '10px'
                      }} className='cardLogo'>
                        <div>
                          <table style={{
                            color:'white',
                            textAlign:'left',
                            padding:'10px',
                            marginTop:'5px',
                            marginBottom:'5px',
                            width:'100%'
                          }}>
                            <tr>
                              <td>Roll No</td>
                              <td>:786</td>
                            </tr>
                            <tr>
                              <td>Name</td>
                              <td>:Basit Ahmed</td>
                            </tr>
                            <tr>
                              <td>Father Name</td>
                              <td>:Ayaz Ahmed</td>
                            </tr>
                            <tr>
                              <td>Contact</td>
                              <td>:03072199560</td>
                            </tr>
                            <tr>
                              <td>CNIC</td>
                              <td>:4210119738169</td>
                            </tr>
                            <tr>
                              <td>Course</td>
                              <td>:Darse-e-Nizami</td>
                            </tr>
                          </table>
                          </div>
                          <div style={{
                            padding:'40px'
                          }}>
                          <QRCode style={{
                            padding:'8px',
                            backgroundColor:'white',
                            width:'80px',
                            height:'80px'
                          }} value="786" />
                          </div>
                          <div>
                            <p style={{color:'white'}}>Use this code for attendance</p>
                          </div>
                      </div>
                      <div>
                      
                      
                      <div style={{
                        padding:'10px'
                      }}>
                        <p><i class="fab fa-facebook-square"></i> /Jamia Abul Qasim</p>
                        <p><i class="fas fa-globe"></i> www.jamiaabulqasim.com</p>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>:false}
      {/* result */}
      {this.state.resultText?<div className='container mt-5'>
          <p style={{color:'#1f9999',fontSize:'3em'}}>Result is not updated</p>
        </div>:false}
      </div>
    );
  }
}
export default Fees;
