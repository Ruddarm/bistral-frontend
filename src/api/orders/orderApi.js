import api from "../axiosInstance";

const getOrders = async (zoneId) => {
    const res = await api.get(`/orders/branch/zone/${zoneId}/active`);
    return res;
}

const getOrder = async (orderId) => {
    const res = await api.get(`/orders/${orderId}`);
    return res;
}
const updateOrderItem = async (body) => {
    const res = await api.patch("/orders/update/item", body)
    console.log(res);
    return res.data
}

const addOrderItem = async (body) => {
    const res = await api.put("/orders/add/item")
}

const addOrderItemBulk = async (body) => {
    return await api.post("/orders/add/item/bulk", body)
}
const updateOrderItemBulk = async (body) => {
    return await api.patch("/orders/update/item/bulk", body)
}
const removeOrderItem = async (orderId, orderItemId) => {
    return await api.delete(`/orders/${orderId}/item/${orderItemId}`)
}

const createOrder = async (body) => {
    console.log(body)
    return await api.post("/orders", body);
}
export { getOrder, getOrders, updateOrderItem, addOrderItemBulk, createOrder, updateOrderItemBulk, removeOrderItem };