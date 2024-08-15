import React, { useEffect, useState, useRef } from "react";
import { PiUsersThreeFill } from "react-icons/pi";
import { AiOutlineCalculator } from "react-icons/ai";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

function Natija() {
  const [bitiruvchilar, setBitiruvchilar] = useState(0);
  const [ishgaKirish, setIshgaKirish] = useState(0);
  const [boshlangichMaosh, setBoshlangichMaosh] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Prevents re-animation
  const natijaRef = useRef(null);

  useEffect(() => {
    const incrementValue = (start, end, setFunction, duration) => {
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setFunction(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          incrementValue(0, 400, setBitiruvchilar, 2000);  // 400+
          incrementValue(0, 45, setIshgaKirish, 2000);     // 40-50%
          incrementValue(0, 200, setBoshlangichMaosh, 2000); // $200+
          setHasAnimated(true); // Prevent re-animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    if (natijaRef.current) {
      observer.observe(natijaRef.current);
    }

    return () => {
      if (natijaRef.current) {
        observer.unobserve(natijaRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="natija" ref={natijaRef}>
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
            <h2>{bitiruvchilar}+</h2>
          </div>
          <div className="natija_box">
            <div>
              <p>
                Ishga kirish <br /> <b>ko'rsatgichi</b>
              </p>
              <AiOutlineCalculator />
            </div>
            <h2>{ishgaKirish}%</h2>
          </div>
          <div className="natija_box">
            <div>
              <p>
                Bitiruvchilarning <br /> <b>boshlang'ich maoshi</b>
              </p>
              <LiaMoneyBillWaveSolid />
            </div>
            <h2 id="kurslar">${boshlangichMaosh}+</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Natija;
