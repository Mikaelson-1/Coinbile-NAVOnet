import React,{useState} from 'react'
import Button from './Button'
import image from '../assets/blockchain (1).png'
import {SiEthereum} from 'react-icons/si'
import { Link } from 'react-router-dom'

const Text = () => {
    
  return (
    <div className='sm:px-10  top sm:flex justify-between '>
        <div>
        <h1 className='mt-10 sm:text-[65px] text-[30px] text-white py-10 font-bold'>Send and receive Ethereum with Coinbile</h1>
        <p className='text-[#5f5f5f] sm:w-[89%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos eveniet laudantium placeat, magnam sapiente laboriosam, omnis sequi ullam, perferendis voluptate impedit sed.</p>

        <div className='py-5'>
        <Link to='/auth'><Button 
        title='Get Started'/></Link>

       

        </div>
        </div>
        
        <img src={image} className='text-white sm:mt-0 mt-20 h-[10%]' />
        
        </div>
  )
}

export default Text