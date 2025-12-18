

import Style from "./Ui.module.css"


function Icon({id,src}){
    return <img id={id} className={Style.icons} src={src}></img>
}

export default Icon;