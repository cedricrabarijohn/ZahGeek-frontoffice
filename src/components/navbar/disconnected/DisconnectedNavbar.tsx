import { Link } from "react-router-dom";
import "./disconnected-navbar.css";

const DisconnectedNavbar = () => {
  return (
    <div className="disconnected-navbar">
      <div className="nav-left">{/* <div className="logo">Logo</div> */}</div>
      <div className="nav-right">
        <Link className="nav-signup" to={"/signup"}>
          Inscription
        </Link>
        <Link className="nav-signin" to={"/signin"}>
          Connection
        </Link>
      </div>
    </div>
  );
};

export default DisconnectedNavbar;
