import Header from "../components/Header/Header";
import MenuProvider from "../hooks/menu/useMenus";
import MainLayout from "../layouts/MainLayout";
import MenuLayout from "../layouts/MenuLayout";


const HomePage = ({ children }) => {

    return (
        <>
            {/* <MainLayout>
                <MenuProvider userIdArg={"1a649890-f608-483d-9ff2-4fe56bb231f4"}>
                    <MenuLayout></MenuLayout>
                </MenuProvider>
            </MainLayout> */}

            {children}
        </>
    )
}
export default HomePage;
