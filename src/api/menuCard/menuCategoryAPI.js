import axios from "axios";

async function getAllCategory(bistroId,menuId){
    // console.log(bistroId,menuId)
    return await axios.get(`http://localhost:8084/bistros/${bistroId}/menu-category/all/${menuId}`);
}

async function createCategory(bistroId,category) {
    return await axios.post(`http://localhost:8084/bistros/${bistroId}/menu-category`,category)
}
export {getAllCategory,createCategory}