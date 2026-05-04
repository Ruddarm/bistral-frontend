import api from "../axiosInstance";

const getMenuCard = async (menuId) => {
    // console.log(bistroId,menuId)
    return await api.get(`/bistros/menus/${menuId}/card`)
}

const createMenuItems = async (menuId, menuItem) => {
    console.log(menuItem)
    return await api.post(`/bistros/menus/${menuId}/menu-items`, menuItem)
}


export { getMenuCard, createMenuItems }