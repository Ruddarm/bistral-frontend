import { useContext } from "react";
import BistroBranchCard from "../ui/Bistros/BistroBranchCard";
import BistroBranchCardContainer from "../ui/Bistros/BistroBranchCardContainer";
import BistroCardContainer from "../ui/Bistros/BistrosCardContainer";
import CreateBtn from "../ui/CreateButton";
import Style from "./BistrosComponents.module.css"
import BistroContext from "../../hooks/Bistros/BistroContext";
import OverlayContainer from "../ui/OverLayContainer";
import AddBistroBranch from "./AddBistroBranchContainer";
import { useNavigate } from "react-router-dom";

function BranchContainer() {
    const { bistro, openCreateBranch, handelOpenCreateBranch } = useContext(BistroContext)
    const navigate = useNavigate();
    const handelClick = (branchId, branchName) => {
        navigate(`../bistro-manager/${bistro.bistroId}/branch/${branchId}/${branchName}`)
    }
    return (
        <div className={Style.branchContainer}>
            {openCreateBranch &&

                <OverlayContainer>
                    <AddBistroBranch></AddBistroBranch>
                </OverlayContainer>
            }
            {bistro.branchResponses?.map((branch) => (
                <BistroBranchCardContainer >
                    <BistroBranchCard handelClick={() => { handelClick(branch.branchId, branch.branchName) }} branch={branch}></BistroBranchCard>
                </BistroBranchCardContainer>
            ))}
            <BistroBranchCardContainer>
                <CreateBtn onClick={handelOpenCreateBranch}></CreateBtn>
            </BistroBranchCardContainer>

        </div>
    )
}

export default BranchContainer;