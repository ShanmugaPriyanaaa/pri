import React from "react";
import { BrowserRouter as Router, Route ,NavLink, Routes} from "react-router-dom";
// import CitizenLogin from "./pages/Citizen/LoginPage";
// import LHCLogin from "./pages/LHCProcessor/LHCLogin";
import SignInform from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";

import "./App.css";

const AppOne = () => {
  return (
    <Router basename="/digipal/">
      {/* <div className="App">
                <div className="appAside">digipal</div>
                <div className="appForm">
                  <div className="pageSwitcher">
                    <NavLink
                      to="/sign-in"
                      activeClassName="pageSwitcherItem-active"
                      className="pageSwitcherItem"
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      exact
                      to="/"
                      activeClassName="pageSwitcherItem-active"
                      className="pageSwitcherItem"
                    >
                      Sign Up
                    </NavLink>
                  </div>
      
                  <div className="formTitle">
                    <NavLink
                      to="/sign-in"
                      activeClassName="formTitleLink-active"
                      className="formTitleLink"
                    >
                      Sign In
                    </NavLink>{" "}
                    or{" "}
                    <NavLink
                      exact
                      to="/"
                      activeClassName="formTitleLink-active"
                      className="formTitleLink"
                    >
                      Sign Up
                    </NavLink>
                  </div> */}
      <Routes>
        <Route exact path="/" component={<SignUpForm />} />
        <Route path="/sign-in" component={<SignInform />} />
      </Routes>
      {/* </div>
              </div> */}
    </Router>
  )
}


// class App extends Component {
//   render() {
//     return (
//       <Router basename="/digipal/">
//         <div className="App">
//           <div className="appAside">digipal</div>
//           <div className="appForm">
//             <div className="pageSwitcher">
//               <NavLink
//                 to="/sign-in"
//                 activeClassName="pageSwitcherItem-active"
//                 className="pageSwitcherItem"
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="pageSwitcherItem-active"
//                 className="pageSwitcherItem"
//               >
//                 Sign Up
//               </NavLink>
//             </div>

//             <div className="formTitle">
//               <NavLink
//                 to="/sign-in"
//                 activeClassName="formTitleLink-active"
//                 className="formTitleLink"
//               >
//                 Sign In
//               </NavLink>{" "}
//               or{" "}
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="formTitleLink-active"
//                 className="formTitleLink"
//               >
//                 Sign Up
//               </NavLink>
//             </div>

//             <Route exact path="/" component={SignUpForm} />
//             <Route path="/sign-in" component={SignInForm} />
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

export default AppOne;
