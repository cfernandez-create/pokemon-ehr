import React, { useState } from 'react';
import {SideNavData} from './SideNavData';

function SideNav()
{
return (
<div className="side-nav-container">
    <ul className="side-nav-list">
       {SideNavData.map((val, key) => {
        return (
            <li key={key} className={val.title === "ADMIT" ? "row admit-item" : val.title === "DISCHARGE" ? "row discharge-item" : "row"} onClick={() => { window.location.pathname = val.link }}>
            <div>{val.icon}</div>
            <div>{val.title}</div>
          </li>
        );
      })}
     </ul>
     </div>
    );
}

export default SideNav;