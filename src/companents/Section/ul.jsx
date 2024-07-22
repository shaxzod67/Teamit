import React from "react";
import { Collapse } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "4 yillik IT o'rgatish tajribasi",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "1 kurs - 1 kasb",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Amaliy kurs",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Mentor yordami",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "Beepul kourking",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "Vedio yozuv",
    children: <p>{text}</p>,
  },
];
const Ul = () => (
  <div className="ul">
    <h2>
      Nega aynan{" "}
      <span className="span1">
        Team<span className="span2">it</span>
      </span>
    </h2>
    <Collapse accordion items={items} />
  </div>
);
export default Ul;
