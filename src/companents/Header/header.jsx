// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import { Select } from 'antd';
import { FaPhone } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Carousel } from 'antd';
const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export const Header = () => {

  const handleTel = () => {
    window.location.href = "tel:+998995507799";
  };
  return (
    <div>
      <header>
        <nav >
          <div className="nav_in">
            <div className="logoDiv">
              <img src="https://www.teamit.uz/teamitlogo.png" alt="Teamit" />
              <div>
                {/* <select name="kurs" id="kurs">
                  <option value="0">Kurslar</option>
                  <option value="1">Web dasturlash</option>
                  <option value="2">Grafik dizayn</option>
                  <option value="3">3D max</option>
                </select> */}


                {
                  <Select className='select'
                    showSearch
                    placeholder="Kursni tanlang"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: '1',
                        label: 'Dasturlash',
                      },
                      {
                        value: '2',
                        label: 'Grafik dizayn',
                      },
                      {
                        value: '3',
                        label: '3D max',
                      },
                    ]}
                  />
                }
              </div>
            </div>


            <div >
              <button onClick={handleTel} className="telfon">
                <FaPhone />
                <p className="tel1">
                  +998 (99) 550 77 99
                </p>
                <p className="tel2">
                  Call
                </p>

              </button>
            </div>
            {/* <div className="lineNavbar">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
           </div> */}
          </div>
        </nav>

        <div className="header_box">
          <div className="header_chap">
            <h2>
              Kelajak kasblarni biz bilan o'rganing
            </h2>
            <button>
              Ro'yxatdan otish
            </button>
          </div>
          <div className="header_ong">





            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}><img src="https://www.teamit.uz/courses/web.jpg" alt="" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src="https://www.teamit.uz/courses/graphic.jpg" alt="" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src="https://www.teamit.uz/courses/3ds.jpg" alt="" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src="https://www.teamit.uz/courses/auto.jpg" alt="" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src="https://www.teamit.uz/courses/ofis.jpg" alt="" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}> <img src="https://www.teamit.uz/courses/roboto.jpg" alt="" /></h3>
              </div>


            </Carousel>






            {/* <Swiper
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
              <SwiperSlide><img src="https://www.teamit.uz/courses/web.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.teamit.uz/courses/graphic.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.teamit.uz/courses/3ds.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.teamit.uz/courses/auto.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.teamit.uz/courses/ofis.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://www.teamit.uz/courses/roboto.jpg" alt="" /></SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </header>
    </div>
  )
}






// export default function App() {
//   return (
//     <>
//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
