import axios from 'axios'

const updateAdmitHP = async (_id, newHP, baseURL) => {
    try {
      const response = await axios.patch(`${baseURL}/update/${_id}`, 
      { hp: newHP });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('An error occurred while updating HP:', error);
      throw error;
    }
  };

  const handleUpdateData = (_id) => {
    updateAdmitHP(_id)
      .then(handleUpdateSuccess)
      .catch(handleUpdateError);
  };

  const handleUpdateSuccess = (data, admitData, setAdmitData) => {
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

  export {
    updateAdmitHP, 
    handleUpdateData, 
    handleUpdateSuccess, 
    handleUpdateError}