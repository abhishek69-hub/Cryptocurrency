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




  const url=`https://api.coingecko.com/api/v3/coins/${props.coin}/market_chart?vs_currency=inr&days=365`
  console.log(url)

   const[historicaldata,setHistoricaldata]=useState();
   const[days,setDay]=useState(1);

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
  const coinchartdata=historicaldata.map(value => ({x:value[0], y:value[0].toFixed(2)}));
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
        // data:['10','2','90'],
        data: coinchartdata.map(val => val.y),
        borderColor: '	rgb(230,230,250)',
      }
    ]
  }


 


  return (
    <div className="bg-white w-9/12 ">
      <Line options={options} data={data}/>
    </div>
  )
}

export default Coininfo
