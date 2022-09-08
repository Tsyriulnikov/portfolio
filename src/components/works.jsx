import React from 'react'
import item from '../assets/img/item.png'
import {WorkCard} from "./WorkCard";

export const Works = () => {
    return (
        <div id="works" className="py-40 dark:bg-slate-900">
            <div className="container mx-auto">



                <div className="p-5 sm:p-0 flex flex-wrap justify-between">

                    <WorkCard/>

                    {/*<div*/}
                    {/*    className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"*/}
                    {/*>*/}
                    {/*    <img src={item} alt={''}/>*/}
                    {/*</div>*/}


                </div>
            </div>
        </div>

    )
}
