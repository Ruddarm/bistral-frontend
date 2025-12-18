import { useParams } from "react-router-dom";
import BistroLayout from "../../layouts/BistroLayout";
import MainLayout from "../../layouts/MainLayout";
import { BistroProvider } from "../../hooks/Bistros/BistroContext";

function BistroPage() {
    const { bistroId, menuId } = useParams();
    // console.log(bistroId)
    return (
        <MainLayout>
            <BistroProvider bistroIdArg={bistroId}  >
                <BistroLayout></BistroLayout>
            </BistroProvider>
        </MainLayout>
    )
}

export default BistroPage;