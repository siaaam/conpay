import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className="menu container">
        <div className="logo">
          <div className="logo_img">
            <img src="img/logo.png" alt="logo" />
          </div>
        </div>
        <div className="links">
          <ul className="link">
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Balance</a>
            </li>
            <li>
              <a href="#">Items</a>
            </li>
            <li>
              <a href="#">Networks</a>
            </li>
            <li>
              <a href="#">Faan Services</a>
            </li>
          </ul>
          <div className="icon">
            <img src="img/notification.png" alt="notification" />
            <img src="img/notification2.png" alt="notification" />
          </div>
        </div>
      </div>
      <div className="blur_bg">
        <img src="img/blur.png" alt="" />
      </div>
    </>
  );
};

export default NavBar;
