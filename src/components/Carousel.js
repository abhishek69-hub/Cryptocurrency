import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { CryptoState } from '../context/CryptoContext';



const Carousel = () => {

    const[trend,setTrend]=useState([])
    const[btc,setBtc]=useState(0)
    // const { currency, symbol } = CryptoState();

    const url="https://api.coingecko.com/api/v3/search/trending"
    // const urla = `https://api.coingecko.com/api/v3/coins/bitcoin`

    const handleDragStart = (e) => e.preventDefault();



    

    useEffect(()=>{
      axios.get(url).then((response)=>{
        setTrend(response.data.coins)
      }).catch((error)=>{
        console.log(error)
      })
    }  
    ,[])

    // useEffect(console.log("1"))

 

    const responsive= {
      0: {
          items: 2,
      },
      512: {
          items: 4
      }
    }

    const items = trend.map((coin) => {
      let profit = coin?.item.price_change_percentage_24h >= 0;

      // console.log(coin)
      
  
      return (
        <Link to={`/coin/${coin.item.id}`}> 

          <div className='flex flex-col items-center justify-center'>

            <img className='h-20'
              src={coin?.item.large}
              alt={coin.name}
            />
            <span className='text-white'>
              {coin?.item.id}
            </span>
          </div>
        </Link>
      );
    });

  return (
    <div className='h-20 w-4/6 mt-12'>
      <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
         />
    </div>
  )
}

export default Carousel
