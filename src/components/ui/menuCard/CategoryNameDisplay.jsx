import Style from "./MenuUI.module.css"

function CateoryName({ name }) {
    return (
        <div className={Style.menuAlphabatesContainer}>
            <span id={Style.menuAlphabates}>{name}</span>
        </div>
    )
}

export default CateoryName;