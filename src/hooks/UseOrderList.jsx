import { useState, useEffect } from "react";
import { createOrder, getOrder } from "../api/orders/orderApi";
import { getAllBistros } from "../api/bistros/bistrosApi";
import axios from "axios";

function userOrderList(userId) {
    const [activeBistro, setActiveBistro] = useState({})
    const [activeBranch, setActiveBranch] = useState({})
    const [branchId, setBranchId] = useState();
    const [bistros, setBistros] = useState()
    const [isBistroSelcted, setIsBistroSelected] = useState(false)
    const [orderSideBar, setOrderSideBar] = useState(false)
    const [orders, setOrder] = useState([{
        tableNo: 1,
        totalAmount: 1500,
        orderItemList: [
            {
                orderItemId: 1,
                "name": "Pizza",
                qty: 2,
                price: 100
            }
            , {
                orderItemId: 2,
                name: "Paneer Butter Masala",
                qty: 1,
                price: 250
            },
            {
                orderItemId: 3,
                name: "Butter Nan",
                qty: 4,
                price: 65
            }
        ]
    }, {
        tableNo: 2,
        totalAmount: 1400,
        orderItemList: [
            {
                name: "Paneer Butter Masala",
                qty: 1,
                price: 250
            },
            {
                name: "Butter Nan",
                qty: 4,
                price: 65
            }
        ]
    }, {
        tableNo: 3,
        totalAmount: 0,
        orderItemList: []
    },
    {
        tableNo: 4,
        totalAmount: 0,
        orderItemList: [
            {
                name: "Butter Nan",
                qty: 4,
                price: 65
            },
            {
                name: "Garlic Butter Nan",
                qty: 4,
                price: 65
            },
            {
                name: "Water",
                qty: 2,
                price: 20
            }
        ]
    }
    ]);
    const [openOrder, setOpenOrder] = useState({})

    const fetchBistros = async () => {
        try {
            const res = await getAllBistros("1a649890-f608-483d-9ff2-4fe56bb231f4")
            setBistros(res.data);
            // console.log(res)
        } catch (ex) {
            console.log(ex);
        }
    }
    const fetchActiveOrders = async () => {
        try {
            // if(activeBranch)
            console.log(activeBranch.branchId)
            // const res = await axios.post(`http://localhost:8084/bistros/branch/${activeBranch.branchId}/table`, { count: 10, branchId: activeBranch.branchId })
            // console.log(res)
            const response = await getOrder(activeBranch.branchId);
            setOrder(response.data)
            // console.log()
            // console.log(activeBranch)
        } catch (ex) {
            console.log(ex)
        }
    }
    const handelBistroSelction = async (bistro) => {
        setActiveBistro(bistro);
        // console.log(bistro.branchResponses?.[0])
        setActiveBranch(bistro.branchResponses?.[0])
        setIsBistroSelected(true);
    }
    const handelPrevBtnClick = async ()=>{
        setActiveBistro(undefined)
        setActiveBranch(undefined)
        setOrder([])
        setIsBistroSelected(false)
    }
    useEffect(() => {
        fetchActiveOrders()
    }, [activeBranch])
    useEffect(() => {
        fetchBistros()
    }, [])


    const OpenSideBar = (order) => {
        setOpenOrder(order);
        setOrderSideBar(!orderSideBar);
    }
    const handelCreateOrder = async (order) => {
        const res = await createOrder({ ...order, bistroId: activeBistro.bistroId, branchId: activeBranch.branchId })
        console.log(res)
    }
    return { isBistroSelcted,handelPrevBtnClick, orderSideBar, activeBranch, orders, bistros, OpenSideBar, openOrder, handelCreateOrder, handelBistroSelction, activeBistro }
}

export { userOrderList }