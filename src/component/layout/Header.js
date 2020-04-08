import React from 'react';
import logo from '../../assets/img/logo.png'
const Header = () => {
  return (
    <header className="header-area">
      <div className="top-header-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="top-header-content d-flex align-items-center justify-content-between">
                <div className="logo">
                  <a href="index.html"><img src={logo} alt="logo"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};
export default Header;
