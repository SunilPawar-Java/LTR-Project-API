import React, {useState} from 'react'
import SignUpButton from "../buttons/SignUpButton.jsx";
import LoginButton from "../buttons/LoginButton.jsx";
import {ChevronDown} from "lucide-react";
import { ChevronUp } from 'lucide-react';
import {Link} from "react-router-dom";

const LaptopNavBar = () => {
    const [serviceActive, setServiceActive] = useState(false);
    return (<>
        <div className='flex p-4 w-full justify-between items-center bg-white/80 backdrop-blur-2xl border border-white/20 fixed z-1 top-0'>
            <div className='flex flex-col gap-1 items-center text-white'>
                <h1 className='font-bold font-mono text-2xl text-black hover:cursor-pointer'>LTR</h1>
                <div className='flex pl-5 pr-5 text-black text-sm font-semibold items-center rounded-t-2xl gap-5'>
                    <Link className='hover:opacity-80 focus:underline' to="home">Home</Link>
                    <Link className='hover:opacity-80 focus:underline' to="products">Products</Link>
                    <div className='flex items-center hover:opacity-80'>
                        <Link className='hover:opacity-80 focus:underline'  to="sevices">Services</Link>
                        <p onClick={() => {
                            if (serviceActive) setServiceActive(false)
                            else setServiceActive(true)}}
                        >{
                            serviceActive && (<ChevronUp className='h-4 w-4 ml-1'/>) ||
                                serviceActive === false && (<ChevronDown className='h-4 w-4 ml-1'/>)
                            }
                        </p>
                    </div>
                    <Link className='hover:opacity-80 focus:underline' to="blogs">Blogs</Link>
                    <Link className='hover:opacity-80 focus:underline' to="about">About us</Link>
                    <Link className='hover:opacity-80 focus:underline' to="contact">Contact us</Link>

                </div>
            </div>
            <div className='flex gap-5 items-center text-white'>
                <SignUpButton/>
                <LoginButton/>
                <button>profile</button>
            </div>
        </div>

        { serviceActive && (
            <div className='p-5 flex flex-col items-center bg-white/70 backdrop-blur-lg shadow-lg fixed top-22 left-22 rounded
                            z-10'>
                <ul className='flex flex-col gap-4 text-sm'>
                    <Link to='Blouse_Stitching_url' className='hover:opacity-80 hover:underline'>Blouse Stitching</Link>
                    <Link to='Kurti_Stitching_url' className='hover:opacity-80 hover:underline'>Kurthi Stitching</Link>
                </ul>
            </div>
        )}

    </>);
}
export default LaptopNavBar
