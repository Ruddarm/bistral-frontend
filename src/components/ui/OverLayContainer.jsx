import { Children } from "react";
import Style from "./UI.module.css"

function OverlayContainer({children}){
    return(
        <div className={Style.overlayContainer}>
            {children}
        </div>
    )
}

export default OverlayContainer;