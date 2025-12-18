import Style from "./MenuUI.module.css"
import penIcon from "../../../assets/pen.png"

function VariantEditButton({onClick}) {
    // console.log(onClick)
    return (
        <button onClick={onClick} className={`${Style.menuItemVariantOptionBtn}`}>
            <img id={`${Style.variantOptionIcon}`} src={penIcon}></img>
        </button>
    )
}

export default VariantEditButton;