import axios from "../setup/axios/SetupAxios"

const login = async (values) => {
    const { email, password } = values
    const response = await axios.post(`/users/login`, {
        email, password
    });
    return response.data;
}

const register = async (values) => {
    const { email, firstName, lastName, password } = values
    const response = await axios.post(`/users/register`, {
        name: firstName + lastName,
        email,
        password
    });
    return response.data;
}

export const authServices = {
    login, register
}