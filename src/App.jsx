import React from 'react'
import {Home} from "./components/home";
import {Navbar} from "./components/navbar";
import {Services} from "./components/services";
import {Works} from "./components/works";
import {Contact} from "./components/contact";
import {Footer} from "./components/footer";

function App() {
    return (

        <div className='h-screen'>
            <Navbar/>
            <Home/>
            <Services/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
