import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Main() {
  return (
    <div className="main">
     <div className="main__content">
        <div className="navbar__content">
          <Link to='/swips'>mainSwipe</Link>
          <Link to='/likeme'>likeme</Link>
          <Link to='/chat'>chat</Link>
          <Link to='/profile'>profile</Link>
        </div>
     </div>
    </div>
  );
}

export default Main;
