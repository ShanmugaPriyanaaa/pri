import React, { useState ,useRef} from "react";
import { Link } from "react-router-dom";
// import "App.css";

const LHCLogin = () => {

  const[phone,setPhone] = useState("");
  const[password,setPassword] = useState("");
  const MBinput = useRef();
  const PassInput = useRef();

  const handleSubmit= (e) =>  {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(phone+"data updated"+password);
    
  }
  return (
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Mobile Number
            </label>
            <input
              className="formFieldInput"
              placeholder="Enter your Registerred Mobile number"
              ref={MBinput}
              value={phone}
              onChange={() => setPhone(MBinput.current.value)}
              type="tel" id="phone" name="phone" pattern="^[7-9][0-9]{9}$" required
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
              ref={PassInput}
              value={password}
              onChange={() => setPassword(PassInput.current.value)}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
}
export default LHCLogin;