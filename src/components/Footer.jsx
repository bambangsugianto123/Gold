import { links } from "../utils/dummy";
import ImageSosmed from "../assets/list_item.png";
import ImageLogo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-contact">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="footer-menus">
          {links.map((menu) => (
            <p>{menu.title}</p>
          ))}
        </div>
        <div className="footer-media">
          <p>Connect With Us</p>
          <img src={ImageSosmed} alt="sosmed" />
        </div>
        <div className="footer-logo">
          <p>Copyright Binar 2022</p>
          <img src={ImageLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
