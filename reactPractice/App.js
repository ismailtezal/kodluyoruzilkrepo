import axios from "axios";

const getData = async (userId) => {
  const { data: userData } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: userPostData } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  console.log("USER:", userData);
  console.log("POSTS:", userPostData);
};

export default getData;
