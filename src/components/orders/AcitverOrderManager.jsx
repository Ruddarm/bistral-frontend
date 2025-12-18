import { useContext } from "react";
import Style from "./order.module.css"
import OrderListContext from "../../hooks/Order/OrderListContext";
import ActiveOrderFilter from "./ActiveOrderFilter";
import OrderCard from "./orderCard";

function ActiveOrderManager() {
    const {orders,handelCreateOrder,OpenSideBar} = useContext(OrderListContext)
    return (
        <div className={Style.activeOrderManagerContainer}>
            {/* <div className={Style.activeOrderFilterContainer}>
                <ActiveOrderFilter></ActiveOrderFilter>
            </div> */}
            <div className={Style.activeOrderFilterContainer}>
                <ActiveOrderFilter></ActiveOrderFilter>
            </div>
            <div className={Style.orderTableContainer}>
                {orders.map((order, key) =>
                    <OrderCard
                        key={key} order={order} createOrder={() => handelCreateOrder({ tableId: order.tableId, tableNo: order.tableNo, orderType: "DineIN" })} openOrderSideBar={() => { OpenSideBar(order) }}>
                    </OrderCard>)}
            </div>
        </div>
    )
}

export default ActiveOrderManager;