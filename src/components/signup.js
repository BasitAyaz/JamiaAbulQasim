import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header className="App-header" style={{ backgroundColor: "#bfc8ff" }}>
          <h3 className="display-4">Jamia</h3>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 m-2">
                <form
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
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="LastName">Last Name</label>
                      <input
                        id="LastName"
                        className="form-control"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                    <div className="col-md-8 mb-3">
                      <label for="FatherName">Father Name</label>
                      <input
                        id="FatherName"
                        className="form-control"
                        placeholder="Enter Your Father Name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="contact">contact</label>
                      <input
                        id="contact"
                        className="form-control"
                        placeholder="03XXXXXXXXX"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="cnic">CNIC</label>
                      <input
                        id="cnic"
                        className="form-control"
                        placeholder="XXXXX-XXXXXXX-X"
                      />
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Pakistan</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <select className="form-control">
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
                      />
                    </div>
                    <div className="col-md-5 mb-3">
                      <label for="password1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-md-5 mb-3">
                      <label for="password2">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-md-12 mb-3"></div>
                  </div>
                  <hr className="mb-4" />
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select className="form-control">
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
                      <input type="radio" id="male" name="gender" />
                      <label for="male">Male</label> <br />
                      <input type="radio" id="female" name="gender" />
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
        </header>
      </div>
    );
  }
}
export default Signup;
