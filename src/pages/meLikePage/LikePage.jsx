import React from "react";
import MainNavBar from "../../components/mainNavBar/MainNavBar";
import './style.scss'

function LikePage(){

    return(
        <>
       <div className="">
            <div className="">
                люди которые лайкнули менея
                <MainNavBar active={"likeme"}/>
            </div>
        </div>
        </>
    )
}
export default LikePage