import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-amber-100 shadow-lg sm:bg-yellow-200 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus"> Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
