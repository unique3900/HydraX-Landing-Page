import React from 'react'
import Hero from './SubComponents/Hero'
import HeroInfo from './SubComponents/HeroInfo'

import LoremIpsum from './SubComponents/LoremIpsum';
import Introduction from './SubComponents/Introduction';
import Features from './SubComponents/Features';
const Home = () => {

  return (
    <div id='home' className='flex flex-col justify-center items-center'>
      <Hero />
      <Introduction />
      <Features/>
      
    </div>
  )
}

export default Home
