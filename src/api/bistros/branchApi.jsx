import axios from "axios"


const createBranch = async (bistroId, branch) => {
    const res = await axios.post(`http://localhost:8084/bistros/${bistroId}/branches`, branch)
}

const getBranch = async (bistroId, branchId) => {
    // console.log(bistroId,branchId)
    const res = await axios.get(`http://localhost:8084/bistros/${bistroId}/branches/${branchId}`)
    return res;
}

const createZone = async (bistroId, body) => {
    const res = await axios.post(`http://localhost:8084/bistros/${bistroId}/branch/zone/`, body)
    return res;
}

const getAllZones = async (bistroId, branchId) => {
    const res = await axios.get(`http://localhost:8084/bistros/${bistroId}/branch/zone/${branchId}`)
    return res;
}

const createTable = async (branchId, body) => {
    return await axios.post(`http://localhost:8084/bistros/branch/${branchId}/table`,
        body
    )
}
export { createBranch, getBranch, getAllZones, createTable, createZone }

