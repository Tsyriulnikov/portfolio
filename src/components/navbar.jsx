import React, {useState} from "react";
import logo from '../assets/img/logo.png'
import moon from '../assets/img/moon.png'


export const Navbar = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)

    const body = document.querySelector("body")
    // const hamburger = document.querySelector("#hamburger")
    // const menu = document.querySelector("#menu")
    // const hLinks = document.querySelectorAll("#hLink")

    const handleHamburgerMenu = () => {
        setIsHamburgerActive(!isHamburgerActive)
    }

    // hLinks.forEach(link => {
    //     link.addEventListener("click", () => {
    //         // menu.classList.toggle("hidden")
    //         // hamburger.classList.toggle("bg-white")
    //     })
    // })
    const handleTheme = () => {
        body.classList.toggle("dark")
    }

    return (
        <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
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
                    <li className="hover:text-gray-500">
                        <a href="#">homepage</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#about">about me</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#services">services</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#works">works</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#contact">contact</a>
                    </li>
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
                    <div className="w-6 h-0.5 bg-black"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                </div>
                <ul
                    id="menu"
                    className={isHamburgerActive ? "bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center" :
                        "hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"}
                >
                    <li>
                        <a id="hLink" href="#">homepage</a>
                    </li>
                    <li>
                        <a id="hLink" href="#about">about me</a>
                    </li>
                    <li>
                        <a id="hLink" href="#services">services</a>
                    </li>
                    <li>
                        <a id="hLink" href="#works">works</a>
                    </li>
                    <li>
                        <a id="hLink" href="#contact">contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}