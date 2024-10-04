import { Link, useLocation } from "@remix-run/react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from 'react';

export default function Header() {
    const location = useLocation();
    const [isDropDown, setIsDropDown] = useState(false);

    // Define your links with hrefs only
    const links = [
        { title: "Home", href: "/" },
        { title: "Services", href: "/packages" },
        { title: "FAQ", href: "/faq" },
        { title: "About Us", href: "/aboutus" }
    ];

    return (
        <div className="main-container">
            <div className="kontainer">
                <div className="item">
                    <span className="text-xl font-black text-black">Safari</span>
                </div>
            </div>

            <div className="flex px-4 xl:px-12 pt-5">
                <ul className="glassy lg:flex flex-row gap-2 hidden md:gap-4 px-4 py-[10px] text-sm md:text-base">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className={`hover:cursor-pointer px-2 py-[5px] rounded-2xl text-lg whitespace-nowrap ${
                                location.pathname === link.href 
                                ? "bg-white border-2 border-[rgba(0, 0, 0, 0.18)] shadow-2xl text-black font-black" 
                                : "text-white font-semibold"
                            }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ul>

                <div className="flex lg:hidden px-8">
                    <div className="grassy px-4 py-[10]">
                        <HiMenuAlt1 onClick={() => setIsDropDown(!isDropDown)} className="text-2xl text-white" />
                    </div>
                    <ul
                        className={`glassy absolute right-8 top-20 flex flex-col gap-2 md:gap-4 px-5 py-5 text-sm md:text-base transition-all duration-300 
                        transform ${isDropDown ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} origin-top`}
                        style={{ transformOrigin: 'top' }}>
                        {links.map((link, index) => (
                            <li key={index} className={`${location.pathname === link.href ? "bg-white rounded-2xl text-black py-[10px]" : "text-white"} px-4 hover:cursor-pointer font-black`}>
                                <Link to={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
