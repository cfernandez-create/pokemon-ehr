import axios from 'axios';

export const deleteAdmitData = (id, onSuccess, onError) => {
  axios
    .delete(`http://localhost:3001/delete/${id}`)
    .then(response => {
      onSuccess(response.data);
    })
    .catch(error => {
      onError(error);
    });
};