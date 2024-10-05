import React from 'react'
import CountDown from './components/CountDown'
import logo from "./assets/logo.svg"
import ModalBox from './components/Modal'
import Services from './components/Services'
const ComingSoon = () => {

    return (
        <div className='w-full flex flex-col items-center bg_image'>
            <img src={logo} alt="" className='w-12 m-2 max-md:w-16 pt-[68px]' />
            <div className="w-full h-full min-h-screen flex flex-col justify-start items-center mt-[7rem] overflow-hidden z-10">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="text-center text-[#2a2a2a] text-[1.5rem] font-bold uppercase"><b>Going live in</b></h1>
                    <div className='w-full'>
                        <CountDown />
                    </div>
                    <p className='text-[#2a2a2a] text-center font-[neu-medium] text-[40px] max-md:text-[30px] tracking-wide font-[800] mt-4'>We are <span className='text-[#004c4c] leading-[39px] font-[neu-black]'>almost</span> there!!!</p>
                    <div className='z-[999] hover: cursor-pointer'>
                        <ModalBox />
                    </div>
                </div>
            </div>
            <div className='bg-transparent w-screen'>
                <Services />
            </div>
            <footer>
                <p className='text-center text-[#004c4c] leading-[39px] font-[neu-thin] uppercase text-sm'>
                    &copy; 2024 Assets Roster. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default ComingSoon