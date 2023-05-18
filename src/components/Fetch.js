import axios from 'axios';

export const fetchAdmitData = (setAdmitData) => {
  axios.get('http://localhost:3001/admitdata')
    .then(response => {
      setAdmitData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};