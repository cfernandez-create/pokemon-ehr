import React from 'react';
import { SideNavData } from './SideNavData';

function SideNav(props) {
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
    <div className="side-nav-container">
      <ul className="side-nav-list">
        {SideNavData.map((val, key) => (
          <li
            key={key}
            className={
              val.title === 'ADMIT'
                ? 'column admit-item'
                : val.title === 'DISCHARGE'
                ? 'column discharge-item'
                : val.title === 'DOCUMENT'
                ? 'column document-item'
                : val.title === 'HISTORY'
                ? 'column history-item'
                : 'column'
            }
          >
            <div onClick={() => handleIconClick(val.title)}>{val.icon}
            <span className="side-nav-title">{val.title}</span></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
