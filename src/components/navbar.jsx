import React, {useState} from "react";
import {Link} from 'react-scroll';
import logo from '../assets/img/clipart2703019.png'
import moon from '../assets/img/moon.png'

export const Navbar = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)
    const body = document.querySelector("body")
    const menuItem = [
        {id: '1', href: 'home', item: 'home'},
        {id: '2', href: 'about', item: 'about me'},
        {id: '3', href: 'services', item: 'services'},
        {id: '4', href: 'works', item: 'works'},
        {id: '5', href: 'contact', item: 'contact'},
    ]
    const handleHamburgerMenu = () => {
        setIsHamburgerActive(!isHamburgerActive)
    }
    const handleTheme = () => {
        body.classList.toggle("dark")
    }

    return (
        <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900 shadow-xl rounded-lg">
            <div className="container mx-auto py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-8" src={logo} alt=""/>
                    <span className="text-2xl font-bold text-indigo-900 dark:text-white"
                    >MaxTs</span
                    >
                </div>
                <ul
                    className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
                >
                    {menuItem.map(item => <li key={item.id} className="hover:text-gray-500">
                        <Link to={item.href} smooth={true} duration={500}>{item.item}</Link>
                    </li>)}
                </ul>
                <img
                    id="moon"
                    src={moon}
                    className="hidden md:block w-5 cursor-pointer"
                    alt=""
                    onClick={handleTheme}
                />
                <div id="hamburger"
                     className={isHamburgerActive ? "bg-white space-y-1 md:hidden cursor-pointer z-20" :
                         "space-y-1 md:hidden cursor-pointer z-20"}
                     onClick={handleHamburgerMenu}>

                </div>
                <ul
                    id="menu"
                    className={isHamburgerActive ? "bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center" :
                        "hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"}
                >
                    {menuItem.map(item => <li key={item.id}>
                        <Link id='hLink' to={item.href} onClick={handleHamburgerMenu}  smooth={true} duration={500}>{item.item}</Link>
                    </li>)}
                </ul>
            </div>
        </nav>

    )
}
