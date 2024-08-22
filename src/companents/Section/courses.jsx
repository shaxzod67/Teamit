import React from "react";
import dasturalshImg from "../../Image/Dasturlash icon.png";
import grafikImg from "../../Image/Grafik dizayn icon.png";
import ofisImg from "../../Image/Ofis dasturlash icon.png";
import robotImg from "../../Image/Robototexnika icon.png";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="courses" id="kurslar">
      <h2>Bizning yo'nalishlar</h2>
      <div className="courses_boxs">
        <div className="courses_box">
          <div className="courses_info">
            <div>
              <h3>Web Dasturlash</h3>
              <p>8 oy</p>
            </div>
            <a href="">
              <Link to="/webdasturlash">
                <GoArrowUpRight />
                Batafsil
              </Link>
            </a>
          </div>
          <div className="courses_img">
            <img src={dasturalshImg} alt="" />
          </div>
        </div>
        <div className="courses_box">
          <div className="courses_info">
            <div>
              <h3>Grafik dizayn</h3>
              <p>5 oy</p>
            </div>
            <a href="">
              <GoArrowUpRight />
              Batafsil
            </a>
          </div>
          <div className="courses_img">
            <img className="grafikIcon" src={grafikImg} alt="" />
          </div>
        </div>

        <div className="courses_box">
          <div className="courses_info">
            <div>
              <h3>Ofis dasturlari</h3>
              <p>2 oy</p>
            </div>
            <a href="">
              <GoArrowUpRight />
              Batafsil
            </a>
          </div>
          <div className="courses_img">
            <img src={ofisImg} alt="" />
          </div>
        </div>

        <div className="courses_box">
          <div className="courses_info">
            <div>
              <h3>Robototexnika</h3>
              <p>2 oy</p>
            </div>
            <a href="">
              <GoArrowUpRight />
              Batafsil
            </a>
          </div>
          <div className="courses_img">
            <img src={robotImg} alt="" />
          </div>
        </div>
        <div className="courses_box">
          <div className="courses_info">
            <div>
              <h3>Arxitektura</h3>
              <p>5 oy</p>
            </div>
            <a href="">
              <GoArrowUpRight />
              Batafsil
            </a>
          </div>
          <div className="courses_img">
            <img src={robotImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
