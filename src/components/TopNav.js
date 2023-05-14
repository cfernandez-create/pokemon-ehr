import React, { useState } from 'react';
import {SideNavData} from './SideNavData';

function TopNav()
{
return (
<div className="top-nav-container">
    <ul className="top-nav-list">
       {SideNavData.map((val, key) => {
        return (
            <li key={key} className={val.title === "ADMIT" ? "row admit-item" : val.title === "DISCHARGE" ? "row discharge-item" : "row"} onClick={() => { window.location.pathname = val.link }}>
            <div>{val.icon}</div>
          
          </li>
        );
      })}
     </ul>
     </div>
    );
}

export default TopNav;