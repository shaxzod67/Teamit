import React from "react";
import { FaTelegram } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import Yormuhammad from "../../Image/Yormuhammad.jpg";
import Javohir from "../../Image/Javohir.jpg";
import Samariddin from "../../Image/Samariddin.jpg";
import Iskandar from "../../Image/Iskandar.jpg";
import Anvar from "../../Image/Anvar.jpg";
function Team() {
  const team = [
    {
      id: 1,
      image: Yormuhammad,
      name: "Yormuhammad",
      surname: "G'aniyev",
      position: "Direktor",
      university: "Toshkent Axborot Texnologiyalar Universiteti",
      // experience: "4-yil",
      telegram: "https://t.me/olimjonov_44",
      instagram: "https://www.instagram.com/olimjonov.23",
      gitHub: "https://github.com/shaxzod67",
    },
    {
      image: Javohir,
      name: "Javohir",
      surname: "Abduraimov",
      position: "Ofis dasturlari",
      university: "Jizzax Politexnika instituti",
      experience: "3-yil",
      telegram: "https://t.me/javohirr_abduraimov",
      instagram: "https://www.instagram.com/javohircoder",
      gitHub: "https://www.jabohircoder.uz",
    },
    {
      id: 2,
      image: Samariddin,
      name: "Samariddin",
      surname: "Sattorov",
      position: "Grafik dizayn",
      university: "Teamit academy bitiruvchisi",
      experience: "1-yil",
      telegram: "https://t.me/samariddin_sattorov",
      instagram: "https://www.instagram.com/sssamariddinn",
      gitHub: "https://github.com/shaxzod67",
    },
    {
      id: 3,
      image: Iskandar,
      name: "Iskandar",
      surname: "Oqilov",
      position: "Grafik dizayn",
      university: "Teamit academy bitiruvchisi",
      experience: "2-yil",
      telegram: "https://t.me/okilov21",
      instagram: "https://www.instagram.com/okilov21",
      gitHub: "https://github.com/shaxzod67",
    },
    {
      id: 4,
      image: Anvar,
      name: "Anvar",
      surname: "Tursunov",
      position: "Robototexnik",
      university: "Teamit academy bitiruvchisi",
      experience: "3-yil",
      telegram: "https://t.me/okilov21",
      instagram: "https://www.instagram.com/okilov21",
      gitHub: "https://github.com/shaxzod67",
    },
  ];
  return (
    <div className="team">
      <h2 className="team_h2">Bizning Jamoa</h2>
      <div className="team_boxs">
        <div className="showTeam">
          <div className="showTeamInfo">
            <h2>
              hello world
            </h2>
          </div>
        </div>
        {team.map((mall) => {
          return (
            <div className="team_box" id={mall.id}>
              <div className="team_img">
                <img src={mall.image} alt="Jamoa azosi" />
              </div>
              <div className="team_info">
                <h2>{mall.surname}</h2>
                <h2>{mall.name}</h2>
                <h3>
                  {mall.position} <span>{mall.experience}</span>
                </h3>
                {/* <p>{mall.university}</p>
                <div className="team_link">
                  <a href={mall.telegram}>
                    <FaTelegram />
                  </a>
                  <a href={mall.instagram}>
                    <BiLogoInstagramAlt />
                  </a>
                  <a href={mall.gitHub}>
                    <FaGithub />
                  </a>
                </div> */}
              </div>
            </div>  
          );
        })}
      </div>
    </div>
  );
}

export default Team;
