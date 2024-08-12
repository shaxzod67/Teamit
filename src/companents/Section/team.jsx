import React from "react";
import { FaTelegram } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
function Team() {
  const team = [
    {
      id:1,
      image:
        "https://avatars.mds.yandex.net/i?id=04c92f2d7947f2f3460e996c8ee063609d02026a-5232865-images-thumbs&n=13",
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
      image:
        "https://avatars.mds.yandex.net/i?id=04c92f2d7947f2f3460e996c8ee063609d02026a-5232865-images-thumbs&n=13",
      name: "Iskandar",
      surname: "Oqilov",
      position: "Grafik dizayn",
      university: "Toshkent Axborot Texnologiyalar Universiteti",
      experience: "2-yil",
      telegram: "https://t.me/olimjonov_44",
      instagram: "https://www.instagram.com/olimjonov.23",
      gitHub: "https://github.com/shaxzod67",
    },
    {
      id:2,
      image:
        "https://avatars.mds.yandex.net/i?id=04c92f2d7947f2f3460e996c8ee063609d02026a-5232865-images-thumbs&n=13",
      name: "Yormuhammad",
      surname: "G'aniyev",
      position: "Direktor",
      university: "Toshkent Axborot Texnologiyalar Universiteti",
      experience: "4-yil",
      telegram: "https://t.me/olimjonov_44",
      instagram: "https://www.instagram.com/olimjonov.23",
      gitHub: "https://github.com/shaxzod67",
    },
    {
      id:3,
      image:
        "https://avatars.mds.yandex.net/i?id=04c92f2d7947f2f3460e996c8ee063609d02026a-5232865-images-thumbs&n=13",
      name: "Yormuhammad",
      surname: "G'aniyev",
      position: "Direktor",
      university: "Toshkent Axborot Texnologiyalar Universiteti",
      experience: "4-yil",
      telegram: "https://t.me/olimjonov_44",
      instagram: "https://www.instagram.com/olimjonov.23",
      gitHub: "https://github.com/shaxzod67",
    },
  ];
  return (
    <div className="team">
        <h2 className="team_h2">
          Bizning Jamoa
        </h2>
      <div className="team_boxs">
        {team.map((mall) => {
          return (
            <div className="team_box">
              <div className="team_img">
                <img src={mall.image} alt="Jamoa azosi" />
              </div>
              <div className="team_info">
                <h2>{mall.surname}</h2>
                <h2>{mall.name}</h2>
                <h3>
                  {mall.position} <span>{mall.experience}</span>
                </h3>
                <p>{mall.university}</p>
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
