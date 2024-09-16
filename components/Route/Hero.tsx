import React from 'react'
import line from "@/public/Assets/line.png"
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
const Hero = () => {
  const rowOneImages = [
    {
      url: "https://pixner.net/aikeu/assets/images/banner/large-slider/one.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/large-slider/two.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/large-slider/three.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
    },
  ]
  const rowTwoImages = [
    {
      url: "https://pixner.net/aikeu/assets/images/banner/small-slider/one.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/small-slider/two.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/small-slider/three.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/small-slider/four.png",
    },
    {
      url: "https://pixner.net/aikeu/assets/images/banner/small-slider/five.png",
    },
  ];
  return (
    <div className='w-full md:min-h-screen flex items-center justify-center'>
      <div>
        <h1 className='font-Inter py-5 text-4xl xl:text-7xl 2xl:text-8xl  font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20'>
          Buy <span className='text-[rgb(255,100,26)] '>AI Prompts</span> From <br/> <span className='text-[rgb(255,100,26)] '>Prompt</span>Karido
        </h1>
        <div className='md:mt-5'>
          <Image
            src={line}
            alt=''
            width={2000}
            height={2}
            className='absolute hidden md:block'
          />
        </div>
        <div className='w-[100vw] mb-5 md:mb-20 relative'>
          <div className='rotate-[4deg] mt-10 md:mt-[6.5rem]'>
            <Marquee>
              {
                rowOneImages.map((i, index) => {
                  return (
                    <Image 
                      src={i.url}
                      key={index}
                      alt=""
                      className='md:m-4 w-[200px] m-2 md:w-[400px] rounded-[20px]'
                      width={500}
                      height={300}
                    />
                  )
                })
              }
            </Marquee>
            <Marquee>
              {
                rowTwoImages.map((i, index) => {
                  return (
                    <Image 
                      src={i.url}
                      key={index}
                      alt=""
                      className='md:m-4 w-[200px] m-2 md:w-[400px] rounded-[20px]'
                      width={500}
                      height={300}
                    />
                  )
                })
              }
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
