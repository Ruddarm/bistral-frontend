import ItemCard from "./menuItemCard";
import Style from "./order.module.css";

function MenuSugestion({addFun,itemList}) {
    return (
        <div className={Style.itemSuggestionInnerContainer}>
            {itemList.map((item,idx) => <ItemCard addFun={addFun} item={item} key={item.itemId}></ItemCard>)}
        </div>
    )
}

export default MenuSugestion;