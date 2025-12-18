import { useEffect, useState } from "react";
import Style from "./order.module.css"

import OrderManageMentTab from "./OrderManagement";
import { useCurrentOrder } from "../../hooks/UseCurrentOrder";
import PaymentTab from "./PaymentManagement";
import CloseButton from "../ui/CloseButton";
import MenuSugesstionComponent from "./MenuSuggestionComponent";
import OverlayContainer from "../ui/OverLayContainer";
import CloseBar from "../ui/CloseBar";
import CloseBarTitle from "../ui/CloseBarTitle";
import { MenuSuggestionProvider } from "../../hooks/menu/menuSuggestionContext";

function OrderSideBar({ activeBistro ,orderId, closeSideBarFun }) {
    console.log(orderId)
    const { openOrder, newItems, updateOrder, increaseQty, decreaseQty, addItem, removeItem, removeNewItem, isModified, currentTab, switchTab, paymentMode, updatePaymentMode, paymentHandler } = useCurrentOrder(orderId)
    return (
        <>
            <div className={Style.orderSideBarContainer}>
                <div className={Style.MenuSuggestionContainer}>
                    <MenuSuggestionProvider bistroIdArg={activeBistro.bistroId} addItemFun={addItem} >
                        <MenuSugesstionComponent></MenuSugesstionComponent>
                    </MenuSuggestionProvider>
                </div>
                <div className={Style.orderManagementTab}>
                    <div className={Style.orderManagementTabHeader}>
                        {/* <div>
                                <span style={{ fontFamily: "poppins", fontSize: "1.5rem", padding: "0.5rem 1rem", color: "var(--cool-dark-grey)" }}>
                                    Table {openOrder.tableNo}
                                </span>
                            </div>
                            <div>
                            </div> */}
                        <CloseBar >
                            <CloseBarTitle showIcon={false} title={`Table ${openOrder.tableNo}`}  ></CloseBarTitle>
                            <CloseButton onClick={closeSideBarFun}></CloseButton>
                        </CloseBar>
                    </div>
                    {currentTab.orderTab && <OrderManageMentTab openOrder={openOrder} newItems={newItems}
                        updateOrder={updateOrder}
                        increaseQty={increaseQty}
                        decreaseQty={decreaseQty}
                        switchTab={switchTab}
                        addItem={addItem}
                        removeItem={removeItem}
                        removeNewItem={removeNewItem}
                        isModified={isModified}
                        closeSideBarFun={closeSideBarFun}></OrderManageMentTab>
                    }
                    {currentTab.paymentTab && <PaymentTab paymentHandler={paymentHandler} openOrder={openOrder} paymentMode={paymentMode} updatePaymentMode={updatePaymentMode}></PaymentTab>}
                </div>
            </div>
        </>

    )
}
export default OrderSideBar;