import { useNavigate } from "react-router-dom";
import PrevButton from "../components/ui/PrevButton";
import LayoutTitle, { LayoutTitleTwo, SubPara } from "../components/ui/Titles";
import Style from "./BistroLayout.module.css"
import BranchContainer from "../components/Bistros/BranchContainer";
import { useContext } from "react";
import BistroContext from "../hooks/Bistros/BistroContext";
import BistroInfoContainer from "../components/Bistros/BistroInfoContainer";


function BistroLayout() {
    const naviGate = useNavigate();
    const handelPrevBtnClick = () => {
        naviGate("../bistro-manager")
    }
    const { bistro } = useContext(BistroContext);
    console.log(bistro)
    return (
        <div className={Style.bistroLayoutContainer}>
            <div className={Style.bistroInfContainer}>
                <div className={Style.flex}>
                    <PrevButton handelClick={handelPrevBtnClick}></PrevButton>
                    <LayoutTitleTwo title={bistro?.bistroName}></LayoutTitleTwo>
                </div>                
                <div className={Style.bistroInfoContainer}>
                    <BistroInfoContainer></BistroInfoContainer>
                </div>
            </div>

            <div className={Style.bistroBranchCOntainer}>
                <LayoutTitle title={"Select Branch"}></LayoutTitle>
                <SubPara para={"Select Branch or Create Branch To Modify"}></SubPara>
                <BranchContainer></BranchContainer>
            </div>

        </div>
    )
}

export default BistroLayout;