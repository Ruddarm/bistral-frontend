import axios from "axios";
import api from "../axiosInstance";

async function getBistro(bistroId){
    return await api.get(`/bistros`)
}

async function createBistro(bistro){
    return await api.post("/bistros",bistro)
}

async function  getAllBistros(userId) {
    return await api.get(`/bistros/list/bistros/user/${userId}`)
}

export {createBistro,getAllBistros,getBistro}