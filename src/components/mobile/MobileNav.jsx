import React from 'react';

const MobileNav = () => {
  return (
    <div className="mobile_nav">
      <div className="status">
        <div className="time">
          <img src="img/time.png" alt="" />
        </div>
        <div className="status_bar">
          <div className="cell">
            <img src="img/cell.png" alt="" />
          </div>
          <div className="wifi">
            <img src="img/Wifi.png" alt="" />
          </div>
          <div className="battery">
            <img src="img/Battery.png" alt="" />
          </div>
        </div>
      </div>
      <div className="notification_bar">
        <h2>Your Assets</h2>
        <div className="icon">
          <img src="img/notification.png" alt="notification" />
          <img src="img/notification2.png" alt="notification" />
        </div>
      </div>
      <div className="blur_bg">
        <img src="img/blur.png" alt="" />
      </div>
    </div>
  );
};

export default MobileNav;
