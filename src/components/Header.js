import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
const Header = () => {
  const[btnText,setBtnText] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart 🛒</li>
            <button className="login-btn"
            onClick={()=>{

            if(btnText === "Login") {
              setBtnText("Logout");
            }
            else {
              setBtnText("Login");
            }
            }
            }>{btnText}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;