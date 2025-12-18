import { useEffect, useState } from "react";
import { CategoryIcon } from "../ui/menuCard/CategoryIcon";
import CateoryName from "../ui/menuCard/CategoryNameDisplay";
// import { CategorName } from "../ui/menuCard/CategoryNameDisplay";
import ItemName from "../ui/menuCard/ItemName";
import Style from "./MenuSuggestion.module.css"
import OrderQtyOption from "./orderQtyOption";

function SuggestedItemVariantCard({ addItemFun, itemVariant }) {
    console.log(itemVariant)
    const [variant, setVariant] = useState({});
    useEffect(() => {
        setVariant(itemVariant)
    }, [itemVariant])
    const increaseQty = () => {
        setVariant({ ...variant, orderedQty: variant.orderedQty + 1 })
    }
    const decreaseQty = () => {
        if (variant.orderedQty == 0) return;
        setVariant({ ...variant, orderedQty: variant.orderedQty - 1 })
    }
    if(!itemVariant) return (<></>)
    return (
        <div className={Style.variantCard}>
            <div className={Style.variantName}>
                <ItemName itemName={variant.variantName}></ItemName>
                <div style={{}}>
                    <span className={Style.variantPrice}>&#8377;&nbsp;{variant.price}</span>
                    {/* <span>{variant.qty}</span> */}
                    {/* <span>{" ML"}</span> */}
                </div>
            </div>
            <div className={Style.variantCardOption}>
                <div>
                    <OrderQtyOption decrease={decreaseQty} increase={increaseQty} qty={variant.orderedQty || 1}></OrderQtyOption>
                </div>
                <button onClick={() => { addItemFun(variant) }} className={Style.addBtn}>
                    Add
                </button>
            </div>
        </div>
    )
}

function SuggestedItemRow({ addItemFun, item }) {

    const [openVariant, setOpenVariant] = useState(false)
    useState(()=>{
        setOpenVariant(false)
    })
    return (
        <>
            <div className={Style.itemRow}  >
                <div className={Style.itemInfo} onClick={() => { setOpenVariant(!openVariant) }}>
                    <ItemName itemName={item.itemName}></ItemName>
                </div>
                {openVariant && <div className={Style.variantContainer}>
                    {item.menuItemVariantResponsesList.map((variant) => (
                        <SuggestedItemVariantCard addItemFun={addItemFun} itemVariant={{ ...variant, orderedQty: 1, itemName: item.itemName, menuItemId: item.itemId }}></SuggestedItemVariantCard>
                    ))}
                </div>}
            </div>
        </>
    )
}

export default SuggestedItemRow;