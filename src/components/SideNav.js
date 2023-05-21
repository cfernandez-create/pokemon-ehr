import React from 'react';
import {SideNavData} from './SideNavData';

function SideNav(props) {
const { handleOpenPopup } = props;

const handleDischargeClick = () => {
  
  console.log('DISCHARGE icon clicked');

};

return (
<div className="side-nav-container">
    <ul className="side-nav-list">
       {SideNavData.map((val, key) => {
        return (
          <li
          key={key}
          className={val.title === 'ADMIT' ? 'row admit-item' 
          : val.title === 'DISCHARGE' ? 'row discharge-item' 
          : 'row'}>
          <div onClick={val.title === 'ADMIT' ? handleOpenPopup : handleDischargeClick}>{val.icon}{val.title}</div>
        </li>
        );
      })}
     </ul>
     </div>
    );
}

export default SideNav;