import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import LeftSection from "./components/LeftSection";
import Navbar from "./components/Navbar";
import { useOverlayStore } from "./store/store";
import Footer from "./components/Footer";

function App() {
  const { overlay } = useOverlayStore();

  return (
    <div className="w-full min-h-screen flex justify-center select-none relative">
      <div className="max-w-[1100px] flex flex-col">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
      {overlay && (
        <div className="w-screen  z-[60] fixed min-h-screen bg-black/70 flex justify-center items-center">
          <div className="max-w-2xl">
            <LeftSection carousel={true} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
