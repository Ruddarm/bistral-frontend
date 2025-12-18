import Icon from "../components/ui/Icons";
import LayoutHeader from "./LayoutHeader";
import Style from "./MenuLayout.module.css"
import RestrauntIcon from "../assets/restaurant.png"
import { ItemDropDown } from "../components/ui/menuCard/ArrowIcons";
import Menus from "../components/menus/menus";
import BistroNameButton from "../components/ui/menus/BistroNameSuggestion";
import { useContext } from "react";
import { MenuContext } from "../hooks/menu/useMenus";
import OverlayContainer from "../components/ui/OverLayContainer";
import LayoutTitle, { SubPara } from "../components/ui/Titles";
function MenuLayout() {
    const { handelBistroNameFilterSuggestion, bistroFilter, bistros, selectedBistro } = useContext(MenuContext);
    // console.log(bistros)
    return (
        <LayoutHeader title={"Bistral Menu Manager"}>
            <div className={Style.menuLayoutContainer}>
                <div className={Style.menuLayoutBar}>
                    <div className={Style.menuLayOutBarTitle}>
                        <LayoutTitle title={"Menu Cards"}></LayoutTitle>
                        <SubPara para={" Choose a menu card to view and manage its items and category"}></SubPara>
                    </div>
                    <div className={Style.menuBarButtonContainer}>
                        <div className={Style.BistroFilterContainer}>
                            <button onClick={handelBistroNameFilterSuggestion} className={Style.bistroFilterBtn}>
                                <div style={{ paddingLeft: "12px", marginRight: "1rem" }}>
                                    <Icon src={RestrauntIcon}>
                                    </Icon>
                                </div>
                                <div id={Style.bistroFilterTitle}>
                                    {selectedBistro}
                                </div>
                                <ItemDropDown></ItemDropDown>
                                {bistroFilter && <div className={Style.bistroSuggestion}>
                                    {bistros
                                        .map((bistro) => (
                                            <BistroNameButton selected={selectedBistro == bistro.bistroName} bistro={bistro}></BistroNameButton>
                                        ))}
                                </div>}
                            </button>

                        </div>
                    </div>
                </div>
                <div className={Style.menuLayoutCardContainer}>
                    <Menus></Menus>
                </div>
            </div >
        </LayoutHeader >
    )
}

export default MenuLayout;