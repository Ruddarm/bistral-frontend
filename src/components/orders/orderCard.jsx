import Style from "./order.module.css";

function OrderCard({ order, openOrderSideBar, createOrder }) {
    return (
        <>
            <div className={Style.tableCard}>
                <div className={Style.tableCardHeader}>
                    <div className={Style.tableCardHeaderDiv1}>
                        <div className={Style.tableNoCircle}>
                            <span style={{ "flex": 1, "display": "flex", "justifyContent": "center", "alignItems": "center", fontSize: "1.5rem", fontWeight: "bold" }}>
                                {order.tableNo}
                            </span>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className={Style.tableCardHeaderDiv2}>
                        <div style={{ color: "var(--very-dark-grey", fontSize: "1.25rem" }} >
                            Table {order.tableNo}
                        </div>
                        <div className={`${Style.orderStatus} ${order.orderStatus === "OPEN" ? Style.orderStatusActive : order.orderStatus === "VACANT" ? Style.orderStatusVacant : ""}`} >
                            {order.orderStatus}
                        </div>
                    </div>
                    <div className={Style.tableCardHeaderDiv3}>
                        <span>
                            ₹{order.taxableAmount}
                        </span>
                    </div>
                </div>
                <div style={{ "padding": "0.25rem 1rem ", "height": "auto", color: "var(--medium-grey)", fontFamily: "Inter" }}>
                    <span>Order Items</span>
                </div>
                <div className={Style.tableCardBody}>
                    {order.orderStatus != "VACANT" ?
                        <ul className={Style.tableCardBodyItemUl}>
                            {order.orderItemList.map((item, key) => (<ItemListCard key={key} itemName={item.itemName + "(" + item.variantName + ")"} qty={item.orderedQty} ></ItemListCard>))}
                        </ul> :
                        <div className={Style.createOrderContainer}>
                            <button className={Style.createOrderBtn} onClick={createOrder}>
                                +
                            </button>
                        </div>
                    }
                </div>
                <div className={Style.tableCardBottom}>
                    {order.orderStatus != "VACANT" && <button className={Style.viewOrderBtn} onClick={openOrderSideBar}>
                        View Order
                    </button>}
                </div>
            </div>

        </>
    )
}
function ItemListCard({ itemName, qty }) {
    // console.log(itemName);
    return (<li className={Style.tableCardBodyListItem}>{itemName} &nbsp;x&nbsp; {qty}</li>)

}
export default OrderCard;