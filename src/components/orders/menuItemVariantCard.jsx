import Style from "./order.module.css";
import OrderQtyOption from "./orderQtyOption";

function ItemVariantCard({addFun, variant, decreaseQty, increaseQty }) {
    return (
        <>
            <div className={Style.variantCard}>
                <div className={Style.variantInfo}>
                    <span>{variant.qty}&nbsp;{variant.unit}</span>
                    <span>₹{variant.price}</span>
                </div>
                <div className={Style.variantOption}>
                    <OrderQtyOption  decrease={decreaseQty} increase={increaseQty} qty={variant.orderdQty ? variant.orderdQty : 1}>
                    </OrderQtyOption>
                    <div>
                        <button style={{ flex: "1", }} onClick={addFun} className={Style.itemEditBtn}>Add</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ItemVariantCard;