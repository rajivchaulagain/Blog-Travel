import axios from "../setup/axios/SetupAxios"

const login = () => {
    const response = axios.post(`/users/login`);
    return response.data;
}

const register = async (values) => {
    console.log(values);
    const {email , firstName , lastName , password} = values
    const response = await axios.post(`/users/register` , {
        name : firstName + lastName,
        email,
        password
    });
    return response.data;
}

export const authServices = {
    login, register
}