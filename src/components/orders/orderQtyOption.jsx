import Style from "./order.module.css";


function OrderQtyOption({ increase, decrease, qty }) {
    return (
        <div className={Style.itemOption}>
            <div className={Style.decrementQtyItem}>
                <button onClick={decrease} className={Style.itemEditBtn}>-</button>
            </div>
            <div className={Style.itemQty}>
                {qty}
            </div>
            <div className={Style.incrementQtyItem}>
                <button onClick={increase} className={Style.itemEditBtn}>+</button>
            </div>

        </div>
    )
}

export default OrderQtyOption;