import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./companents/Header/header";
import Ul from "./companents/Section/ul";
import Marquee from "react-fast-marquee";
import Natija from "./companents/Section/natija";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/ul" element={<Ul/>}/>
        <Route path="/marquee" element={<Marquee/>}/>
        <Route path="/natija" element={<Natija/>}/>
      </Routes>
    </>
  );
}

export default App;
