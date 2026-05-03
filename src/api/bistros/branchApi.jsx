import api from "../axiosInstance"

const createBranch = async (bistroId, branch) => {
    const res = await api.post(`/bistros/${bistroId}/branches`, branch)
}

const getBranch = async (bistroId, branchId) => {
    // console.log(bistroId,branchId)
    const res = await api.get(`/bistros/${bistroId}/branches/${branchId}`)
    return res;
}

const createZone = async (bistroId, body) => {
    const res = await api.post(`/bistros/${bistroId}/branch/zone/`, body)
    return res;
}

const getAllZones = async (bistroId, branchId) => {
    const res = await api.get(`/bistros/${bistroId}/branch/zone/${branchId}`)
    return res;
}

const createTable = async (branchId, body) => {
    return await api.post(`/bistros/branch/${branchId}/table`,
        body
    )
}
export { createBranch, getBranch, getAllZones, createTable, createZone }

