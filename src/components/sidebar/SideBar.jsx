
import Style from "./Sidebar.module.css"
import hamburgerMenuIcon from "../../assets/hamburgerMenu.png";
import orderIcon from "../../assets/bell.png"
import menuIcon from "../../assets/menu-white.png"
import homeIcon from "../../assets/home.png"
import Icon from "../ui/Icons";
import bistroIcon from "../../assets/restaurant-white.png"
import { useNavigate } from "react-router-dom"

function SideBar() {
    const navigate = useNavigate();
    const handelClick = (url) => {
        navigate(url)
    }
    return (

        <>
            <div className={`${Style.SideBarContainer}`}>
                <div>
                    <button className={`${Style.SideBarMenuContainerButton}`}>

                        <img className={`${Style.SideBarMenuIcons}`} src={hamburgerMenuIcon} alt="" />
                    </button>
                </div>
                <div className={`${Style.SideBarMenuContainer}`}>
                    <button
                        onClick={() => { handelClick("/home") }}
                        className={`${Style.SideBarMenuContainerButton}`}>
                        <img className={`${Style.SideBarMenuIcons}`} src={homeIcon} alt="" />
                    </button>
                    <button
                        onClick={() => { handelClick("/dashboard/order") }}
                        className={`${Style.SideBarMenuContainerButton}`}>
                        <img className={`${Style.SideBarMenuIcons}`} src={orderIcon} alt="" />
                    </button>
                    <button
                        onClick={() => { handelClick("/dashboard/menu-manager") }}
                        className={`${Style.SideBarMenuContainerButton}`}>
                        <img className={`${Style.SideBarMenuIcons}`} src={menuIcon} alt="" />
                    </button>
                    <button
                        onClick={() => { handelClick("/dashboard/bistro-manager") }}
                        className={`${Style.SideBarMenuContainerButton}`}>
                        <img className={`${Style.SideBarMenuIcons}`} src={bistroIcon} alt="" />

                    </button>
                </div>
            </div>
        </>
    )
}

export default SideBar

