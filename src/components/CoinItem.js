import React from 'react'

import './Coins.css'

export default function CoinItem(props) {
  return (
    <div className='coin-row hover:scale-105 duration-200 bg-stone-900 text-white border border-stone-900 border-b-blue-900'>
        <p>{props.coins.market_cap_rank}</p>
        <div className="img-symbol">
            <img src={props.coins.image} alt="" />
            <p>{props.coins.symbol}</p>
        </div>
        <p>₹{props.coins.current_price.toLocaleString()}</p>
        <p className='text-red-500'>{props.coins.price_change_percentage_24h.toFixed(2)}</p>
        {/* <p className={{props.coins.price_change_percentage_24h} > 0 ? "text-green-300":"text-red-300"}>{props.coins.price_change_percentage_24h.toFixed(2)}</p> */}
        <p className='hide-mobile'>₹{props.coins.total_volume}</p>
        <p className='hide-mobile'>₹{props.coins.market_cap}</p>
      
    </div>
  )
}
