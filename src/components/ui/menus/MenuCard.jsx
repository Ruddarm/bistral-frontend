import Style from "./menusUI.module.css"
import MenuCardIcon from "../../../assets/menuCardIcon.png"
import RightArrowIcon from "../../../assets/chevron.png"
import Icon from "../Icons";
import { useNavigate } from "react-router-dom";

function MenuCard({ menuCard }) {
    const navigate = useNavigate()
    function goToMenu() {
        navigate(`${menuCard.bistroId}/${menuCard.menuId}/${menuCard.menuName}`);
    }
    return (
        <div onClick={goToMenu} className={Style.menuCard}>
            <div className={Style.menuCardInfo}>
                <div className={Style.menuCardIconContainer}>
                    <Icon id={Style.menuCardIcon} src={MenuCardIcon}></Icon>
                </div>
                <div className={Style.menuCardNameContainer}>
                    <span id={Style.menuCardName}>{menuCard.menuName}</span>
                    <span id={Style.menuCardBistroName}>{menuCard.bistroName}</span>
                </div>
            </div>
            <div className={Style.ArroIconContainer}>
                <Icon src={RightArrowIcon}></Icon>
            </div>
        </div>
    )
}

export default MenuCard;