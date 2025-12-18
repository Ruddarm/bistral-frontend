import Style from "./Ui.module.css"

function CloseBar({ children }) {
    return (
        <>
            <div className={Style.CloseBarContainer}>
                {children}
            </div>
        </>
    )
}

export default CloseBar;