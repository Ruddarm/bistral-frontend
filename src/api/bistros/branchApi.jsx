import api from "../axiosInstance"

const createBranch = async (bistroId, branch) => {
    const res = await api.post(`/bistros/branches`, branch)
}

const getBranch = async (bistroId, branchId) => {
    const res = await api.get(`/bistros/branches`)
    return res;
}

const createZone = async (bistroId, body) => {
    const res = await api.post(`/bistros/branches/zone/`, body)
    return res;
}

const getAllZones = async (bistroId, branchId) => {
    const res = await api.get(`/bistros/branches/zone/`)
    return res;
}

const createTable = async (branchId, body) => {
    return await api.post(`/bistros/branch/table`,
        body
    )
}
export { createBranch, getBranch, getAllZones, createTable, createZone }

