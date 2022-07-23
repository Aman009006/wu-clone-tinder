import React from "react";
import './style.scss'
import { Link } from 'react-router-dom';


function MainNavBar(){
    return(
        <>
        <div className="navbar__content">
            <Link to='/swips'>mainSwipe</Link>
            <Link to='/likeme'>likeme</Link>
            <Link to='/chat'>chat</Link>
            <Link to='/profile'>profile</Link>
        </div>
        </>
    )
}
export default MainNavBar