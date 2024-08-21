import React, { useRef, useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./style.css";
import Ul from "../Section/ul";
import Marquee from "../Section/marquee";
import Natija from "../Section/natija";
import Courses from "../Section/courses";
import Contact from "../Section/contact";
import Team from "../Section/team";
import Footer from "../Footer/footer";
import Achievements from "../Section/achievements";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useNavigate } from "react-router-dom";


export const Header = () => {
  const [kurs, setKurs] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const prevScrollY = useRef(0);
  const Navigate = useNavigate()
  
  ////////// AOS ///////

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);

  ////////// AOS ///////

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




  //////////////////////Navigate////////////////////

  const handleGrafik = () =>{
    Navigate('/grafik')
  }

  const handleWeb = () =>{
    Navigate('/webdasturlash')
  }

  return (
    <div>
      <header>
        <nav
          className={`${
            showNav ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300`}
        >
          <div className="nav_in">
            <div className="logoDiv">
              <img
                src="https://www.teamit.uz/teamitlogo_blue.png"
                alt="Teamit"
              />
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
          <div className="w-full fixed bg-[#f2f2f2] z-[8] ">
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
                <img
                  src="https://www.teamit.uz/courses/3ds.jpg"
                  alt=" 3D max"
                />
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
        <div className="header_info">
          <h2 data-aos="fade-right" data-aos-duration="3000">
            Biz sizga ko‘p yillik <br /> IT tajribasini o‘rgatamiz!
          </h2>
          <p data-aos="fade-left" data-aos-duration="3000">
            2020-yildan boshlab yoshlarga IT‘ni o'rgatib kelamiz!
          </p>
          <button data-aos="zoom-in" data-aos-duration="3000">
           <a href="#contact"> Bepul konsultatsiya oling!</a>
          </button>
        </div>
      </header>
      <Ul />
      <Marquee />
      <Natija />
      <Achievements />
      <Courses />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
