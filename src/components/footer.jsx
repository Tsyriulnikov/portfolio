import React from 'react'

import logo from '../assets/img/ship.png'
import linkedIn from "../assets/img/linkedin-logo.png";
import gitHub from "../assets/img/github-logo.png";


export const Footer = () => {
    return (
        <div className="w-full bg-gray-800">
            <div className="container mx-auto py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-12" src={logo} alt=""/>
                    <span className="text-2xl font-bold text-white">MaxTs</span>
                </div>
                <span className="hidden md:block font-medium text-white"
                >© 2022 Maksim Tsyriulnikov</span
                >
                <div className="w-16 flex gap-2">
                    <div className="w-full">
                        <a href='https://www.linkedin.com/in/maksim-tsyriulnikov-a36115161/' target='_blank'
                           rel="noreferrer">
                            <img
                                src={linkedIn}
                                className="w-full cursor-pointer "
                                alt="LinkedIn"
                            />
                        </a>
                    </div>
                    <div className="w-full">
                        <a href='https://github.com/Tsyriulnikov' target='_blank' rel="noreferrer">
                            <img
                                src={gitHub}
                                className="w-full cursor-pointer"
                                alt="gitHub"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
