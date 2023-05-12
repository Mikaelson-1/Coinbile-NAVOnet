import React, { useState } from 'react'
import { Button } from './'
import { CiMenuFries } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div className=' sm:p-10  p-5 flex justify-between'>
            <h1 className=' text-[#fff] text-[30px]'>Coinbile</h1>

            <ul className='flex gap-5 text-white sm:flex hidden'>
                <li className='p-3 rounded-[100px] bg-[#121212]'>Products</li>
                <li className='p-3 rounded-[100px] bg-[#121212]'>Ranking</li>
                <li className='p-3 rounded-[100px] bg-[#121212]'>Solution</li>
            </ul>


            <div className='sm:flex hidden'>
                <Button
                    title='Get Started'
                />
            </div>

            <CiMenuFries className='sm:hidden text-white text-[25px]' onClick={() => setNavbar(true)} />


            <div className='p-10 absolute bg-none  text-white mt-10'>
                {navbar && (

                    <div className='border  fixed bg-none'>
                        <AiOutlineClose onClick={() => setNavbar(false)} />
                    </div>
                )}
            </div>

        </div>
    )
}

export default Navbar