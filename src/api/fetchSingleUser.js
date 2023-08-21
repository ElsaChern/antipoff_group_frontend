import apiInstance from "./apiInstance";

const fetchSingleUser = async (id) => {
    const fetchUrl = `/users/${id}`;

    const response = await apiInstance.get(fetchUrl);

    return response.data.data;
}

export default fetchSingleUser;
