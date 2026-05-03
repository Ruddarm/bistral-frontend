import axios from "axios"

import api from "../axiosInstance";


const getAllMenusApi = async () => {
    return await api.get(`/bistros/menus/list`);
}
const createMenuApi = async (bistroId, menu) => {
    return await api.post(`/bistros/menus`, menu);
}

export { createMenuApi, getAllMenusApi }