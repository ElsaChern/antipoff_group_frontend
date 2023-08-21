import apiInstance from "./apiInstance";

const loginUrl = "/login";

const login = async (email, password) => {
    const params = {
        email,
        password,
    };

    const response = await apiInstance.post(loginUrl, params)
        .catch(function(error) {
            return Promise.reject(error.response.data.error);
        });

    return response.data;
}

export default login;