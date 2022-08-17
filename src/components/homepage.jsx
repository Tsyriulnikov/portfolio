import React from "react";
import {Navbar} from "./navbar";

export const Homepage = () => {
    return (<div
            className='h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden'>
            <Navbar/>
        </div>
    )
}