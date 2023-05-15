import React, { useState } from 'react';
import { SideNavData } from './SideNavData';
import Admit from './Admit';

function TopNav() {
  const [showAdmit, setShowAdmit] = useState(false);

  const handleAdmitClick = () => {
    setShowAdmit(true);
  };

  const handleCloseAdmit = () => {
    setShowAdmit(false);
  };

  return (
    <div className="top-nav-container">
      <ul className="top-nav-list">
        {SideNavData.map((val, key) => (
          <li
            key={key}
            className={val.title === 'ADMIT' ? 'row admit-item' : val.title === 'DISCHARGE' ? 'row discharge-item' : 'row'}
            onClick={() => {
              if (val.title === 'ADMIT') {
                handleAdmitClick();
              } else {
                window.location.pathname = val.link;
              }
            }}
          >
            <div>{val.icon}</div>
          </li>
        ))}
    
      </ul>
     
    </div>
  );
}

export default TopNav;
