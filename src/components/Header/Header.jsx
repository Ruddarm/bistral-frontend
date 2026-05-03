import Icon from "../ui/Icons";
import Style from "./Header.module.css"
import bistroIcon from "../../assets/restaurant.png"
import downArrow from "../../assets/down-arrow.png"
import LoginContext from "../Authentication/LoginContext";
import { useContext, useState } from "react";
import AuthContext from "../../hooks/AuthenticationContext";
function Header() {
    // console.log("redner header")
    const { currentBistro } = useContext(AuthContext)
    const [isContextForm, setIsContextForm] = useState(false)

    return (
        <div className={Style.headerDiv}>
            <div className={Style.headerRightDiv}>
                <span id={Style.LogoTitle}>
                    Bistral
                </span>
            </div>
            <div className={Style.headerLeftDiv}>
                <div className={Style.userLoginContainer} onClick={() => { setIsContextForm(!isContextForm) }}>
                    <Icon src={bistroIcon}>

                    </Icon>
                    <span className={Style.bistroNameTitle}>
                        {currentBistro?.bistroName}
                    </span>
                    <Icon src={downArrow}>

                    </Icon>
                </div>
                {isContextForm && <div className={Style.LoginContextWrapper}>
                    <LoginContext>

                    </LoginContext>
                </div>}

            </div>
        </div>
    )
}

export default Header;