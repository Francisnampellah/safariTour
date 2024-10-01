import { Link } from "@remix-run/react"
import { links as importedLinks } from "~/root"
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from 'react'


export default function Header() {

    const [isDropDown, setIsDropDown] = useState(false)


    const links = [
        { title: "Home", href: "/", state: true },
        { title: "Services", href: "/services", state: false },
        { title: "FAQ", href: "/faq", state: false },
        { title: "AboutUs", href: "/aboutus", state: false }
    ]

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
                        <Link key={index} to={link.href} className={`hover:cursor-pointer px-2 py-[5px] rounded-2xl  text-lg ${link.state ? "bg-white border-2 border-[rgba(0, 0, 0, 0.18)] shadow-2xl text-black font-black  " : "text-white font-semibold"} `}>{link.title}</Link>
                    ))}
                </ul>

                <div className="flex lg:hidden px-8">
                    <div className="grassy px-4 py-[10]">
                        <HiMenuAlt1 onClick={() => setIsDropDown(!isDropDown)} className="text-2xl text-white" />
                    </div>
                    <ul
                        className={`glassy $
                                 absolute right-8 top-20 flex flex-col gap-2 md:gap-4 px-5 py-5 text-sm md:text-base transition-all duration-300 
                                 transform ${isDropDown ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} origin-top`}
                        style={{ transformOrigin: 'top' }}>
                        {links.map((link, index) => (
                            <li key={index} className={`${link.state ? "bg-white rounded-2xl text-black  py-[10px]" : " text-white "} px-4  hover:cursor-pointer font-black `}>{link.title}</li>
                        ))}
                    </ul>
                </div>


            </div>

        </div>
    )
}
