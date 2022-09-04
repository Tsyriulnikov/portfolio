import React from 'react'

import logo from '../assets/img/clipart2703019.png'
import facebook from '../assets/img/github-logo.png'
import instagram from '../assets/img/instagram.png'
import linkedin from '../assets/img/linkedin-logo.png'


export const Footer = () => {
    return (
        <div className="w-full bg-gray-800">
            <div className="container mx-auto py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-8" src={logo} alt=""/>
                    <span className="text-2xl font-bold text-white">MaxTs</span>
                </div>
                <span className="hidden md:block font-medium text-white"
                >© 2022 Maksim Tsyriulnikov</span
                >
                <div className="flex gap-2">

                </div>
            </div>
        </div>
    )
}
