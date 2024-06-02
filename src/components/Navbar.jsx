import { Link } from "react-router-dom";
import Logo from "./Logo";
import { links } from "../utils/dummy";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Logo />
        <div className="navbar-links">
          {links.map((menu) => (
            <Link to={menu.url}>{menu.title}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
