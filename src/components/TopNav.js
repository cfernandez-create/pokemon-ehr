import React from 'react';
import { SideNavData } from './SideNavData';



function TopNav(props) {
  const { handleOpenPopup, handleDeleteAdmitData, selectedCardId={selectedCardId} } = props;
  

  const handleDischargeClick = () => {
    console.log('DISCHARGE icon clicked');
    handleDeleteAdmitData(selectedCardId);
  };

  return (
 
    <div className="top-nav-container">
      <ul className="top-nav-list">
        {SideNavData.map((val, key) => (
          <li
            key={key}
            className={val.title === 'ADMIT' ? 'row admit-item' 
            : val.title === 'DISCHARGE' ? 'row discharge-item' 
            : 'row'}>
            <div onClick={val.title === 'ADMIT' ? handleOpenPopup : handleDischargeClick}>{val.icon}</div>
          </li>
        ))}
      </ul>
     
      </div>
  );
}

export default TopNav;