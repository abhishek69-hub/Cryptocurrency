import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import CoinItem from './CoinItem'
import './Coins.css';
import Coin from '../routes/Coin';
import Banner from './Banner';
import axios from 'axios';
// import { CryptoState } from '../context/CryptoContext';

 

export default function Coins(props) { 

 const[search,setSearch]=useState("")
//  console.log(search)



  return (
    <>
    <Banner/>
    <div className='container h-full min-h-screen'>
      <div>
        <div className="pt-2 relative mx-auto text-gray-600 w-4/6 ">
          <input onChange={(e)=>setSearch(e.target.value)} className="border border-slate-500 bg-stone-900 w-full mt-8 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none hover:border-white"
            type="search" name="search" placeholder="Search"/>
            
            
        </div>
        <div className="heading bg-blue-800">
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt Cap</p>

        </div>
        {props.coins.filter(coin =>{
          if(search === ""){
            // console.log(coin.id) 
            return coin
          }
          else if(coin.id.toLowerCase().includes(search.toLowerCase())){
            return coin
          }
          
        })
        .map(coins =>{
          return(
            
            <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
            <CoinItem coins={coins} key={coins.id}/>
            </Link>
          )
        })}
      </div>
    </div>
    </>
  )
}

