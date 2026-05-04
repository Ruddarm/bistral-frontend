import api from "../axiosInstance";

async function getAllCategory(menuId) {
    // console.log(bistroId,menuId)
    return await api.get(`/bistros/menus/${menuId}/category/list`);
}

async function createCategory(category) {
    return await api.post(`/bistros/menus/${menuId}/category`)
}
export { getAllCategory, createCategory }