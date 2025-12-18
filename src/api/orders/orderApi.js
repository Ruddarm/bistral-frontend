import axios from "axios";

const getOrders = async (branchId, zoneId) => {
    // console.log(branchId)
    const res = await axios.get(`http://localhost:8085/orders/branch/${branchId}/zone/${zoneId}/order/all`);
    // console.log("data is  ", res);
    return res;
}

const getOrder = async (orderId) => {
    const res = await axios.get(`http://localhost:8085/orders/${orderId}`);
    return res;
}
const updateOrderItem = async (body) => {
    const res = await axios.patch("http://localhost:8085/orders/update/item", body)
    console.log(res);
    return res.data
}

const addOrderItem = async (body) => {
    const res = await axios.put("http://localhost:8085/orders/add/item")
}

const addOrderItemBulk = async (body) => {
    return await axios.post("http://localhost:8085/orders/add/item/bulk", body)
}
const updateOrderItemBulk = async (body) => {
    // console.log(body)
    return await axios.patch("http://localhost:8085/orders/update/item/bulk", body)
}
const removeOrderItem = async (orderId, orderItemId) => {
    return await axios.delete(`http://localhost:8085/orders/${orderId}/item/${orderItemId}`)
}

const createOrder = async (body) => {
    console.log(body)
    return await axios.post("http://localhost:8085/orders", body);
}
export { getOrder, getOrders, updateOrderItem, addOrderItemBulk, createOrder, updateOrderItemBulk, removeOrderItem };