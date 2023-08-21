import apiInstance from "./apiInstance";

const registerUrl = "/register";

const register = async (email, password) => {
    const params = {
        email,
        password,
    };

    const response = await apiInstance.post(registerUrl, params)
        .catch(function(error) {
            return Promise.reject(error.response.data.error);
        });

    return response.data;
}

export default register;