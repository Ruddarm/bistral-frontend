import Icon from "../Icons";
import Style from "./BistrosUI.module.css"
import RestaurantIcon from "../../../assets/restaurant.png"
import LayoutTitle, { SubPara } from "../Titles";
import CateoryName from "../menuCard/CategoryNameDisplay";
import { useNavigate } from "react-router-dom";
function BistroCard({ handleClick, bistro }) {

    return (
        <div onClick={handleClick} className={Style.bistroCard}>
            <div className={Style.BistroLogoContainer}>
                <Icon id={Style.restraIcon} src={RestaurantIcon} ></Icon>
                <div className={Style.BistroTagContainer}>
                    <span id={Style.BistroTag}>3 Branches</span>
                </div>
            </div>
            <div className={Style.bistroInfoContainer}>
                <LayoutTitle title={bistro.bistroName}></LayoutTitle>
                {/* <SubPara para={"Your Hangign Partner"}></SubPara> */}
            </div>
        </div>
    )
}

export default BistroCard;