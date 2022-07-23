import React from 'react';
import MainNavBar from './mainNavBar/MainNavBar';
import './style.scss';

function Main() {
  return (
    <div className="main">
     <div className="main__content">
       <MainNavBar/>
     </div>
    </div>
  );
}

export default Main;
