import React from 'react';
import { SideNavData } from './SideNavData';


function TopNav(props) {
  const { handleOpenPopup, handleDeleteAdmitData, selectedCardId, handleUpdateData, handleUpdateStatus } = props;
  

  const handleDischargeClick = () => {
    console.log('DISCHARGE icon clicked');
    handleDeleteAdmitData(selectedCardId);
  };

  const handleUpdateHPClick = () => {
    console.log('HP icon clicked');
    handleUpdateData(selectedCardId);
  };

  const handleUpdateStatusClick = () => {
    console.log('Status icon clicked');
    handleUpdateStatus(selectedCardId);
  };

  const handleIconClick = (title) => {
    if (title === 'ADMIT') {
      handleOpenPopup();
    } else if (title === 'DISCHARGE') {
      handleDischargeClick();
    } else if (title === 'MAX POTION') {
      handleUpdateHPClick();
    } else if (title === 'HEAL STATUS') {
      handleUpdateStatusClick();
    }
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
            <div onClick={()=> handleIconClick(val.title)}>{val.icon}</div>
          </li>
        ))}
      </ul>
     
      </div>
  );
}

export default TopNav;