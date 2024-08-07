import React from "react";

function Courses() {
  return (
    <div className="courses">
      <h2>Bizning yo'nalishlar</h2>
      <div className="courses_boxs">
        <div className="courses_box">
          <h3>Dasturlash</h3>
          <img
            src="https://i.pinimg.com/564x/82/f7/1e/82f71e85266ba64104806ee9c214362c.jpg"
            alt="web dasturlash"
          />
        </div>
        <div className="courses_box">
          <h3>Grafik dizayn</h3>
          <img
            src="https://i.pinimg.com/564x/82/cb/43/82cb438a2ec938f454b4ce5182af8a15.jpg"
            alt="Grafik dizayn"
          />
        </div>

        <div className="courses_box">
          <h3>Arxitektura</h3>
          <img
            src="https://i.pinimg.com/564x/eb/48/43/eb48439ea714ff4b096aaa3cbb729fa1.jpg"
            alt="Arxitektura"
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
