import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import MenuCardProvider from "../../hooks/menu/useMenuCard";
import MenuCardLayout from "../../layouts/MenuCardLayout";


function MenuCardPage() {

    const { menuId, menuName } = useParams();
    return (
        <MainLayout>
            <MenuCardProvider menuIdArg={menuId} menuNameArg={menuName}>
                <MenuCardLayout></MenuCardLayout>
            </MenuCardProvider>
        </MainLayout>
    )

}

export default MenuCardPage;