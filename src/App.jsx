import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./companents/Header/header";
import Ul from "./companents/Section/ul";
import Natija from "./companents/Section/natija";
import MyMarquee from "./companents/Section/marquee";
import WebDasturlash from "./companents/Kurslar/Webdasturlash";
import Contact from "./companents/Section/contact";
import Dizayn from "./companents/Kurslar/Dizayn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/ul" element={<Ul/>}/>
        <Route path="/marquee" element={<MyMarquee/>}/>
        <Route path="/natija" element={<Natija/>}/>
        <Route path="/webdasturlash" element={<WebDasturlash/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dizayn" element={<Dizayn/>}/>

      </Routes>
    </>
  );
}

export default App;
