import React from 'react'

import logo from '../assets/img/clipart2703019.png'
import facebook from '../assets/img/github-logo.png'
import instagram from '../assets/img/instagram.png'
import linkedin from '../assets/img/linkedin-logo.png'


export const Footer = () => {
    return (
        <div className="w-full bg-gray-800">

                <span className="hidden md:block font-medium text-white"
                >© 2022 Maksim Tsyriulnikov</span
                >
                <div className="flex gap-2">
                    <img className="w-6 cursor-pointer" src={facebook} alt=""/>
                    <img className="w-6 cursor-pointer" src={instagram} alt=""/>
                    <img className="w-6 cursor-pointer" src={linkedin} alt=""/>
                </div>
            </div>
        </div>
    )
}
