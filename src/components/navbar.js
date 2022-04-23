import "./navbar.css";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";

export const NavigationBar = () => (
  <navbar className="navbar-wrapper">
    <img className="logo" src={logo} />
    <div className="navbar-content">WeKolor</div>
    <FaBars className="menu" />
  </navbar>
);
