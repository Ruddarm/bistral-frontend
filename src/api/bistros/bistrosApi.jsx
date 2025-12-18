import axios from "axios";

async function getBistro(bistroId){
    return await axios.get(`http://localhost:8084/bistros/${bistroId}`)
}

async function createBistro(bistro){
    return await axios.post("http://localhost:8084/bistros",bistro)
}

async function  getAllBistros(userId) {
    return await axios.get(`http://localhost:8084/bistros/list/bistros/user/${userId}`)
}

export {createBistro,getAllBistros,getBistro}