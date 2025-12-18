import { useState } from "react";
import ItemVariantCard from "./menuItemVariantCard";
import Style from "./order.module.css";
import { useMenuItems } from "../../hooks/MenuSuggestionHook";

function ItemCard({ addFun, item }) {
    // console.log(item.itemId)
    const [isOpen, setIsOpen] = useState(false);
    const { updateQtyItem } = useMenuItems();
    return (
        <div className={Style.suggestedItemCard}>
            <div className={Style.suggestedItemCardContainer} onClick={() => setIsOpen(!isOpen)}>
                <div className={Style.itemNameCard}>{item.itemName}</div>
                <button className={Style.suggestedItemCardDropDown} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "▲" : "▼"}
                </button>
            </div>
            {/* Variants dropdown */}
            {isOpen && (
                <div className={Style.variantsCardContainer}>
                    {item.menuItemVariantResponsesList.map((variant, idx) => <ItemVariantCard addFun={() => { addFun({ name: item.itemName, ...variant, orderedQty: variant.orderdQty || 1, menuItemId: item.itemId, }) }} key={variant.variantId} increaseQty={() => { updateQtyItem(item.itemId, variant.variantId, "increase") }} decreaseQty={() => { updateQtyItem(item.itemId, variant.variantId, "decrease") }} variant={variant}></ItemVariantCard>)}
                </div>
            )}
        </div>
    );
}

export default ItemCard;