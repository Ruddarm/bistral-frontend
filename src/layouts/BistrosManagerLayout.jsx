import { useContext, useState } from "react";
import BistrosContainer from "../components/Bistros/BistrosContainer";
import OverlayContainer from "../components/ui/OverLayContainer";
import LayoutTitle, { SubPara } from "../components/ui/Titles";
import Style from "./BistroMangerLayout.module.css"
import LayoutHeader from "./LayoutHeader";
import BistroInfoContainer from "../components/Bistros/BistroInfoContainer";
// import { BistroContext } from "../hooks/Bistros/BistrosContext";

function BistroMangerLayout() {
    return (
        <LayoutHeader title={"Bistral Bistro Manager"}>
           
            <div className={Style.bistroManagerLayout}>
                <div className={Style.bistroMagnerLayoutTitleContainer}>
                    <LayoutTitle title={"Your Bistros"}></LayoutTitle>
                    <SubPara para={"Select bistro to manage bistro and branches"}></SubPara>
                </div>
                <div className={Style.bistroManagerBistroCardContainer}>
                    <BistrosContainer></BistrosContainer>
                </div>
            </div>
        </LayoutHeader>
    )
}


export default BistroMangerLayout;