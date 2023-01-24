import React from 'react';

const Tab = () => {
  return (
    <div className="tab">
      <ul className="tab_links">
        <li>
          <a href="/">Tickets</a>
        </li>
        <li className="active">
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
    </div>
  );
};

export default Tab;
