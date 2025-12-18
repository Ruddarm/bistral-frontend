import { useContext } from "react";
import CreateBtn from "../ui/CreateButton";
import MenuCard from "../ui/menus/MenuCard";
import MenuCardContainer from "../ui/menus/MenuCardContainer";
import Style from "./menus.module.css"
import { MenuContext } from "../../hooks/menu/useMenus";
import OverlayContainer from "../ui/OverLayContainer";
import CreateMenu from "./createMenu";


function Menus() {
    const { menus, createMenu,handelCreateMenu } = useContext(MenuContext)
    // console.log(menus)
    return (
        <div className={Style.menuCardContainer}>
            {createMenu && <OverlayContainer>
                <CreateMenu></CreateMenu>
            </OverlayContainer>}
            {menus?.map((bistro) => (
                bistro?.menuResponseList.map((menuCard) => (
                    <MenuCardContainer>
                        <MenuCard menuCard={{ ...menuCard, bistroId: bistro.bistroId, bistroName: bistro.bistroName }}></MenuCard>
                    </MenuCardContainer>
                ))
            ))}
            <MenuCardContainer>
                <CreateBtn onClick={handelCreateMenu}></CreateBtn>
            </MenuCardContainer>
        </div>
    )
}

export default Menus;