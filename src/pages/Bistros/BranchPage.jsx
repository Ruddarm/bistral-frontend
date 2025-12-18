import { useParams } from "react-router-dom";
import BranchMangerLayout from "../../layouts/BranchMangerLayout";
import MainLayout from "../../layouts/MainLayout";
import { BranchProvider } from "../../hooks/Bistros/BranchContext";


function BranchPage() {
    const { bistroId, branchId } = useParams();
    // console.log(bistroId,branchId)
    return (
        <>
            <MainLayout>
                <BranchProvider bistroIdArg={bistroId} branchIdArg={branchId}>
                    <BranchMangerLayout></BranchMangerLayout>
                </BranchProvider>
            </MainLayout>
        </>
    )
}

export default BranchPage;