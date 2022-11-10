import axios from 'axios';
import { useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { CryptoState } from '../context/CryptoContext';
import { Line } from "react-chartjs-2";
import moment from 'moment'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)






const Coininfo = (props) => {


 const[historicaldata,setHistoricaldata]=useState();
const[days,setDay]=useState(7);

  const url=`https://api.coingecko.com/api/v3/coins/${props.coin}/market_chart?vs_currency=inr&days=${days}`
  console.log(url)

   

   useEffect(()=>{
    axios.get(url).then((response)=>{
      setHistoricaldata(response.data.prices)
      // console.log(response.data.prices)
    }).catch((error)=>{
      console.log(error)
    })
  },[days])

  if(!historicaldata){
    return <div>
      Nothing to show
    </div> 
  }

  


  // console.log(historicaldata)
  const coinchartdata=historicaldata.map(value => ({x:value[0], y:value[1].toFixed(2)}));
  // console.log(coinchartdata)

  const options={
    responsive:true
  }

  const data={
    // labels:['1','20','2'],
    labels:coinchartdata.map(value => moment(value.x).format('MMM DD')),
    datasets:[
      {
        fill:true,
        label: (props.coin),
        // data:['10','2','90'],
        data: coinchartdata.map(val => val.y),
        pointRadius: 0,
        borderColor: '	rgb(138,43,226)',
      }
    ]
  }


 


  return (
      <div className='mt-5'>
    <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12 bg-black text-white">
      <Line options={options} data={data}/>
    </div>

    <div className='flex items-center justify-center my-[20px] flex-col mx-auto sm:flex-row w-5/6'>
        <button className='w-3/6 bg-slate-200 text-black h-9 rounded-md mt-2 sm:w-3/6 mx-2 md:w-1/6 hover:bg-purple-600 text-white' onClick={()=>{setDay(1)}}><span>Last 24 hours</span></button>
        <button className='w-3/6 bg-slate-200 text-black h-9 rounded-md mt-2 sm:w-3/6 mx-2 md:w-1/6 hover:bg-purple-600 text-white' onClick={()=>{setDay(30)}}><span>Last 30 days</span></button>
        <button className='w-3/6 bg-slate-200 text-black h-9 rounded-md mt-2 sm:w-3/6 mx-2 md:w-1/6 hover:bg-purple-600 text-white' onClick={()=>{setDay(90)}}><span>Last 90 days</span></button>
        <button className='w-3/6 bg-slate-200 text-black h-9 rounded-md mt-2 sm:w-3/6 mx-2 md:w-1/6 hover:bg-purple-600 text-white' onClick={()=>{setDay(365)}}><span>Last 1 year</span></button>

    </div>
    <div className='mt-1'></div>
    </div>
  )
}

export default Coininfo
