import apiInstance from "./apiInstance";

const loginUrl = "/login";
const registerUrl = "/register";
let url;

const authRequest = async (type, email, password) => {
  const params = {
    email,
    password,
  };

  if (type === "login") {
    url = loginUrl;
  } else if (type === "register") {
    url = registerUrl;
  } else {
    throw new Error("Something went wrong. Try again later");
  }

  const response = await apiInstance.post(url, params).catch(function (error) {
    return Promise.reject(error.response.data.error);
  });

  return response.data;
};

export default authRequest;
