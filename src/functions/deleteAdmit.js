import axios from 'axios'

const deleteAdmit = (_id, baseURL) => {
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

  export {
    deleteAdmit,
    handleDeleteAdmitData,
    handleDeleteSuccess,
    handleDeleteError
  }