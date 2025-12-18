import { useContext } from "react";
import SingleSelect from "../ui/FilterSelect";
import Style from "./order.module.css"
import OrderListContext from "../../hooks/Order/OrderListContext";
import Icon from "../ui/Icons";
import MarkerIcon from "../../assets/marker.svg"
import ZoneIcon from "../../assets/zones.png"
function ActiveOrderFilter() {
    const { branches, handelBranchSelection, activeBranch, handelZoneSelection, zones, activeZone } = useContext(OrderListContext)
    // console.log(branches)
    return (

        <div className={Style.filterContainer}>
            <div className={Style.selectContainer}>
                <Icon
                    src={ZoneIcon}
                ></Icon>
                <SingleSelect
                    options={zones.map((z) => ({ label: z.zoneName, value: z.zoneId }))}
                    onChange={(e) => { handelZoneSelection(e) }}
                    value={{ label: activeZone?.zoneName, value: activeZone?.zoneId }}
                >
                </SingleSelect>
            </div>
            <div className={Style.selectContainer}>

                <Icon src={MarkerIcon}></Icon>
                <SingleSelect
                    onChange={(branch) => { handelBranchSelection(branch) }}
                    value={{ label: activeBranch.branchName, value: activeBranch.branchId }}
                    options={branches.map((b) => ({ label: b.branchName, value: b.branchId }))}
                    placeholder={"Select Branch"}
                ></SingleSelect>
            </div>
        </div>
    )
}

export default ActiveOrderFilter;