import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { memo } from "react";


const Header = () =>{


    const [open, setOpen] = useState(false);

    const toggleBtn = () =>{
        setOpen(!open);
    }


    return(
        <header className="relative bg-gradient-to-r from-[#1f1f1f] via-[#262626] to-[#2d2d2d] text-white py-5 ">
            <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-semibold font-urbanist">
                    <NavLink to="/">GeoVista</NavLink>
                </h1>
                <nav className="hidden md:flex space-x-2 text-sm">
                    <NavLink to="/" className="px-3 py-2 hover:bg-gray-700 rounded transition">Home</NavLink>
                    <NavLink to="/about" className="px-3 py-2 hover:bg-gray-700 rounded transition">About</NavLink>
                    <NavLink to="/country" className="px-3 py-2 hover:bg-gray-700 rounded transition">Country</NavLink>
                    <NavLink to="/contact" className="px-3 py-2 hover:bg-gray-700 rounded transition">Contact</NavLink>
                </nav>
                <button onClick={toggleBtn} className="md:hidden text-2xl cursor-pointer" aria-label="Toggle Menu" aria-expanded={open}>
                    <GiHamburgerMenu size={24} />
                </button>
            </div>
            {open && (
                <div className="md:hidden absolute  top-full left-0 w-full bg-gradient-to-b from-black/70 to-black/40 backdrop-blur-lg border-t border-white/10 shadow-lg flex flex-col gap-4   items-center py-6 z-50">
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
                    <NavLink to="/country" onClick={() => setOpen(false)}>Country</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
                </div>
            )}

        </header>
    )
}
        

export default memo(Header);


