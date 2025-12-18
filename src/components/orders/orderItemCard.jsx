import Style from "./order.module.css";
import OrderQtyOption from "./orderQtyOption";
function OrderItemCard({ increaseQty, decreaseQty, item, removeItem }) {
    // console.log(item)
    return (
        <div className={Style.itemCard}>
            <div className={Style.orderItemStateContainer}>
                <div className={`${Style.orderItemState} ${item.itemState ? item.itemState === 'newItem' ? Style.newItemState : Style.modifiedItemState : Style.unmodifiedState}`}>
                </div>
            </div>
            <div className={Style.itemDisplay}>
                <div className={Style.itemName}>{item.itemName}({item.variantName})</div>
                <div className={Style.itemPrice}>₹{item.price}/ each</div>
            </div>
            <div className={Style.optionContainer}>
                <OrderQtyOption increase={() => { increaseQty(item) }} decrease={() => { decreaseQty(item) }} incrementFun={increaseQty} qty={item.orderedQty}></OrderQtyOption>
                <div className={Style.incrementQtyItem}>
                    <button onClick={() => { removeItem(item.orderItemId || item.variantId) }} className={Style.itemEditBtn}>del</button>
                </div>
            </div>

        </div>
    )
}

export default OrderItemCard;