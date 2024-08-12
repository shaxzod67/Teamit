// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { Carousel } from "antd";
import Ul from "../Section/ul";
import Marquee from "../Section/marquee";
import Natija from "../Section/natija";
import Courses from "../Section/courses";
import Contact from "../Section/contact";
import Team from "../Section/team";
import Footer from "../Footer/footer";
const contentStyle = {
  height: "360px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export const Header = () => {
  const [kurs, setKurs] = useState(false);
  const clickKurs = () => {
    setKurs(!kurs);
  };

  const handleTel = () => {
    window.location.href = "tel:+998995507799";
  };
  return (
    <div>
      <header>
        <nav>
          <div className="nav_in">
            <div className="logoDiv">
              <img src="https://www.teamit.uz/teamitlogo_blue.png" alt="Teamit" />
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
          <div className="w-[100%] fixed bg-[#f2f2f2] z-[8] ">
            <div className="kurs_box">
              <div className="kurs_box1">
                <img
                  src="https://www.teamit.uz/courses/web.jpg"
                  alt="Web dasturlash"
                />
                <h2>Web dasturlash</h2>
              </div>

              <div className="kurs_box1">
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

        <div className="header_box">
          <div className="header_chap">
            <h2>Qisqa vaqtda daromatli kasblar egasi bo'ling</h2>
            <button><a href="#contact">Bepul konsultatsiya</a></button>
          </div>
          <div className="header_ong">
            <Carousel autoplay className="swiper">
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="https://www.teamit.uz/courses/web.jpg"
                    alt="Web dasturlash"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="https://www.teamit.uz/courses/graphic.jpg"
                    alt="grafik dizayn"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img src="https://www.teamit.uz/courses/3ds.jpg" alt="" />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img src="https://www.teamit.uz/courses/auto.jpg" alt="" />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img src="https://www.teamit.uz/courses/ofis.jpg" alt="" />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  {" "}
                  <img src="https://www.teamit.uz/courses/roboto.jpg" alt="" />
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
      </header>
      <Ul />
      <Marquee/>
      <Natija/>
      <Courses/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
};
