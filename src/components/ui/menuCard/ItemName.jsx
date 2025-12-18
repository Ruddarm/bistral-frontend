import Style from "./menuUI.module.css"



function ItemName({ itemName }) {
    return (
        <div className={Style.itemName}>
            {itemName}
        </div>
    )
}

export default ItemName;