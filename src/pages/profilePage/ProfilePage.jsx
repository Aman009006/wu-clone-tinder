import React from "react";
import { Link } from 'react-router-dom';
import MainNavBar from "../../components/mainNavBar/MainNavBar";
import './style.scss'

function ProfilePage(){

    return(
        <>
       <div className="">
            <div className="">
                мой профиль
               <MainNavBar/>
            </div>
        </div>
        </>
    )
}
export default ProfilePage