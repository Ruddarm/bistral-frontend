
import Icon from "./Icons";
import Style from "./UI.module.css"

function CloseBarTitle({ showIcon = true, src, title }) {
    return (
        <div className={Style.closeBarTitleContainer}>
            {showIcon && <Icon id={Style.closeBarIcon} src={src}></Icon>}
            {title}
        </div>
    )
}

export default CloseBarTitle;