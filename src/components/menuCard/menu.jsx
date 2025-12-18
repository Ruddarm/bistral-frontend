
import UseMenuCard, { MenuCardContext } from "../../hooks/menu/useMenuCard";

import Style from "./menu.module.css";
import MenuItems from "./menuItems";
import MenuItemCategoryBar from "./MenuItemCategoryBar";
import CreateItem from "./CreateItem";
import { useContext } from "react";
import OverlayContainer from "../ui/OverLayContainer";
import CateoryName from "../ui/menuCard/CategoryNameDisplay";


function Menu() {
    const { menuCard, createMenuItem,  categories } = useContext(MenuCardContext)
    // console.log(categories)
    return (
        <>
            {
                createMenuItem && (<OverlayContainer>
                    <CreateItem ></CreateItem>
                </OverlayContainer>)
            }
            <div className={`${Style.menuCardContainer}`}>
                <MenuItemCategoryBar category={categories ? categories : []}></MenuItemCategoryBar>
                <div className={`${Style.menuItemContainer}`}>
                    {menuCard ? Object.keys(menuCard?.menuItems).map(category => {
                        console.log()
                        return (
                            <>
                                {/* <div className={Style.menuAlphabatesContainer}>
                                    <span id={Style.menuAlphabates}>{category}</span>
                                </div> */}
                                <CateoryName    name={category}
                                
                                ></CateoryName>
                                {menuCard.menuItems[category]?.map((item) => (<MenuItems item={item} ></MenuItems>))}
                            </>
                        );
                    }) : <></>}

                </div>
            </div>
        </>
    )
}

export default Menu;