import { useEffect, useState } from "react";
import { addOrderItemBulk, getOrder, removeOrderItem, updateOrderItem, updateOrderItemBulk } from "../api/orders/orderApi";
import axios from "axios";
import { completePayment } from "../api/payment/paymentApi";


function useCurrentOrder(orderId) {
    // console.log(currentOrder)
    const [currentTab, setCurrentTab] = useState({ orderTab: true, paymentTab: false })
    const [isModified, setIsModified] = useState(false)
    const [openOrder, setOpenOrder] = useState({orderItemList:[]})
    const [newItems, setNewItems] = useState({ orderId: orderId, items: [] })
    const [modifiedItems, setModifiedItems] = useState([])
    const [paymentMode, setPaymentMode] = useState({ cash: false, upi: false, card: false })
    const [paymentRes, setPaymentRes] = useState();

    const fetchOrder = async (orderId) => {
        try {
            const orderResponse =  await getOrder(orderId);
            // console.log(orderResponse)
            setOpenOrder(orderResponse.data);
        } catch (ex) {
            console.log(ex)
        }
    }
    useEffect(() => {
        // console.log(orderId)
        fetchOrder(orderId);
    }, [orderId])
    const updateQty = (itemId, newQty) => {
        setIsModified(true)
        setOpenOrder((prevOrder) =>
        ({
            ...prevOrder,
            orderItemList:
                prevOrder.orderItemList.map(
                    item => item.orderItemId === itemId ? { ...item, orderedQty: newQty, itemState: "modified" } : item)
        }));
    }

    const switchTab = (tab) => {
        setCurrentTab({ ...{ orderTab: false, paymentTab: false }, [tab]: true })
    }
    const addItem = (item) => {
        console.log(item)
        setIsModified(true)
        const existing = newItems.items.find(i => i.variantId == item.variantId);
        if (!existing) {
            item.itemState = "newItem";
            setNewItems((order) => ({ ...order, items: [...order.items, item] }))
        } else {
            const newItemUpdateList = newItems.items.map((i) => i.variantId === item.variantId ? { ...item, orderedQty: i.orderedQty + item.orderedQty || 1 } : i)
            setNewItems((order) => ({ ...order, items: newItemUpdateList }));
        }
    }
    const removeNewItem = (item) => {
        const newItemUpdatedList = newItems.items.filter(i => i.varaintId == item);
        setNewItems((newItems) => ({ ...newItems, items: newItemUpdatedList }))
    }
    const increaseQty = (item) => {
        item.orderedQty += 1;
        updateQty(item.orderItemId, item.orderedQty)
    }
    const decreaseQty = (item) => {
        if (item.orderedQty <= 1) return;
        item.orderedQty -= 1;
        updateQty(item.orderItemId, item.orderedQty)
    }
    const updateOrder = async () => {
        let modified = openOrder.orderItemList.filter((i) => i.itemState === "modified")
        // console.log(modified)
        try {
            let updatedOrder = undefined
            if (newItems.items.length > 0) {
                console.log("Updating order")
                updatedOrder = await addOrderItemBulk(newItems);
            }
            console.log("modifing order")
            if (modified.length > 0) {
                updatedOrder = await updateOrderItemBulk({ orderId: openOrder.orderId, items: modified })
            }
            console.log(updatedOrder)
            modified = []
            setNewItems((newItem) => ({ ...newItem, items: [] }));
            if (updatedOrder != undefined) {
                console.log(updateOrder.data)
                setOpenOrder(updatedOrder?.data)
            }
            setIsModified(false);
        } catch (e) {
            console.log(e)
        }
    }
    const removeItem = async (orderItemId) => {
        console.log(orderItemId)
        const res = await removeOrderItem(openOrder.orderId, orderItemId);
        // console.log(res)
        setOpenOrder(res.data)
    }

    const updatePaymentMode = (mode) => {
        setPaymentMode({ ...{ cash: false, upi: false, card: false }, [mode]: !paymentMode[mode] })
    }

    const paymentHandler = async () => {
        let mode = paymentMode.cash ? "CASH" : paymentMode.upi ? "UPI" : paymentMode.card ? "CARD" : undefined;
        if (mode) {
            try {
                const res = await completePayment({orderId:openOrder.orderId,paymentMode:mode,amount:openOrder.payableAmount})
                const orderResponse = await getOrder(openOrder.orderId);
                // console.log(orderResponse)
                setOpenOrder(orderResponse.data)
                // console.log(res)
            } catch (ex) {
                console.log(ex)
            }
        }
    }
    return { openOrder, newItems, increaseQty, decreaseQty, addItem, updateOrder, removeItem, removeNewItem, isModified, currentTab, switchTab, paymentMode, updatePaymentMode, paymentHandler }

}

export { useCurrentOrder }
