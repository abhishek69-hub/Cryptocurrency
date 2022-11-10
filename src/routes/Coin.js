import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import './Coin.css'
import DOMPurify from 'dompurify'
import Coininfo from '../components/Coininfo'
import CoinInfos from '../components/CoinInfos'




export default function Coin() {

    const params=useParams()
    const { id }=useParams()
    // console.log(id)
    const[coin,setCoin]=useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(()=>{
        axios.get(url).then((response)=>{
          setCoin(response.data)
        //   console.log(response.data)
    
        }).catch((error)=>{
          console.log(error)
        })
    }, [])
    return (
        <div className='w-full bg-black text-white h-full min-h-screen'>
            <div className='max-w-[1400px] mx-auto'>
                <h1 className='mx-auto text-center font-bold text-2xl border border-black h-20 flex items-center justify-center pt-5 bg-black text-white md:text-4xl'>
                {coin.image ? <img src={coin.image.small} alt='' /> : null}{coin.name}
                </h1>

                <CoinInfos className="mt-[40px]"  coin={params.coinId}/>

                <div className=' border border-black p-3 bg-black '>
                    <div className=''>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info text-white '>
                        <div className='coin-heading'>
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}

                        </div>
                        <div className='coin-price text-3xl font-bold'>
                            {coin.market_data?.current_price ? <h1>₹{coin.market_data.current_price.inr.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>
                <div className='w-full mt-10  '>
                    <table className='w-full'>
                        <thead className='text-white'>
                            <tr >
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='mt-10 text-white bg-black p-3'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>₹{coin.market_data.low_24h.inr.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>₹{coin.market_data.high_24h.inr.toLocaleString()}</p> : null}                            </div>

                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>₹{coin.market_data.market_cap.inr.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='content pb-2 w-5/6 mx-auto mt-10'>
                    <div className='about '>
                        <h3>About</h3>
                        <p className='text-justify' dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>

                        </p>

                    </div>
                </div>
                

            </div>
        </div>
    )
}
