import { React, useState } from "react";
import { SideNavData } from "./SideNavData";
import {
  handleDeleteSuccess,
  handleDeleteError,
  deleteAdmit,
} from "../functions/deleteAdmit";
import {
  updateAdmitHP,
  handleUpdateSuccess,
  handleUpdateError,
} from "../functions/updateAdmitHP";
import {
  updateAdmitStatus,
  handleUpdateStatusSuccess,
  handleUpdateStatusError
} from "../functions/updateAdmitStatus"
import { baseURL } from "../utils/constant";



function TopNav(props) {
  const [admitData, setAdmitData] = useState([]);
  const { handleOpenPopup, selectedCardId } = props;

  const handleDischargeClick = () => {
    console.log("DISCHARGE icon clicked");
    deleteAdmit(selectedCardId, baseURL)
      .then(handleDeleteSuccess)
      .catch(handleDeleteError);
  };

  const handleUpdateHPClick = () => {
    console.log("HP icon clicked");
    const newHP = 100;
    updateAdmitHP(selectedCardId, newHP, baseURL)
      .then((data) => handleUpdateSuccess(data, admitData, setAdmitData))
      .catch(handleUpdateError);
  };

  const handleUpdateStatusClick = () => {
    console.log("Status icon clicked");
    const newStatus = '';
    updateAdmitStatus(selectedCardId, newStatus, baseURL)
      .then((data) => handleUpdateStatusSuccess(data, admitData, setAdmitData))
      .catch(handleUpdateStatusError)
  };

  const handleIconClick = (title) => {
    if (title === "ADMIT") {
      handleOpenPopup();
    } else if (title === "DISCHARGE") {
      handleDischargeClick();
    } else if (title === "MAX POTION") {
      handleUpdateHPClick();
    } else if (title === "HEAL STATUS") {
      handleUpdateStatusClick();
    }
  };

  return (
    <div className="top-nav-container">
      <ul className="top-nav-list">
        {SideNavData.map((val, key) => (
          <li
            key={key}
            className={
              val.title === "ADMIT"
                ? "row admit-item"
                : val.title === "DISCHARGE"
                ? "row discharge-item"
                : val.title === "DOCUMENT"
                ? "row document-item"
                : val.title === "HISTORY"
                ? "row history-item"
                : "row"
            }
          >
            <div onClick={() => handleIconClick(val.title)}>{val.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNav;
