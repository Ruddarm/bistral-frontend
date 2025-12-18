import Style from "./MenuUI.module.css"
import downArrow from "../../../assets/down-arrow.png"
import upArrow from "../../../assets/upload.png"
function ItemDropDown() {
    return (
        <button className={`${Style.menuItemVariantOptionBtn}`}>
            <img id={`${Style.variantOptionIcon}`} src={downArrow}></img>
        </button>
    )
}

function ItemDropUP() {
    return (
        <button className={`${Style.menuItemVariantOptionBtn}`}>
            <img id={`${Style.variantOptionIcon}`} src={upArrow}></img>
        </button>
    )
}

export {ItemDropDown,ItemDropUP}