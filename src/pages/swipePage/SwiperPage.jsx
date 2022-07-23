import React from "react";
import MainNavBar from "../../components/mainNavBar/MainNavBar";
import './style.scss'


function SwiperPage(){

    return(
        <>
       <div className="">
            <div className="">
                тут ты ставишь лайк или дезлайк
                <MainNavBar active={'swips'}/>
            </div>
        </div>
        </>
    )
}
export default SwiperPage