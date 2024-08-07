import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendtelegram = async () => {
    const { name, phone, message } = formData;
    const telegram_bot_id = "Token"; // Replace with your bot token
    const chat_id = "telegram Id"; // Replace with the chat ID

    const data = {
      chat_id: chat_id,
      text: `Ism : ${name}\nTelfon: ${phone} `,
    };

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending message to Telegram", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendtelegram();
    setFormData({
      name: "",
      phone: "",
    });
  };

  return (
    <div>
      <div className="contact">
    <div className="contact_left">
      <img src="https://i.pinimg.com/564x/37/88/fe/3788fe84a42d004f25a0aaa2ca605602.jpg" alt="" />
    </div>
      <div className="form">
        <h2> Bepul konsultatsiya</h2>
        <p>
          Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va
          birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Telfon raqam"
            value={formData.phone}
            onChange={handleChange}
            required
          />{" "}
          <input type="checkbox" /> <span>Shaxsiy ma'lumotlarni qayta ishlanishiga roziman</span>
          <br /> <br />
          <input type="submit" value="Yuborish" id="btn" />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
