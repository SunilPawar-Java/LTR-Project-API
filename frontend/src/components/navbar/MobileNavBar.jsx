import React, {useState} from 'react'
import { TextAlignJustify } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { X } from 'lucide-react';
import SignUpButton from "../buttons/SignUpButton.jsx";
import LoginButton from "../buttons/LoginButton.jsx";

const MobileNavBar = () => {
    const [navbarActive, setNavbarActive] = useState(false);
    const [serviceActive, setServiceActive] = useState(false);
    return (
        <>
            <div className='w-screen flex justify-between bg-white/80 backdrop-blur-2xl z-1 items-center p-5 fixed top-0'>
                <div className='flex gap-3 justify-between'>
                    {navbarActive === false && (
                        <TextAlignJustify onClick={() => {
                            if (navbarActive === false)
                                setNavbarActive(true)
                        }} className=''
                        />) || navbarActive && (
                        <X onClick={()=>{
                                if (navbarActive) {
                                    setNavbarActive(false)
                                    setServiceActive(false)
                                }
                            }}
                           className=''
                        />)}

                </div>
                <h2 className='font-bold font-mono'>LTR</h2>
                <div className='flex gap-3'>
                    <SignUpButton/>
                    <LoginButton/>

                </div>
            </div>
            { navbarActive && (
                <div className='pl-5 border-t w-screen fixed top-15 bg-white/80 backdrop-blur-2xl shadow-2xl z-10'>
                <div className='text-[#020617] text-sm  p-2 flex flex-col gap-3'>
                    <h5>Home</h5>
                    <h5 onClick={() => {
                        if (serviceActive)
                            setServiceActive(false)
                        else
                            setServiceActive(true)

                    }}
                        className='flex gap-1 items-center'
                    >Services {serviceActive && (
                        <ChevronDown className='h-4 w-4'/>) || serviceActive === false && (
                        <ChevronUp className='h-4 w-4'/>)}</h5>
                    {serviceActive && (
                        <div className=''>
                            <ul className='pl-2 flex flex-col gap-2'>
                                <li>Blouse Stitching</li>
                                <li>Kurti Stitching</li>
                            </ul>
                        </div>
                    )}
                    <h5>Blogs</h5>
                    <h5>About Us</h5>
                    <h5>Contact</h5>
                </div>
            </div>)}
        </>
    );
}
export default MobileNavBar
