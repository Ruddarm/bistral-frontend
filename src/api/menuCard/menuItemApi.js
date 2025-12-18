import axios from "axios";

const getMenuCard = async (bistroId, menuId) => {
    // console.log(bistroId,menuId)
    return await axios.get(`http://localhost:8084/bistros/${bistroId}/menus/${menuId}/card`)
}

const createMenuItems = async (menuId,  menuItem ) => {
    console.log(menuItem)
    return await axios.post(`http://localhost:8084/bistros/menus/${menuId}/menu-items`, menuItem)
}


export { getMenuCard , createMenuItems}