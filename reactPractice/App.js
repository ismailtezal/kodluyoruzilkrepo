import axios from "axios";

const getData = async (userId) => {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const userData = await axios.get(`${API_URL}/users/${userId}`);
  const postData = await axios.get(`${API_URL}/posts?userId=${userId}`);

  const obj = {
    ...userData.data,
    posts: postData.data,
  };
  console.log(obj);
};

export default getData;
