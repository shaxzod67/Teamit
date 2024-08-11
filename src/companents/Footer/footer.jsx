import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
function Footer() {
  const handleIphone = () => {
    window.location.href = "tel:+998995507799";
  };
  return (
    <footer>
      <div className="footer">
        <div className="footer_left">
          <div>
            <img src="https://www.teamit.uz/teamitlogo_blue.png" alt="Teamit" />
          </div>
          <div>
            <h3>
              {" "}
              <a href="#kurslar">Kurslar</a>
            </h3>
            <p>© “Teamit academy”, 2024 - Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
        <div className="footer_right">
          <div>
            <a href=""><FaFacebook /></a>
            <a href=""><PiInstagramLogoFill /></a>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaTelegram /></a>
          </div>
          <div>
            <p onClick={handleIphone}>Call-markaz +998 99 550 77 99</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
