import { Col, Statistic } from "antd";
import Aos from "aos";
import { useEffect } from "react";
import CountUp from "react-countup";

const formatter = (value) => <CountUp end={value} separator="" />;

function Natija() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="natija">
      <h2>Natijalarimiz</h2>
      <div className="natija_box">
        <div className="natija_box1">
          <Col span={12}>
            <Statistic
              title="Bitiruvchilar"
              value={1700}
              formatter={formatter}
            />
          </Col>
        </div>
        <div className="natija_box2">
          <p>
            Ishga kirish<br />
            40% - 50% 
          </p>
        </div>
        <div className="natija_box3">
          <h3>Maoshalari</h3>
          {/* <Col span={12}>
            <Statistic title="Dasturlash" value={200}  formatter={formatter} />
            <Statistic title="Grafik dizayn" value={350} formatter={formatter} />
            <Statistic title="Arxitektura" value={300} formatter={formatter} />
          </Col> */}

          <p>
            Dasturlash(junior) - 300$ <br />
            Grafik dizayn - 350$ <br />
            Arxitektura - 250$ - 300$
          </p>
        </div>
      </div>
    </div>
  );
}

export default Natija;
