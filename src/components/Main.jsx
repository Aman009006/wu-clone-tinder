import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Main() {
  return (
    <div className="main">
     <div className="main__content">
        <div className="navbar__content">
          <Link to='/chat'>chat</Link>
            <div className="navbar__item">main</div>
            <div className="navbar__item">chat</div>
            <div className="navbar__item">who</div>
        </div>
     </div>
    </div>
  );
}

export default Main;
