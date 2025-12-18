import axios from "axios"




const getAllMenusApi = async(userId)=>{
    return await axios.get(`http://localhost:8084/bistros/list/bistros/menus/${userId}`);
}
const createMenuApi = async (bistroId,menu)=>{
    return  await axios.post(`http://localhost:8084/bistros/${bistroId}}/menus`,menu); 
}

export {createMenuApi,getAllMenusApi}