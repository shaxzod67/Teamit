import { PiUsersThreeFill } from "react-icons/pi";
import { AiOutlineCalculator } from "react-icons/ai";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
function Natija() {
  return (
    <div className="natija">
      <div className="natija_info">
        <h3>Natijalarimiz</h3>
        <div className="natija_boxs">
          <div className="natija_box">
            <div>
              <p>
                Muvaffaqiyatli <br /> <b>bitiruvchilar</b>
              </p>
              <PiUsersThreeFill />
            </div>
            <h2>400+</h2>
          </div>
          <div className="natija_box">
            <div>
              <p>
                Ishga kirish <br /> <b>ko'rsatgichi</b>
              </p>
              <AiOutlineCalculator />
            </div>
            <h2>40-50%</h2>
          </div>
          <div className="natija_box">
            <div>
              <p>
                Bitiruvchilarning <br /> <b>boshlang'ich maoshi</b>
              </p>
              <LiaMoneyBillWaveSolid />
            </div>
            <h2 id="kurslar">$200+</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Natija;
