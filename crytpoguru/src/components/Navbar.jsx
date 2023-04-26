import React from 'react'
import { LogoIcons } from '../icons/icons'

const Navbar = () => {
    return (
        <div className='bg-gray-800 text-white h-14 flex items-center'>
            <div className='wrapper-container w-full'>
                <div className='flex items-center gap cursor-pointer'>
                    <LogoIcons />
                    <p className='text-yellow-400 font-semibold'><span className='text-green-500'>CRYPTO</span> GURU</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
