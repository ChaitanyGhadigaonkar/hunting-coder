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
        <div className={`Navbar py-8 flex items-center justify-center gap-4 ${open ? "flex-col pt-6 h-56": ""}`} >
            <div className="Navbar__logo">
                <h1 className="logo flex-1 text-lg font-bold px-2 ">Hunting Coder</h1>
            </div>
            <div ref={ref} className={`routes flex-1 flex items-center justify-end gap-4 px-5 ${open ? "flex-col ": ""}`}>
                <Link href={"/"} className='text-base '>Home</Link>
                <Link href={"/blogs"} className='text-base'>Blogs</Link>
                <Link href={"/about"} className='text-base'>About us</Link>
                <Link href={"/contact"} className='text-base'>Contact us</Link>
            </div>
            <div className={`hamburger absolute right-6 top-6 text-2xl cursor-pointer`} onClick={handleToggle}>
                    {!open ? <GiHamburgerMenu/>: <FaRegWindowClose/>}
            </div>
        </div>

    )
}

export default Navbar
