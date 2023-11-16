import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { motion, useScroll } from "framer-motion";
import Hero from "./Components/SubComponents/Hero";
import LoremIpsum from "./Components/SubComponents/LoremIpsum";
import DemoPage from "./Components/SubComponents/DemoPage";
import Introduction from "./Components/SubComponents/Introduction";

const App = () => {
  const { scrollYProgress } = useScroll();
  

  return (
    <div className="overflow-hidden">
      <Navbar />
      <motion.div className="progress-bar " style={{ scaleX: scrollYProgress }}/>
      <Home />
  
      {/* <DemoPage/> */}
    </div>

    
  );
};

export default App;
