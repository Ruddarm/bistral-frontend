import Style from "./UI.module.css"

function CloseButton({onClick}) {
    return (
        <button  onClick={onClick} className={Style.closeBtn}>
            x
        </button>
    )
}


export default CloseButton;