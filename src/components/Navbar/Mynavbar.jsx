import React from 'react';
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

import './Mynavbar.css'

const Mynavbar = () => {
    return (
        <>
        <div className="Nav">
            <Navbar/>
        </div>
        <div className="mobileNav">
<MobileNav/>
        </div>
        </>
    )
}

export default Mynavbar
