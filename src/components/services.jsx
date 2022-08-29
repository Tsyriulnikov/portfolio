import React from 'react'
import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import JavaScript from '../assets/img/javascript.png';
import ReactImg from '../assets/img/react.png';
import Node from '../assets/img/node.png';
import GitHub from '../assets/img/github.png';
import Typescript from '../assets/img/ts.png';
import Vue from '../assets/img/vue.png';

export const Services = () => {
    const skills = [
        {id: '1', tech: HTML, Title: 'HTML'},
        {id: '2', tech: CSS, Title: 'CSS'},
        {id: '3', tech: JavaScript, Title: 'JAVASCRIPT'},
        {id: '4', tech: ReactImg, Title: 'REACT.JS'},
        {id: '5', tech: GitHub, Title: 'GITHUB'},
        {id: '6', tech: Node, Title: 'NODE JS'},
        {id: '7', tech: Typescript, Title: 'TYPESCRIPT'},
        {id: '7', tech: Vue, Title: 'VUE.JS'},
        {id: '8', tech: ReactImg, Title: 'REACT NATIVE'},
    ]

    return (
        <div id="services" className="dark:bg-slate-900 py-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">SERVICES</h1>
                    <h1 className="text-3xl dark:text-white">What do I offer?</h1>
                    <p className="w-1/2 text-center text-gray-400">
                        My approach to website design is to create a website that
                        strengthens your company’s brand while ensuring ease of use and
                        simplicity for your audience.
                    </p>
                </div>

                <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                    {skills.map((item) => {
                        return (
                            <div key={item.id}
                                 className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">

                                <p className="text-gray-400">
                                    I specialize in creating interactive websites for individuals and
                                    small businesses.
                                </p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
