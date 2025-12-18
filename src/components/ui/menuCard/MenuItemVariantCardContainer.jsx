import Style from "./MenuUI.module.css"

function MenuItemVariantCardContainer({ children }) {
    return (
        <>
            <li className={`${Style.menuItemListItem}`}>
                {children}
            </li>
        </>
    )
}


export default MenuItemVariantCardContainer;