import BistroInfoContainer from "../components/Bistros/BistroInfoContainer";
import BranchInfoContainer from "../components/Bistros/BranchInfoContainer";
import Icon from "../components/ui/Icons";
import PrevButton from "../components/ui/PrevButton";
import LayoutTitle, { LayoutTitleTwo, SubPara } from "../components/ui/Titles";
import Style from "./BistroBranchLayout.module.css"
import MainLayout from "./MainLayout";

import AddZone from "../components/Bistros/AddZoneComponenet";
import FormInput from "../components/ui/formInput";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import BranchContext from "../hooks/Bistros/BranchContext";
import ZoneCard from "../components/ui/Bistros/ZoneCard";
import ZoneIcon from "../assets/zones.png"

function BranchMangerLayout() {

    const { zoneConfiguration } = useContext(BranchContext)
    const { zones, branch, handel, handleZoneConfiguration } = useContext(BranchContext)
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("called", data)
        handleCreateCategory(data)
    }
    return (
        <div className={Style.branchMangerContainer}>
            {zoneConfiguration && <AddZone closeFun={handleZoneConfiguration}></AddZone>}
            <div className={Style.branchMangerBackContainer}>
                <PrevButton></PrevButton>
                <LayoutTitleTwo title={branch.branchName}></LayoutTitleTwo>
            </div>
            <div className={Style.branchInfoContainer}>
                <BranchInfoContainer branch={branch}>

                </BranchInfoContainer>
            </div>
            <div className={Style.branchZoneContainer}>
                <div className={Style.branchZoneheadingContainer}>
                    <div className={Style.zoneIcon}>
                        <Icon src={ZoneIcon}></Icon>

                    </div>
                    <LayoutTitle title={"Zones"}></LayoutTitle>
                    <div className={Style.addZoneContainer}>
                        <button onClick={handleZoneConfiguration} className={Style.addZoneBtn}>
                            + Add Zone
                        </button>
                        {/* <div className={Style.addZoneForm}>
                            <FormInput
                                name={"zoneName"}
                                register={register}
                            ></FormInput>
                            <button className={Style.addZoneFormBtn}>Add Zone</button>
                        </div> */}
                    </div>
                </div>
                <div className={Style.zoneContainer}>
                    {zones.map((zone) => (
                        <ZoneCard
                            zone={zone}
                        ></ZoneCard>
                    ))
                    }
                </div>
            </div>

        </div>
    )
}

export default BranchMangerLayout;