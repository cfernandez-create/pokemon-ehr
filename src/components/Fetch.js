import axios from 'axios';

export const fetchAdmitData = (setAdmitData) => {
  axios.get('http://localhost:3500/admitdata')
    .then(response => {
      setAdmitData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};