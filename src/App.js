import {About} from "./components/about";
import {Intro} from "./components/intro";
import React from 'react'
import {Navbar} from "./components/navbar";

function App() {
    return (
        // <div className='h-48 max-h-fit bg-amber-600'>
        <div>
            {/*<Navbar/>*/}
            <Intro/>
            {/*<About/>*/}
        </div>
    );
}

export default App;
