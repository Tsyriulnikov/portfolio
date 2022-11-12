import React from 'react'
import {WorkCard} from "./WorkCard";
import {projects, worksText} from "../common/content-eng";

export const Works = () => {
    return (
        <div id="works" className="py-40 dark:bg-slate-900">
            <div className="container mx-auto">

                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
                    <h1 className="text-3xl dark:text-white">Works & Projects</h1>
                    <p className="w-1/2 text-center text-gray-400">
                        {worksText}
                    </p>
                </div>

                <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                    {projects.map((item)=><WorkCard item={item}/>)}
                </div>
            </div>
        </div>

    )
}
