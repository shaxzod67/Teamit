import React, { useRef, useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../Image/Slide1.jpg";
import image2 from "../../Image/Slide2.jpg";
import image3 from "../../Image/Slide3.jpg";
import image4 from "../../Image/Slide4.jpg";
import image5 from "../../Image/Slide5.jpg";

import { Carousel } from "antd";
import Ul from "../Section/ul";
import Marquee from "../Section/marquee";
import Natija from "../Section/natija";
import Courses from "../Section/courses";
import Contact from "../Section/contact";
import Team from "../Section/team";
import Footer from "../Footer/footer";
import Achievements from "../Section/achievements";

export const Header = () => {
  const [kurs, setKurs] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const prevScrollY = useRef(0);

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

  return (
    <div>
      <header >
        <nav className={`${showNav ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
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

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper1"><img src={image1} alt="Teamit.uz" /></SwiperSlide>
          <SwiperSlide className="swiper2"><img src={image2} alt="Teamit.uz" /></SwiperSlide>
          <SwiperSlide className="swiper3"><img src={image3} alt="Teamit.uz" /></SwiperSlide>
          <SwiperSlide className="swiper4"><img src={image4} alt="Teamit.uz" /></SwiperSlide>
          <SwiperSlide className="swiper5"><img src={image5} alt="Teamit.uz" /></SwiperSlide>
        </Swiper>
      </header>
      <Ul />
      <Marquee />
      <Natija />
      <Achievements/>
      <Courses />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
