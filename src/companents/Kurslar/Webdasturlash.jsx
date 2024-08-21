import { useState } from "react";
import { GoCheck } from "react-icons/go";
import './webDevelopment.css'

function WebDasturlash() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleModalSubmit = () => {
      console.log(`Name: ${name}, Phone: ${phone}`);
      closeModal();
    };

    return (
      <div >
        <div className="web_header">
            <div className="web_header_box">
                <h1>WEB DASTURLASH</h1>
                <p>Web dasturlash sohasini <span className="header_span">chuqurlashtirilgan</span> tarzda o'rganing!</p>
            </div>
        </div>
        <div className="webcontenir">
        <div className="banner">
            <div className="banner_box">
                <h1>8 oy</h1>
                <hr />
                <h3>Davomiyligi</h3>
            </div>
            <div className="banner_box">
                <h1>3 kun</h1>
                <hr />
                <h3>Haftada</h3>
            </div>
            <div className="banner_box">
                <h1>2 soat</h1>
                <hr />
                <h3>Dars soati</h3>
            </div>
        </div>
        <div className="block">
            <h3><span>Web dasturlash</span> kursi haftasiga <span>3 kun 2 soat davom</span> etadi.</h3>
            <h3><br /><br />
            Ta'limning bu turi asosan bir kunda <span>12 soat</span> oralig'ida vaqtini dars bilan shug'ullanish uchun ajrata oladigan o'quvchilarga tavsiya qilinadi.
            </h3>
        </div>
        <div className="WebDev">
            <h1><span>Web dasturlash</span> qanday soha?</h1><br /><br />
            <p>Dasturlash deganda ko'pchilik <span>web saytlar</span> yoki <span>mobil ilovalar</span> yaratishni tushunadi.</p><br /><br />
            <p>
            <span>Web dasturlash</span> aslida, web-saytlarni yaratish va rivojlantirish bilan shug'ullanadi. Bu sohada front-end va back-end dasturlarni yaratish, ma'lumotlar bazalari bilan ishlash, server va domenlarni boshqarish, foydalanuvchi interfeysi yaratish kabi ko'plab qobiliyatlar talab etiladi.</p>
        </div>
        <div className="web_img">

        </div>
        <div className="web_malumot">
            <h1>Kursda nimalarni o'rganasiz?</h1>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>1</p>
                </div>
                <div className="malumot_box_child">
                    <h2>HTML & CSS</h2>
                    <ul>
                        <li>• Veb-sahifalarni yaratish</li>
                        <li>• CSS orqali sahifalarni stilizatsiya qilish</li>
                        <li>• Responsive dizayn yaratishni o'rganasiz</li>
                    </ul>
                </div>
            </div>

            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>2</p>
                </div>
                <div className="malumot_box_child">
                    <h2>JavaScript va jQuery</h2>
                    <ul>
                        <li>• Veb sahifalarga dinamiklik qo'shish</li>
                        <li>• JavaScript orqali ma'lumotlarni qayta ishlash</li>
                        <li>• jQuery orqali kodni soddalashtirish</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>3</p>
                </div>
                <div className="malumot_box_child">
                    <h2>React va Angular</h2>
                    <ul>
                        <li>• Single-page aplikatsiyalar yaratish</li>
                        <li>• Front-end kutubxonalar va frameworklarni o'rganish</li>
                        <li>• Komponentlar bilan ishlashni o'rganasiz</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>4</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Node.js va Express</h2>
                    <ul>
                        <li>• Frontend dasturlarni yaratish</li>
                        <li>• API yaratish va ulardan foydalanish</li>
                        <li>• Server bilan ishlashni o'rganasiz</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>5</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Ma'lumotlar bazasi</h2>
                    <ul>
                        <li>• SQL va NoSQL ma'lumotlar bazalari bilan ishlash</li>
                        <li>• Ma'lumotlarni boshqarish va qayta ishlash</li>
                        <li>• Ma'lumotlar bazasini optimallashtirish</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>6</p>
                </div>
                <div className="malumot_box_child">
                    <h2>DevOps va Deployment</h2>
                    <ul>
                        <li>• Veb dasturlarni deploy qilish</li>
                        <li>• CI/CD tizimlarini o'rganish</li>
                        <li>• Serverlarni boshqarish</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="button1">
            <button className="web_button" onClick={openModal}>Ro'yhatdan o'tish</button>
        </div>

        <div className="web_ishlash">
            <h1>Kursdan so'ng qayerlarda ishlay olasiz?</h1>
            <div className="ishlash_box">
            <GoCheck className="web_true" />
            <h2>IT kompaniyalari va startaplar</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="web_true" />
            <h2>Freelance platformalari orqali mustaqil ishlar</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="web_true" />
            <h2>Web agentliklar va dizayn studiyalari</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="web_true" />
            <h2>Firma, tashkilot va kompaniyalarda web dasturchi sifatida</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="web_true" />
            <h2>Web dasturlashni o'rganishni davom ettirib, mutaxassislikni chuqurlashtirish</h2>
            </div>
        </div>

        <div className="web_kurs">
            <h1>Kurs davomida o'quvchilarimiz tomonidan bajarilgan ishlar</h1>
        </div>

        </div>
      </div>
    )
}

export default WebDasturlash;
