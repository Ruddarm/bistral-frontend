import { useContext } from "react";
import CreateBtn from "../ui/CreateButton";
import MenuCard from "../ui/menus/MenuCard";
import MenuCardContainer from "../ui/menus/MenuCardContainer";
import Style from "./menus.module.css"
import { MenuContext } from "../../hooks/menu/useMenus";
import OverlayContainer from "../ui/OverLayContainer";
import CreateMenu from "./createMenu";


function Menus() {
    const { menus, createMenu, handelCreateMenu , setCurrentMenu} = useContext(MenuContext)
    // console.log(setCurrentMenu)
    return (
        <div className={Style.menuCardContainer}>
            {createMenu && <OverlayContainer>
                <CreateMenu></CreateMenu>
            </OverlayContainer>}
            {menus?.map((menu) => (
                <MenuCardContainer>
                    <MenuCard menuCard={{ ...menu} }
                    ></MenuCard>
                </MenuCardContainer>
            ))
            }
            <MenuCardContainer>
                <CreateBtn onClick={handelCreateMenu} ></CreateBtn>
            </MenuCardContainer>
        </div>
    )
}

export default Menus;