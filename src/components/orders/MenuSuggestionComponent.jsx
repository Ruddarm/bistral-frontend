import { useContext, useEffect, useState } from "react";
import MenuItemCategoryBar from "../menuCard/MenuItemCategoryBar";
import FormInput, { FormSelectInput } from "../ui/formInput";
import CateoryName from "../ui/menuCard/CategoryNameDisplay";
import ItemName from "../ui/menuCard/ItemName";
import Style from "./MenuSuggestion.module.css"
import OrderQtyOption from "./orderQtyOption";
import SuggestedItemRow from "./SuggestedRow";
import { MenuSuggestionContext } from "../../hooks/menu/menuSuggestionContext";
import SingleSelect from "../ui/FilterSelect";


function MenuSugesstionComponent() {
    const { filteredMenu, addItemFun, categories, handleCategorySelection, menuCard } = useContext(MenuSuggestionContext)
    // console.log(filteredMenu)
    // console.log(menuCard)
    const [opt, setOpt] = useState([])
    useEffect(() => {
        let list = menuCard?.map((card) => ({ label: card.menuName, value: card.menuId }))
        setOpt(list)
    }, menuCard)
    // console.log(opt)
    return (
        <div className={Style.menuSuggestionContainer}>
            <div className={Style.srchBar}>
                <div className={Style.srchBarInner}>
                    <span id={Style.title}>Select Menu Items</span>
                </div>
                <div className={Style.selectedMenuCardContainer}>
                    <input placeholder="Search Items" id={Style.menuSrchBar}></input>

                    <SingleSelect
                        options={menuCard?.map((card) => ({ label: card.menuName, value: card.menuId }))}
                    />
                </div>
            </div>
            <div className={Style.menuSuggestionBox}>
                <div className={Style.menuCategoryContainer}>
                    <MenuItemCategoryBar onClick={handleCategorySelection} category={categories}></MenuItemCategoryBar>
                </div>
                <div className={Style.menuItemContainer}>
                    {filteredMenu.menuItems ? Object.keys(filteredMenu.menuItems).map((category) => (
                        <>
                            <CateoryName name={category}>
                            </CateoryName>
                            {filteredMenu.menuItems[category]?.map((item) => {
                                return <SuggestedItemRow
                                    key={item.itemId}
                                    addItemFun={addItemFun} item={item}></SuggestedItemRow>
                            }
                            )}
                        </>)) : <></>

                    }
                </div>

            </div>
        </div>
    )
}

export default MenuSugesstionComponent;