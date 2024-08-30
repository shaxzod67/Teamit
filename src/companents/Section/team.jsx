import React, { useState, useEffect } from "react";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Yormuhammad from "../../Image/Yormuhammad.jpg";
import Javohir from "../../Image/Javohir.jpg";
import Samariddin from "../../Image/Samariddin.jpg";
import Iskandar from "../../Image/Iskandar.jpg";
import Anvar from "../../Image/Anvar.jpg";
import { IoCloseOutline } from "react-icons/io5";

function Team() {
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  useEffect(() => {
    if (selectedMemberId !== null) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMemberId]);

  const team = [
    {
      id: 1,
      image: Yormuhammad,
      name: "Yormuhammad",
      surname: "G'aniyev",
      position: "Direktor",
      university: "Toshkent Axborot Texnologiyalar Universiteti",
      telegram: "https://t.me/olimjonov_44",
      instagram: "https://www.instagram.com/olimjonov.23",
      gitHub: "https://github.com/shaxzod67",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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

  const handleClick = (id) => {
    setSelectedMemberId(id);
  };

  const handleClose = () => {
    setSelectedMemberId(null);
  };

  const selectedMember = team.find((member) => member.id === selectedMemberId);

  return (
    <div className="team">
      {selectedMember && (
        <div className="showTeam">
          <div className="overlay" onClick={handleClose}></div>
          <div className="showTeamInfo">
          <div className="showBtn1">
                <button onClick={handleClose} className="close-btn">
                  <IoCloseOutline />
                </button>
              </div>
            <div className="showImg">
              <img
                src={selectedMember.image}
                alt={`${selectedMember.name} ${selectedMember.surname}`}
              />
            </div>
            <div className="showInfoBox">
              <div className="showBtn">
                <button onClick={handleClose} className="close-btn">
                  <IoCloseOutline />
                </button>
              </div>
              <div className="showInfo">
                <h2>
                  {selectedMember.name} <br /> {selectedMember.surname}
                </h2>
                <p>{selectedMember.university}</p>
                <p>{selectedMember.position}</p>
                {selectedMember.experience && (
                  <p>Tajriba: {selectedMember.experience}</p>
                )}
                {/* <div className="social-icons">
                  <a
                    href={selectedMember.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href={selectedMember.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoInstagramAlt />
                  </a>
                  <a
                    href={selectedMember.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      <h2 className="team_h2">Bizning Jamoa</h2>
      <div className="team_boxs">
        {team.map((member) => (
          <div
            key={member.id}
            className="team_box"
            onClick={() => handleClick(member.id)}
          >
            <div className="team_img">
              <img
                src={member.image}
                alt={`${member.name} ${member.surname}`}
              />
            </div>
            <div className="team_info">
              <h2>{member.surname}</h2>
              <h2>{member.name}</h2>
              <h3>
                {member.position} <span>{member.experience}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
