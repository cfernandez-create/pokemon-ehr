import axios from 'axios';

export const fetchAdmitData = (setAdmitData) => {
  axios.get('https://my-json-server.typicode.com/cfernandez-create/api/admitdata')
    .then(response => {
      setAdmitData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};