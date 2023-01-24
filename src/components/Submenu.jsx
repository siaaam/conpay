import React from 'react';

const Submenu = () => {
  return (
    <div className="submenu container">
      <h3 className="assets">Assets</h3>
      <div className="submenu_links">
        <ul className="submenu_link">
          <li>
            <a href="/">Tickets</a>
          </li>
          <li>
            <a href="/">Tickets</a>
          </li>
          <li>
            <a href="/">Arts</a>
          </li>
          <li>
            <a href="/">Items</a>
          </li>
          <li>
            <a href="/">Flights</a>
          </li>
        </ul>
        <div className="search_bar">
          <input type="text" placeholder="Search Assets Name" />
          <div className="search_img">
            <img src="img/search.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
