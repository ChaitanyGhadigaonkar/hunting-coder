"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaRegWindowClose} from "react-icons/fa"

const Navbar = () => {
    const ref = useRef();

    const [open, setOpen] = useState(false);

    const handleToggle=()=>{
        setOpen(prev=>!prev)
    }

    return (
        <div className={`Navbar relative overflow-hidden px-2 py-6 flex items-center justify-center flex-col gap-4 lg:flex-row ${open ? "max-h-fit": ""} `} >
            <div className="Navbar__logo self-start">
                <Link className="logo flex-1 text-lg font-bold px-2 " href="/">Hunting Coder</Link>
            </div>
            <div ref={ref} className={`routes flex-1 flex items-center justify-end gap-4 px-5 flex-col transition-transform  duration-300 lg:flex-row lg:translate-x-0 lg:gap-8 ${open ? " ": "translate-x-[500px]"} `}>
                <Link href={"/"} className='text-base font-semibold lg:text-lg '>Home</Link>
                <Link href={"/blogs"} className='text-base font-semibold lg:text-lg '>Blogs</Link>
                <Link href={"/about"} className='text-base font-semibold lg:text-lg '>About us</Link>
                <Link href={"/contact"} className='text-base font-semibold lg:text-lg '>Contact us</Link>
            </div>
            <div className={`hamburger absolute right-6 top-6 text-2xl cursor-pointer overflow-hidden lg:hidden`} onClick={handleToggle}>
                    {!open ? <GiHamburgerMenu/>: <FaRegWindowClose/>}
            </div>
        </div>

    )
}

export default Navbar
