import { FaPhone } from "react-icons/fa6";
export const Header = () => {
    return (
        <div>
            <nav className="w-[100%] h-[70px] fixed ">
                <div className="w-[100%] h-[70px] flex px-[20px] items-center justify-between border-2 border-black">
                    <div className="grid grid-cols-2">
                        <img className="w-[120px] border-2 border-black " src="https://www.teamit.uz/teamitlogo_blue.png" alt="Teamit" />
                        <div className="border-2 border-black" >
                            <select name="kurs" id="kurs">
                                <option value="0">Kurslar</option>
                                <option value="1">Web dasturlash</option>
                                <option value="2">Grafik dizayn</option>
                                <option value="3">3D max</option>
                            </select>
                        </div>
                    </div>


                    <div className="border-2 border-black">
                        <p className=" flex  items-center justify-between  gap-[10px]">
                            <FaPhone />
                            +998 (99) 550 77 99
                        </p>
                    </div>

                </div>
            </nav>
        </div>
    )
}




export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
