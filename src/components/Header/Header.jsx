import Icon from "../ui/Icons";
import Style from "./Header.module.css"
import bistroIcon from "../../assets/restaurant.png"
import downArrow from "../../assets/down-arrow.png"
import LoginContext from "../Authentication/LoginContext";
function Header() {
    // console.log("redner header")
    return (
        <div className={Style.headerDiv}>
            <div className={Style.headerRightDiv}>
                <span id={Style.LogoTitle}>
                    Bistral
                </span>
            </div>
            <div className={Style.headerLeftDiv}>
                <div className={Style.userLoginContainer}>
                    <Icon src={bistroIcon}>

                    </Icon>
                    <span className={Style.bistroNameTitle}>
                        Bistral-Demo
                    </span>
                    <Icon src={downArrow}>

                    </Icon>
                </div>
                    <div className={Style.LoginContextWrapper}>
                        <LoginContext>
                            
                        </LoginContext>
                    </div>

            </div>
        </div>
    )
}

export default Header;