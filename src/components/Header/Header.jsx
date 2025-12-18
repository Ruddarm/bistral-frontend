import Style from "./Header.module.css"

function Header(){
    // console.log("redner header")
    return(
        <div className={Style.headerDiv}>
            <div className={Style.headerRightDiv}>
                <span id={Style.LogoTitle}>
                    Bistral 
                </span>
            </div>
            <div className={Style.headerLeftDiv}>

            </div>
        </div>
    )
}

export default Header;