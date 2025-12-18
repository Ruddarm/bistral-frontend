
import Style from "./MainLayout.module.css";

import SideBar from "../components/sidebar/SideBar";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
    // console.log("fuck")
    return (
        <>

            <div className={Style.mainLayoutContainer}>
                <Header></Header>
               <div className={Style.mainLayoutWrapper}>
                    <div className={Style.mainLayoutSideBarContainer}>
                        <SideBar>
                        </SideBar>
                    </div>
                    {children}
               </div>
            </div>
        </>
    )
}

export default MainLayout



// const orders = [
// ]


//   {/* <div className={Style.mainLayoutOrderTableContainer}>
//                     <div className={Style.mainLayoutOrderTableContainerInner}>
//                         <div clas
                        
//                         sName={Style.titleContainer}>
//                             <h1 style={{ color: "var(--cool-dark-grey)", padding: "1rem" }}>Bistral Order Manager</h1>
//                         </div>
//                         <div className={Style.orderTableContainer}>
//                             {orders.map((order, key) => <OrderCard key={key} order={order} createOrder={() => handelCreateOrder({ tableId: order.tableId, tableNo: order.tableNo, orderType: "DineIN" })} openOrderSideBar={() => { OpenSideBar(order) }}></OrderCard>)}
//                         </div>
//                     </div>
//                 </div>
//                 <MenuItemsProvider initialMenuId={"68bc2551-1f02-4778-bd23-9213fcd78441"}>
//                     {orderSideBar && (<OrderSideBar currentOrder={structuredClone(openOrder)} closeSideBarFun={() => { OpenSideBar(undefined) }}></OrderSideBar>)}
//                 </MenuItemsProvider> */}
//                 {/* <OrderLayout></OrderLayout> */}
//                 {/*                 
//                 <MenuCardProvider bistroIdArg={"29738d6b-69f5-40df-9486-7639f42934e0"} menuIdArg={"a0ec3043-436e-4577-b874-8ad7fe7c7098"}>
//                     <MenuCardLayout></MenuCardLayout>
//                 </MenuCardProvider> */}
//                 {/* <MenuProvider userIdArg={"1a649890-f608-483d-9ff2-4fe56bb231f4"}>
//                     <MenuLayout></MenuLayout>
//                 </MenuProvider> */}