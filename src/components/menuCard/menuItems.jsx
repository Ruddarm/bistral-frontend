import { useState } from "react";
import Style from "./menu.module.css"

import VariantDeleteButton from "../ui/menuCard/VariantDeleteButton";
import VariantEditButton from "../ui/menuCard/VariantEditButton";
import { ItemDropDown, ItemDropUP } from "../ui/menuCard/ArrowIcons";
import MenuItemVaraintCard from "./MenuItemVariantCard";
import MenuItemVariantCardContainer from "../ui/menuCard/MenuItemVariantCardContainer";
import CreateBtn from "../ui/CreateButton";
import OverlayContainer from "../ui/OverLayContainer";
import CreateVariant from "./CreateVariant";
import ItemName from "../ui/menuCard/ItemName";

function MenuItems({ item }) {
    // console.log(item)
    const [openVariantForm, setOpenVariantForm] = useState(false)
    const [openItem, closItem] = useState(false)
    return (
        <>
            {openVariantForm && (<OverlayContainer>
                <CreateVariant closeFun={()=>{setOpenVariantForm(!openVariantForm)}} variant={{}}></CreateVariant>
            </OverlayContainer>)}
            <div className={Style.menuItemsRow}>
                <div className={Style.menuItems}
                    
                >
                    <div className={Style.menuItemsItemInfo} onClick={() => { closItem(!openItem) }}>
                        <ItemName itemName={item.itemName}></ItemName>
                    </div>
                    <div className={Style.menuItemsOptionContainer}>
                        <VariantEditButton></VariantEditButton>
                        <VariantDeleteButton></VariantDeleteButton>
                        {openItem ? <ItemDropUP></ItemDropUP> : <ItemDropDown></ItemDropDown>}
                    </div>
                </div>
                <div className={`${Style.menuItemListContainer} ${openItem ? Style.showItem : ""}`}>
                    <ul className={Style.menuItemList}>
                        {item.menuItemVariantResponsesList?.map((variant) => (
                            <>
                                <MenuItemVariantCardContainer >
                                    <MenuItemVaraintCard variant={variant}></MenuItemVaraintCard>
                                </MenuItemVariantCardContainer>
                            </>
                        ))}

                        <MenuItemVariantCardContainer>
                            <div className={`${Style.createMenuItemVariant}`}>
                                <CreateBtn onClick={() => { console.log("called"); setOpenVariantForm(!openVariantForm) }}></CreateBtn>
                            </div>
                        </MenuItemVariantCardContainer>
                    </ul>
                </div>
            </div >
        </>
    )
}
export default MenuItems;