import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
import Nav from "./Nav";

export const Header = () => {
  ////////// AOS ///////

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);

  ////////// AOS ///////

  return (
    <div>
      <header id="nav">
        <Nav />
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
