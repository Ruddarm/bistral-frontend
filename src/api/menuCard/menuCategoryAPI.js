import api from "../axiosInstance";

async function getAllCategory(bistroId, menuId) {
    // console.log(bistroId,menuId)
    return await api.get(`/bistros/${bistroId}/menu-category/all/${menuId}`);
}

async function createCategory(bistroId, category) {
    return await api.post(`/bistros/${bistroId}/menu-category`, category)
}
export { getAllCategory, createCategory }