import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      phone: "",
      password: "",
      name: "",
      lastName: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.otpsend = this.otpsend.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    let lastName = target.lastName;
    let phone = target.phone;

    this.setState({
      [name]: value,
      [lastName] : value,
      [phone]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  otpsend(e) {
    e.preventDefault();

    console.log("Otp was sent");
    // console.log(this.state);

  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              // required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="formFieldInput"
              placeholder="Enter your Last name"
              name="lastName"
              // required
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              // required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Mobile Number
            </label>
            <input
              // type="email"
              // id="email"
              className="formFieldInput"
              placeholder="Enter your Mobile Number"
              // name="email"
              type="tel" id="phone" name="phone" pattern="^[7-9][0-9]{9}$" 
              // required
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <button  onClick={this.otpsend}>Send Otp</button>
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
                // required
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
          <input className="formFieldButton" type="submit" value="Sign Up" />
            {/* <button className="formFieldButton">Sign Up</button> */}
            {" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
