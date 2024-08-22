import { useNavigate } from "react-router-dom";
import "./grafik.css";
import Nav from "../Header/Nav";
import Aos from "aos";
import { useEffect } from "react";
function Dizayn() {
  ////////// AOS ///////

  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);

  ////////// AOS ///////
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="grafik_Course">
        <Nav />
        <div className="grafik_header">
          <h2>Grafik dizayn</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus eos accusantium magni ipsam deserunt dolores quaerat
            assumenda, incidunt animi illo!
          </p>
          <button type="submit" onClick={handleClick}>
            Bepul konsultatsiya
          </button>
        </div>
      </div>
      <div className="grafik_kurs">
        <div data-aos="fade-right" data-aos-duration="1000">
          <h2>
            <span>5 oy</span> <br /> Kurs davomiyligi
          </h2>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000">
          <h2>
            <span>3 kun</span> <br /> Haftada
          </h2>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000">
          <h2>
            <span>2 soat</span> <br /> Dars soati
          </h2>
        </div>
      </div>
      <div
        className="grafik_info"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div>
          <h2>
            <span>Grafik qanday</span> qanday soha ?
          </h2>
        </div>
        <div className="grafik_info_in">
          <p>
            <b> Grafik dizayn</b> — dizayn sohasining yoʻnalishlaridan biri
            boʻlib, maʼlum axborotni ijtimoiy guruhlarga yetkazish uchun vizual
            kontent yaratish, ularni tartiblash, loyihalashga xizmat qiladi.
            Grafik dizaynning asosiy maqsadi muammolarni aniqlash va ularni
            ijodkorlik bilan innovatsion va raqamli vositalar yordamida
            oʻzgartirish va toʻgʻri talqin qilishdan iborat.
          </p>
        </div>
      </div>
      <div className="grafik_img">
        <div>
          <img
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            src="https://i.pinimg.com/564x/e5/35/6c/e5356c9766b49e62e80a631f821611dd.jpg"
            alt="Teamit grafik dizayn"
          />
          <img
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            src="https://i.pinimg.com/564x/e5/35/6c/e5356c9766b49e62e80a631f821611dd.jpg"
            alt="Teamit grafik dizayn"
          />
          <img
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            src="https://i.pinimg.com/564x/e5/35/6c/e5356c9766b49e62e80a631f821611dd.jpg"
            alt="Teamit grafik dizayn"
          />
          <img
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            src="https://i.pinimg.com/564x/e5/35/6c/e5356c9766b49e62e80a631f821611dd.jpg"
            alt="Teamit grafik dizayn"
          />
        </div>
        <div>
          <img
            data-aos="zoom-in-right"
            data-aos-duration="3000"
            src="https://i.pinimg.com/564x/e5/35/6c/e5356c9766b49e62e80a631f821611dd.jpg"
            alt="Teamit grafik dizayn"
          />
          <img
            data-aos="zoom-in-right"
            data-aos-duration="3000"
            src="https://i.pinimg.com/564x/e5/35/6c/e5356c9766b49e62e80a631f821611dd.jpg"
            alt="Teamit grafik dizayn"
          />
        </div>
      </div>
      <div >
        <h2>
          Dizayner maoshlari
        </h2>
       <div className="grafik_price">
       <div>
          <h2>
            <span>200$</span> <br />  eng past maosh
          </h2>
        </div>
        <div>
          <h2>
            <span>500$</span><br />  eng past maosh
          </h2>
        </div>
        <div>
          <h2>
            <span>200$</span> <br /> eng past maosh
          </h2>
        </div>
       </div>
      </div>
    </>
  );
}

export default Dizayn;
