import Style from "./OrderLayout.module.css"

import { useContext, useEffect, useState } from "react";
import OrderCard from "../components/orders/orderCard";
import OrderSideBar from "../components/orders/orderSideBar";
import LayoutHeader from "./LayoutHeader";
import BistroCardContainer from "../components/ui/Bistros/BistrosCardContainer";
import BistroCard from "../components/ui/Bistros/BistrosCard";
import LayoutTitle, { SubPara } from "../components/ui/Titles";
import PrevButton from "../components/ui/PrevButton";
import OrderListContext from "../hooks/Order/OrderListContext";
import ActiveOrderFilter from "../components/orders/ActiveOrderFilter";
import ActiveOrderManager from "../components/orders/AcitverOrderManager";
function OrderLayout() {

    const { orderSideBar,  handelPrevBtnClick, bistros, activeBistro, openOrder, isBistroSelected, handelBistroSelction, OpenSideBar, handelCreateOrder } = useContext(OrderListContext)
    return (
        <>
            {!isBistroSelected && <LayoutHeader title={"Bistral Order Manager"}>
                <div className={Style.bistroContainer}>
                    <LayoutTitle title={"Select Bistros"}></LayoutTitle>
                    <SubPara para={"Choose Bistros to manage active orders"}></SubPara>
                    <div className={Style.selectBistroContainer}>
                        {bistros?.map((bistro) => (
                            <BistroCardContainer key={bistro.bistroId}>
                                <BistroCard handleClick={() => { handelBistroSelction(bistro) }} bistro={bistro}></BistroCard>
                            </BistroCardContainer>
                        ))}
                    </div>
                </div>
            </LayoutHeader>}
            {isBistroSelected &&
                (
                    <>
                        <div className={Style.orderTableLayout}>
                            <div className={Style.orderTableLayoutHeader}>
                                <PrevButton handelClick={handelPrevBtnClick}></PrevButton>
                                <h1 className={Style.bistroTitle}>{activeBistro.bistroName}</h1>
                            </div>
                            <ActiveOrderManager></ActiveOrderManager>
                        </div>
                        {orderSideBar && (<OrderSideBar activeBistro={activeBistro} orderId={openOrder.orderId} closeSideBarFun={() => { OpenSideBar(undefined) }}></OrderSideBar>)}
                    </>
                )
            }
            {/* {orderSideBar && (<OrderSideBar currentOrder={structuredClone(openOrder)} closeSideBarFun={() => { OpenSideBar(undefined) }}></OrderSideBar>)} */}


            {/* <MenuItemsProvider initialMenuId={"68bc2551-1f02-4778-bd23-9213fcd78441"}>
            </MenuItemsProvider> */}
        </>
    )
}

export default OrderLayout;

