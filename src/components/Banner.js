import React, { useEffect, useState } from 'react';
import { BiTrendingUp } from 'react-icons/bi';
import '../App.css';
import Carousel from './Carousel';




const Banner = () => {


  return (
    <div className='banner h-[500px] w-full flex flex-col items-center' style={{ 
      backgroundImage: `url("https://raw.githubusercontent.com/piyush-eon/react-crypto-tracker/master/public/banner2.jpg")` 
    }}>
      <div className='flex flex-col items-center'>
        <h1 className='heading text-5xl text-white block mx-auto p-0 m-0'>Coin Search</h1>
        <p className='text-white w-10/12 sm:max-w-md'>Search for your favourite Crypto platform ends here.</p>
      </div>

      <div className='text-red-600 flex justify-center items-center text-xl mt-6'>
          <span>Trending</span>  <span><BiTrendingUp/></span>
      </div>

      <Carousel/>
      
    </div>
  )
}

export default Banner
