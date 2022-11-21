import React from 'react'
import {servicesText, skills} from "../common/content-eng";
export const Services = () => {

    return (
        <div id="services" className="dark:bg-slate-900 py-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 items-center">
                    {/*<h1 className="text-indigo-600 font-bold">SERVICES</h1>*/}
                    {/*<h1 className="text-3xl dark:text-white">What do I offer?</h1>*/}
                    <p className="w-1/2 text-center text-gray-400">
                        {servicesText}
                    </p>
                </div>

                <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                    {skills.map((item) => {
                        return (
                            <div key={item.id}
                                 className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
                                <img className="w-10" src={item.tech} alt="HTML icon"/>
                                <h1 className="font-medium text-lg dark:text-white">{item.title}</h1>
                                <p className="text-gray-400">
                                    {item.descript}
                                </p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
