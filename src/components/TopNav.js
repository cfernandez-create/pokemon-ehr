import React from 'react';
import { SideNavData } from './SideNavData';


function TopNav() {

  return (
    <div className="top-nav-container">
      <ul className="top-nav-list">
        {SideNavData.map((val, key) => (
          <li
            key={key}
            className={val.title === 'ADMIT' ? 'row admit-item' 
            : val.title === 'DISCHARGE' ? 'row discharge-item' 
            : 'row'}>
            <div>{val.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNav;