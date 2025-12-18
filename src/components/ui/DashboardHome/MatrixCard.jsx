import Icon from "../Icons";
import Style from "./DashboardHomeUI.module.css"

function MatrixCard({ iconSrc, matrixData, matrixTitle, rs }) {
    return (
        <div className={Style.matrixCard}>
            <div className={Style.matrixIconContainer}>
                <Icon id={Style.matrixIcon} src={iconSrc}></Icon>
            </div>
            <div className={Style.matrixContent}>
                <span className={Style.matrixData}>{
                    rs && <>
                        &#8377;
                    </>}{matrixData}</span>
                <span className={Style.matrixTitle}>{matrixTitle}</span>
            </div>
        </div>
    )
}

export default MatrixCard;