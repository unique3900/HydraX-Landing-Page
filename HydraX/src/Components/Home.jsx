import React from 'react'
import Hero from './SubComponents/Hero'
import HeroInfo from './SubComponents/HeroInfo'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Hero />
      <HeroInfo/>
    </div>
  )
}

export default Home
