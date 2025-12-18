import Style from "./MenuUI.module.css"
import binIcon from "../../../assets/delete.png"

function VariantDeleteButton({onclickFun}) {
    return (
        <button onClick={()=>{onclickFun()}} className={`${Style.menuItemVariantOptionBtn}`}>
            <img id={`${Style.variantOptionIcon}`} src={binIcon}></img>
        </button>
    )
}


export default VariantDeleteButton;