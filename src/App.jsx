import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./companents/Header/header";
import Ul from "./companents/Section/ul";
import Natija from "./companents/Section/natija";
import MyMarquee from "./companents/Section/marquee";
import Grafik from "./companents/Kurslar/Grafik";
import WebDasturlash from "./companents/Kurslar/Webdasturlash";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/ul" element={<Ul/>}/>
        <Route path="/marquee" element={<MyMarquee/>}/>
        <Route path="/natija" element={<Natija/>}/>
        <Route path="/grafik" element={<Grafik/>}/>
        <Route path="/webdasturlash" element={<WebDasturlash/>}/>
      </Routes>
    </>
  );
}

export default App;
