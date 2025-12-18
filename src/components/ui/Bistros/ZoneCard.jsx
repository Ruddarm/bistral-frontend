import Icon from "../Icons";
import LayoutTitle, { SubPara } from "../Titles";
import Style from "./BranchUI.module.css"

import penIcon from "../../../assets/pen.png"
import DeleteIcon from "../../../assets/delete.png"
import SettingIcon from "../../../assets/settings.png"
import ZoneIcon from "../../../assets/zones.png"
import { useState } from "react";
import AddZone from "../../Bistros/AddZoneComponenet";

function ZoneCard({ zone , branchId }) {
    // console.log(zone)
    const [configZone,setConfigZone] = useState(false)
    // console.log(zone)
    return (
        <>
            {configZone && <AddZone
            zone={{...zone}}
            branchId={branchId}
             closeFun={()=>setConfigZone(!configZone)}
            ></AddZone>}
            <div className={Style.zoneCard}>
                <div className={Style.zoneCardHeader}>
                    <Icon id={Style.zoncCardIcon} src={ZoneIcon}> </Icon>
                    <LayoutTitle title={zone.zoneName}></LayoutTitle>
                    <div className={Style.zoneOptionContainer}>
                        {/* <button className={Style.tranparentBtn}>
                            <Icon src={penIcon}></Icon>
                        </button>
                        <button className={Style.tranparentBtn}>
                            <Icon src={DeleteIcon}></Icon>
                        </button> */}
                        <button
                            onClick={()=>setConfigZone(!configZone)}
                            className={Style.tranparentBtn}>
                            <Icon src={SettingIcon} ></Icon>
                        </button>
                    </div>
                </div>
                <div className={Style.tableConfiguration}>
                    <div className={Style.tableConfigHeader}>
                        <SubPara para={"Table Configuration"}></SubPara>


                    </div>
                    <div className={Style.tableCardContainer}>
                        {zone.tableResponses.map((table) => (<>
                            <div className={Style.tableBlock}>
                                {table.tableNo}
                            </div>
                        </>))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default ZoneCard;