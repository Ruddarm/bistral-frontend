import Icon from "./Icons"
import Style from "./UI.module.css"
import PrevIcon from "../../assets/prev.png"
function PrevButton({handelClick}){
    
    return <button onClick={handelClick} className={Style.prevBtn}>
        <Icon id={Style.prevIcon} src={PrevIcon}></Icon>
    </button>
}

export default PrevButton;