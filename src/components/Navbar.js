import React from 'react'
import {FaCoins} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import  { CryptoState } from '../context/CryptoContext';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {

  // const {currency,setCurrency}=CryptoState();
  // console.log(currency)



  return (
    <Link to="/">
      <div className='navbar flex justify-around center items-center h-25 pt-5 bg-black text-white pb-5'>

        <div className='flex'>
          <FaCoins className='icon mx-2 ' color="purple" size={28} />
          <h1 className='text-2xl font-bold '>Coin <span className='text-fuchsia-900 '>Search</span></h1>
        </div>

      </div>
    </Link>
  )
}
