import React, { useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [kurs, setKurs] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const prevScrollY = useRef(0);
  const Navigate = useNavigate();
  const clickKurs = () => {
    setKurs(!kurs);
  };

  const handleTel = () => {
    window.location.href = "tel:+998995507799";
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGrafik = () => {
    Navigate("/dizayn");
  };

  const handleWeb = () => {
    Navigate("/webdasturlash");
  };
  const handleNav = () => {
    Navigate("/");
  };
  return (
    <div>
      <nav
        className={`${
          showNav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <div className="nav_in">
          <div className="logoDiv">
            <button onClick={handleNav}>
              <a href="#nav">
                <img
                  src="https://www.teamit.uz/teamitlogo_blue.png"
                  alt="Teamit"
                />
              </a>
            </button>
            <div>
              <div className="select_box">
                <button onClick={clickKurs}>
                  Kurslar
                  {kurs ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button onClick={handleTel} className="telfon">
              <FaPhone />
              <p className="tel1">+998 (99) 550 77 99</p>
              <p className="tel2">Call</p>
            </button>
          </div>
        </div>
      </nav>

      {kurs && (
        <div className="w-full fixed bg-[#f2f2f2] z-[8] left-0">
          <div className="kurs_box">
            <div className="kurs_box1" onClick={handleWeb}>
              <img
                src="https://www.teamit.uz/courses/web.jpg"
                alt="Web dasturlash"
              />
              <h2>Web dasturlash</h2>
            </div>

            <div className="kurs_box1" onClick={handleGrafik}>
              <img
                src="https://www.teamit.uz/courses/graphic.jpg"
                alt="grafik dizayn"
              />
              <h2>Grafik dizayn</h2>
            </div>
            <div className="kurs_box1">
              <img src="https://www.teamit.uz/courses/3ds.jpg" alt=" 3D max" />
              <h2>3D max</h2>
            </div>

            <div className="kurs_box1">
              <img
                src="https://www.teamit.uz/courses/auto.jpg"
                alt=" auto cad"
              />
              <h2>Auto CAD</h2>
            </div>

            <div className="kurs_box1">
              <img
                src="https://www.teamit.uz/courses/ofis.jpg"
                alt=" ofis dasturlari"
              />
              <h2>Ofis dasturlari</h2>
            </div>
            <div className="kurs_box1">
              <img
                src="https://www.teamit.uz/courses/roboto.jpg"
                alt="Robototexnika"
              />
              <h2>Robototexnika</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
