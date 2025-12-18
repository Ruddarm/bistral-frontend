import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import OrderLayout from "../layouts/OrderLayout";
import MenuLayout from "../layouts/MenuLayout";
import MenuProvider from "../hooks/menu/useMenus";
import { MenuItemsProvider } from "../hooks/MenuSuggestionHook";
import OrderSideBar from "../components/orders/orderSideBar";
import MenuCardProvider from "../hooks/menu/useMenuCard";
import MenuCardLayout from "../layouts/MenuCardLayout";
import MenuCardPage from "../pages/Menus/MenuCardPage";
import BistroMangerLayout from "../layouts/BistrosManagerLayout";
import BistroProvider from "../hooks/Bistros/BistrosContext";
import BistroLayout from "../layouts/BistroLayout";
import BistroPage from "../pages/Bistros/BistroPage";
import BistrosProvider from "../hooks/Bistros/BistrosContext";
import OrderPage from "../pages/Order/OrderPage";
import BranchPage from "../pages/Bistros/BranchPage";


function DashboardRouter() {
    return (
        <Routes>
            {<Route path="/order" element={
                <HomePage>
                    <OrderPage></OrderPage>
                </HomePage>}>
            </Route>}

            <Route path="/menu-manager" element={
                <HomePage>
                    <MainLayout>
                        <MenuProvider userIdArg={"1a649890-f608-483d-9ff2-4fe56bb231f4"}>
                            <MenuLayout></MenuLayout>
                        </MenuProvider>
                    </MainLayout>
                </HomePage>
            } />
            <Route path="/menu-manager/:bistroId/:menuId/:menuName"
                element={
                    <HomePage>
                        <MenuCardPage></MenuCardPage>
                    </HomePage>
                }
            />
            <Route path="/bistro-manager"
                element={
                    <HomePage>
                        <>
                            <MainLayout>
                                <BistrosProvider>
                                    <BistroMangerLayout></BistroMangerLayout>
                                </BistrosProvider>
                            </MainLayout>
                        </>
                    </HomePage>

                }
            />
            <Route
                path="/bistro-manager/:bistroId/:bistroName"
                element={<HomePage>
                    <BistroPage></BistroPage>
                </HomePage>}
            />
            <Route path="/bistro-manager/:bistroId/branch/:branchId/:branchName"
                element={
                    <BranchPage></BranchPage>
                }
            ></Route>
        </Routes>

    )

}

export default DashboardRouter;