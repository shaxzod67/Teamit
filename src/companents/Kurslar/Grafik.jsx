import { useState } from "react";
import { GoCheck } from "react-icons/go";
import './grafik.css'

function Grafik() {

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
      // You can add form submission logic here (e.g., sending data to a server)
      closeModal(); // Close the modal after submission
    };
  
  
    return (
      <>
        <div className="grafik_header">
            <div className="grafik_header_box">
                <h1>GRAFIK DIZAYN</h1>
                <p>Grafik dizayn sohasini <span className="header_span">chuqurlashtirilgan</span> tarzda o'rganing!</p>
            </div>
            
        </div>
        <div className="banner">
            <div className="banner_box">
                <h1>5 oy</h1>
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
            <h3><span>Grafik dizayn</span> kursi haftasiga <span>3 kun 2 soat davom</span> etadi.</h3>
            <h3><br /><br />
            Ta'limning bu turi asosan bir kunda <span>6 soat</span> oralig'ida vaqtini dars bilan shug'ullanish uchun ajrata oladigan o'quvchilarga tavsiya qilinadi.
            </h3>
        </div>
        <div className="Grafik">
            <h1><span>Grafik dizayn</span> qanday soha?</h1><br /><br />
            <p>Dizayn deganda koʻpchilik <span>rassomchilik</span> yoki <span>tikuvchilik</span> kabi kasblarni hayoliga keltiradi.</p><br /><br />
            <p>
            <span>Grafik dizayn</span> aslida, boshqa bir yoʻnalish hisoblanadi. Ijtimoiy tarmoqlardagi post dizaynlari, internet saytlar, mobil ilovalar, jurnal va gazetalar, kitob muqovalari, restoran menyulari, mahsulot kataloglari, reklama bannerlari, flayerlar, sertifikatlar, mahsulot qadoqlari, hayotimizda koʻrishimiz mumkin boʻlgan koʻplab narsalar grafik dizaynga yaqqol misol bo'la oladi.</p>
        </div>
        <div className="grafik_img">

        </div>
        <div className="grafik_malumot">
            <h1>Kursda nimalarni o'rganasiz?</h1>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>1</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Adobe Photoshop</h2>
                    <ul>
                        <li>• Ijtimoiy tarmoqlar uchun dizaynlar tayyorlash</li>
                        <li>• Kino-filmlar uchun posterlar
                        </li>
                        <li>• Hayratga soluvchi manipulyatsion dizayn tayyorlashni o'rganishingiz mumkin</li>
                    </ul>
                </div>
            </div>
        
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>2</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Adobe Illustrator va Corel Draw</h2>
                    <ul>
                        <li>• Tasvirlarni vektorli holatda chizish</li>
                        <li>• Matnlar bilan ishlash</li>
                        <li>• Logo chizish</li>
                        <li>• Poligrafik dizayn</li>
                        <li>• Packaging dizaynni o'rganishingiz mumkin</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>3</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Adobe InDesign, Adobe Lightroom va Adobe After Effect</h2>
                    <ul>
                        <li>• Kitob, gazeta va jurnallarning sahifalarini yasash</li>
                        <li>• Sifatsiz rasmlarni tahrilash</li>
                        <li>• Posterlarni harakatlantirish</li>
                        <li>• Post va logolarni animatsion holatga keltirishni o'rganishingiz mumkin</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>4</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Dizayn texnologiyasi</h2>
                    <ul>
                        <li>• Tipografika va u bilan ishlash</li>
                        <li>• Ranglar nazariyasi va psixologiyasi</li>
                        <li>• Kontrast, balans tushunchalarini o'rganishingiz mumkin</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>5</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Social media dizayn (SMD)
                    </h2>
                    <ul>
                        <li>• SMD poster</li>
                        <li>• TZ olish</li>
                        <li>• Web bannerlar</li>
                        <li>• Karusel poster</li>
                        <li>• Kino poster</li>
                        <li>• Infografika</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>6</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Qadoq va poligrafik dizayn</h2>
                    <ul>
                        <li>• Qadoq dizayni haqida tushuncha</li>
                        <li>• Brending va qadoq</li>
                        <li>• Material bilan ishlash</li>
                        <li>• Texnika mahsulotlari qadoq dizayni</li>
                        <li>• Ichimliklar qadoq dizayni</li>
                        <li>• Baqqollik mahsulotlari qadoq dizayni</li>
                    </ul>
                </div>
            </div>
            <div className="malumot_box">
                <div className="malumot_box_p">
                <p>7</p>
                </div>
                <div className="malumot_box_child">
                    <h2>Logo & Branding</h2>
                    <ul>
                        <li>• Stilizatisya</li>
                        <li>• Logo haqida tushuncha</li>
                        <li>• Monogramma</li>
                        <li>• Brif</li>
                        <li>• Aydentika</li>
                        <li>• Prezentatsiya</li>
                        <li>• Neyming</li>
                        <li>• Brend va brend turlari</li>
                        <li>• Brend audit</li>
                        <li>• Brend startegiya</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="button1">

            <button className="grafik_button" onClick={openModal}>Ro'yhatdan o'tish</button>
            </div>
            {/* {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-8 rounded-lg max-w-lg w-full sm:w-auto">
      <h2 className="text-2xl font-bold mb-4">Malumotlaringizni kiriting</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
        placeholder="Ismingiz"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
        placeholder="Telefon No'meringiz"
      />
      <div className="flex justify-end">
        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded mr-2" onClick={closeModal}>Close</button>
        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={handleModalSubmit}>Submit</button>
      </div>
    </div>
  </div>
)} */}

        <div className="grafik_ishlash">
            <h1>Kursdan so'ng qayerlarda ishlay olasiz?</h1>
            <div className="ishlash_box">
            <GoCheck className="grafik_true" />
            <h2>Marketing va SMM agentliklari</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="grafik_true" />
            <h2>O'quv markazlari, xususiy maktab va universitetlar media jamoasida</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="grafik_true" />
            <h2>Dizayn studiyalari</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="grafik_true" />
            <h2>Firma, tashkilot va kompaniyalar</h2>
            </div>
            <div className="ishlash_box">
            <GoCheck className="grafik_true" />
            <h2>Frilanser sifatida</h2>
            </div>
        </div>

        <div className="grafik_kurs">
            <h1>Kurs davomida o'quvchilarimiz tomonidan bajarilgan ishlar</h1>
        </div>

      </>
    )
  }
  
  export default Grafik