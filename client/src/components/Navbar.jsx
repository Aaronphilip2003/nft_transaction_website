import React from "react";
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png'
import solid from '../../images/solid.gif'

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>

    )

}


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);


    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            {/* <img src={logo} alt="logo" className="w-20 cursor-pointer" /> */}
            {/* <img src={solid} className="w-15 h-12" /> */}
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                {/* <img src={logo} alt="logo" className="w-32 cursor-pointer " /> */}
                {/* <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                    {["NFTs", "Wallets"].map((item, index) => (
                        <NavbarItem key={item + index} title={item} />
                    ))}
                    <li className="bg-[#2952E3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[2546BD]">Login</li>
                </ul> */}
                <div className="flex relative">
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                        : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
                    {
                        toggleMenu && (
                            <ul
                                className="z-10 fixed top-0 -right-2 p-3 w-[70vww] h-screen shadow 2x1 md:hidden list-none
                                flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in 
                                "

                            >
                                <li className="text-xl w-full my-2">
                                    <AiOutlineClose onClick={() => setToggle(false)} />
                                </li>
                                {["Market", "Item", "Wallets"].map((item, index) => (
                                    <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
                                ))}
                            </ul>

                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;