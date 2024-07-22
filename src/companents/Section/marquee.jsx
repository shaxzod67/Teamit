import img1 from "../../Image/marquee1.jpg";
import img2 from "../../Image/marquee2.jpg";
import img3 from "../../Image/marquee3.jpg";
import img4 from "../../Image/marquee4.jpg";
import img5 from "../../Image/marquee5.jpg";
import Marquee from "react-fast-marquee";

function MyMarquee() {
  return (
    <div>
      <Marquee speed={50} >
        <div className="marquee">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default MyMarquee;
