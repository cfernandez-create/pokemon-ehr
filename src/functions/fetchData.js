import axios from 'axios';


export const fetchData = async (baseURL, setAdmitData) => {
      try {
        const response = await axios.get(`${baseURL}/get`);
        console.log(response.data);
        setAdmitData(response.data);
      } catch (error) {
        console.error('An error occurred while fetching the data:', error);
      }
    };
  
   
