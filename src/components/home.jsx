import React from "react";
import man from '../assets/img/Maksim_Homepage.png'


export const Home = () => {
    return (
        <div id="home"
            className='h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden'>
            <img
                className="absolute bottom-0 right-0 lg:left-0 mx-auto h-4/5 object-cover"
                src={man}
                alt=""
            />
            <div
                className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"
            > </div>
            <div
                className="hover:animate-spin absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold"
            >

                <span className="text-gray-600 animate-pulse">Front-end</span>
                <p><span className="text-gray-600 animate-pulse">developer</span></p>
            </div>


            <div
                className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3"
            >
                <h1 className="text-4xl font-bold text-indigo-900"> Greetings, I'm Maksim Tsyriulnikov</h1>
                <p className="text-gray-400">
                    I am a front-end developer with experience in creating SPA using React, Redux, TypeScript,
                    JavaScript, SCSS, HTML with future plans to study AngularJS.
                    I like mobile app development and currently improving my skills
                    in React Native.
                    I spend my spare-time learning English and Spanish.
                    Open for your suggestions!
                </p>
                <a
                    className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
                    href="#contact"
                >Hire Me</a
                >
            </div>


        </div>

    )
}