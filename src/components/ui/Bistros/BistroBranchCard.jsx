import Icon from "../Icons";
import Style from "./BistrosUI.module.css"
import Marker from "../../../assets/marker.svg"
import { useNavigate } from "react-router-dom";
function BistroBranchCard({ branch ,handelClick}) {

    return (
        <div className={Style.bistroBranchCard}>
            <div className={Style.branchNameContainer}>
                <Icon id={Style.markerIcon} src={Marker} ></Icon>
                <div className={Style.brancNameInner}>
                    <span className={Style.BranchNameTitle}>
                        {branch.branchName}
                    </span>
                    <span className={Style.branchLocation}>
                        {branch.location || "Seawoods"}
                    </span>
                </div>
            </div>
            <div className={Style.viewBranhContainer}>
                <button onClick={handelClick} className={Style.viewBranchBtn}>View Branch</button>
            </div>
        </div>
    )
}

export default BistroBranchCard;