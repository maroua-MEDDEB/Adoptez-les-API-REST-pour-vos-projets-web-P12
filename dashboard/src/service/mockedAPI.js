import axios from "axios";
const data = "/mock.json";
/**
Retrieves all data using a mocked API endpoint.*
@return {Promise} A promise that resolves with the data response.
*/
export const getAllDataMocked = () => {
  return axios.get(data).then((response) => response.data);
};
