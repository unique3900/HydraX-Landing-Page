import React from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from './Hero';
import Home from '../Home';
import LoremIpsum from './LoremIpsum';

const DemoPage = () => {
  return (
<>
      {/* <Navbar /> */}
      <Parallax pages={4} style={{ top: "30", left: "0" }} className='scrollbar-hide'>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}
        >
          <Hero />
        </ParallaxLayer>


        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{backgroundColor: "#7e2424"}}
        >
          <p>Scroll up</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />
        <ParallaxLayer
          offset={3}
          speed={4}
          style={{
            color: "white",
          }}
        >
          <LoremIpsum />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default DemoPage
