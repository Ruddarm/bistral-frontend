
import api from "../axiosInstance";

const getUserContext = async () => {

    const response = await api.get(`auth/users/role`)
    return response.data.data;

}

const switchContext = async (context) => {
    const response = await api.post("auth/switch/context",
        context)
    return response.data.data;
}


export { getUserContext, switchContext }