import axios from "axios";

const updateAdmitStatus = async (_id, newStatus, baseURL) => {
  try {
    const response = await axios.patch(`${baseURL}/update/${_id}`, 
    { status: newStatus });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("An error occurred while updating the status:", error);
    throw error;
  }
};

const handleUpdateStatus = (_id) => {
  updateAdmitStatus(_id)
    .then(handleUpdateStatusSuccess)
    .catch(handleUpdateStatusError);
};
const handleUpdateStatusSuccess = (data, admitData, setAdmitData) => {
  console.log("Status updated:", data);
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
  console.error("An error occurred while updating the status:", error);
};

export {
  updateAdmitStatus,
  handleUpdateStatus,
  handleUpdateStatusSuccess,
  handleUpdateStatusError,
};
