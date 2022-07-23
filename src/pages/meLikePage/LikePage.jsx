import React from "react";
import { Link } from 'react-router-dom';
import MainNavBar from "../../components/mainNavBar/MainNavBar";
import './style.scss'

function LikePage(){

    return(
        <>
       <div className="">
            <div className="">
                люди которые лайкнули менея
                <MainNavBar/>
            </div>
        </div>
        </>
    )
}
export default LikePage