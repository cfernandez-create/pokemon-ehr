import React, { useState, useEffect } from 'react';
import Pokecard from './Pokecard';
import Header from './Header';
import SideImage from './SideImage';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Popup from './Popup';
import axios from 'axios';
import { baseURL } from "../utils/constant";

export default function Main() {
  const [openPopup, setOpenPopup] = useState(false);
  const [admitData, setAdmitData] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/get`);
        console.log(response.data);
        setAdmitData(response.data);
      } catch (error) {
        console.error('An error occurred while fetching the data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const deleteAdmit = (_id) => {
    return axios.delete(`${baseURL}/delete/${_id}`).then((res) => {
      console.log(res);
      return res.data;
    });
  };
  const handleDeleteAdmitData = (_id) => {
    deleteAdmit(_id)
      .then(handleDeleteSuccess)
      .catch(handleDeleteError);
  };
  const handleDeleteSuccess = (data) => {
    console.log('Record deleted:', data);
    window.location.reload();
  };
  const handleDeleteError = (error) => {
    console.error('An error occurred while deleting:', error);
  };

  const updateAdmitHP = async (_id, newHP) => {
    try {
      const response = await axios.patch(`${baseURL}/update/${_id}`, { hp: newHP });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('An error occurred while updating HP:', error);
      throw error;
    }
  };
  
  const updateAdmitStatus = async (_id, newStatus) => {
    try {
      const response = await axios.patch(`${baseURL}/update/${_id}`, { status: newStatus });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('An error occurred while updating the status:', error);
      throw error;
    }
  };

  const handleUpdateData = (_id) => {
    const newHP = 100;
    updateAdmitHP(_id, newHP)
      .then(handleUpdateSuccess)
      .catch(handleUpdateError);
  };

  const handleUpdateSuccess = (data) => {
    console.log('HP updated:', data);
    window.location.reload();
    const updatedAdmitData = admitData.map((item) => {
      if (item._id === data._id) {
        return { ...item, hp: data.hp };
      }
      return item;
    });
    setAdmitData(updatedAdmitData);
  };
  const handleUpdateError = (error) => {
    console.error('An error occurred while updating HP:', error);
  };


  const handleUpdateStatus = (_id) => {
    const newStatus = '';
    updateAdmitStatus(_id, newStatus)
      .then(handleUpdateStatusSuccess)
      .catch(handleUpdateStatusError);
  };
  const handleUpdateStatusSuccess = (data) => {
    console.log('Status updated:', data);
    window.location.reload();
    const updatedStatusAdmitData = admitData.map((item) => {
      if (item._id === data._id) {
        return { ...item, status: data.status };
      }
      return item;
    });
    setAdmitData(updatedStatusAdmitData);
  };
  const handleUpdateStatusError = (error) => {
    console.error('An error occurred while updating the status:', error);
  };

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleCardClick = (id, data) => {
    setSelectedCardId(id);
    setSelectedCardData(data);
    console.log('Selected card ID:', id);
  };

  if (admitData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Main">
      <TopNav
        handleOpenPopup={handleOpenPopup}
        handleUpdateData={handleUpdateData}
        handleUpdateStatus={handleUpdateStatus}
        handleDeleteAdmitData={handleDeleteAdmitData}
        selectedCardId={selectedCardId}
      />
       <SideNav
        handleOpenPopup={handleOpenPopup}
        handleUpdateData={handleUpdateData}
        handleUpdateStatus={handleUpdateStatus}
        handleDeleteAdmitData={handleDeleteAdmitData}
        selectedCardId={selectedCardId}
      />
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} handleClosePopup={handleClosePopup} />
      <div className="main-container">
        <div className="main-top-bar">
          <div className="main-name">
            <p>Pokemon</p>
          </div>
          <div className="main-hp-text">
            <p>HP</p>
          </div>
          <div className="main-status-text">
            <p>Status</p>
          </div>
        </div>

        <div className="pokemon-container">
          {admitData.map((item, index) => (
            <Pokecard
              setAdmitData={item}
              key={item._id}
              index={item._id}
              handleCardClick={() => handleCardClick(item._id, item)}
            />
          ))}
        </div>

        {selectedCardId !== null && (
          <Header
            selectedCardId={selectedCardId}
            admitData={admitData}
            selectedCardData={selectedCardData}
          />
        )}

        {selectedCardId !== null && (
          <SideImage
            selectedCardId={selectedCardId}
            admitData={admitData}
          />
        )}
      </div>
    </div>
  );
}
