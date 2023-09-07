import apiInstance from "./apiInstance";

const fetchUrl = "/users";

const fetchUsers = async (page) => {
  const params = { page };
  const response = await apiInstance.get(fetchUrl, { params });
  // console.log("AAAAAA");
  // console.log(response.data);
  return response.data.data;
};

export default fetchUsers;
