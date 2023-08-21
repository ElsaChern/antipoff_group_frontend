import apiInstance from "./apiInstance";

const fetchUrl = "/users";

const fetchUsers = async (page) => {
  const params = { page };
  const response = await apiInstance.get(fetchUrl, params);

  return response.data.data;
};

export default fetchUsers;
