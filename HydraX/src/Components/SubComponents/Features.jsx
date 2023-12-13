import React from 'react'

const Features = () => {

  const styledContainer = {
    "width": "310px",
    "height": "511px",
    "borderRadius": "40px",
    "background":"radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%)"
  }


  const containerData = [
    {
      title: "Simulation",
      description:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      img:"./assets/features-1.png"
    },
    {
      title: "Education",
      description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      img:"./assets/features-2.png"
    },
    {
      title: "Self-Care",
      description:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      img:"./assets/features-3.png"
    },
    {
      title: "Outdoor",
      description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      img:"./assets/features-4.png"
    }
  ]
  return (
    <div className='w-[100%] flex flex-col md:flex-row justify-center items-center gap-10  px-5 mt-10  lg:gap-16 lg:mt-10 lg:px-20'>
      {
        containerData.map((item, index) => (
          <div key={index} className=" text-white flex flex-col gap-4 justify-center items-center p-5" style={styledContainer}>
            <img src={ item.img} alt={item.title} className='rounded-full' />
            <h3 className="text-2xl font-bold">{item.title }</h3>
            <p className="">{item.description }</p>
            <button className="cursor-pointer w-2/3 rounded-3xl px-4 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            Try it Now
          </button>
          </div>
        ))
      }
      
    </div>
  )
}

export default Features
