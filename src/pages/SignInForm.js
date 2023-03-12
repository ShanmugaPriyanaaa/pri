import React, { useState ,useRef} from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";


const SignInform = () => {

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

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div>
        </form>
      </div>
    );
}
export default SignInform;


// class SignInForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       phone: "",
//       password: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     console.log("The form was submitted with the following data:");
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="formCenter">
//         <form className="formFields" onSubmit={this.handleSubmit}>
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="email">
//               Mobile Number
//             </label>
//             <input
//               // type="number"
//               // id="number"
//               className="formFieldInput"
//               placeholder="Enter your Registerred Mobile number"
//               // name="email"
//               // value={this.state.email}
//               // id="phone" name="phone" class="no-arrow" value="" type="number"
//               onChange={this.handleChange}
//               type="tel" id="phone" name="phone" pattern="^[7-9][0-9]{9}$" required

//             />
//           </div>

//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="formFieldInput"
//               placeholder="Enter your password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="formField">
//             <button className="formFieldButton">Sign In</button>{" "}
//             <Link to="/" className="formFieldLink">
//               Create an account
//             </Link>
//           </div>

//           <div className="socialMediaButtons">
//             <div className="facebookButton">
//               <FacebookLoginButton onClick={() => alert("Hello")} />
//             </div>

//             <div className="instagramButton">
//               <InstagramLoginButton onClick={() => alert("Hello")} />
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignInForm;
