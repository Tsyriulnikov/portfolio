import React from 'react'
import {About} from "./components/about";
import {Home} from "./components/home";
import {Navbar} from "./components/navbar";
import {Services} from "./components/services";
import {Works} from "./components/works";
import {Contact} from "./components/contact";
import {Footer} from "./components/footer";

function App() {
    return (
        // <div className='h-48 max-h-fit bg-amber-600'>
        <div className='h-screen'>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
