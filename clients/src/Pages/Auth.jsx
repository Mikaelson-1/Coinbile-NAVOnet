import React,{useState} from 'react'
import { Input } from '../components'

const Auth = () => {
  return (
    <div className='bg-black h-[100vh]'>
        <div className='sm:flex justify-between text-white'>

            <div className='sm:p-20 p-5 '> 
            <h1 className='text-[40px] mt-20'>Create new account</h1>
            <p className='text-[#5f5f5f]'>Create your own accounts</p>
            <Input placeholder='Enter name'/>
            <Input placeholder='Enter name'/>
            <Input placeholder='Enter name'/>
            <Input placeholder='Enter name'/>
            


<div className='flex w-[100%] justify-between mt-10'>
            <button className='bg-[blue] px-10 py-3 rounded-[100px]'>Submit</button>
            <button className='bg-[#121212] px-10 py-3 rounded-[100px]'>Submit</button>
            </div>
            </div>
          
        </div>
    </div>
  )
}

export default Auth