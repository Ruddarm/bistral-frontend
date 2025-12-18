// import { useMenuItems } from "../../hooks/MenuSuggestionHook";
import { useState, useEffect } from "react";
import Style from "./order.module.css"
import OrderItemCard from "./orderItemCard";
import axios from "axios";
import OrderQtyOption from "./orderQtyOption";
import MenuSugestion from "./menuSuggestion";
import { useMenuItems } from "../../hooks/MenuSuggestionHook";
import { updateOrderItem } from "../../api/orders/orderApi";
import { useCurrentOrder } from "../../hooks/UseCurrentOrder";
import printerIcon from "../../assets/printer.png"
import Icon from "../ui/Icons";
function OrderManageMentTab({ currentOrder, closeSideBarFun, openOrder, newItems, updateOrder, increaseQty, decreaseQty, addItem, removeItem, removeNewItem, isModified , switchTab }) {
    // const { items, setQuery, query, suggestion } = useMenuItems();
    return (
        <>
            <div className={Style.orderManagementTabContainer}>
                {/* <div className={Style.menuSrchBarContainer}>
                    <input onChange={(e) => { setQuery(e.target.value) }} className={Style.menuSrchBar}
                        placeholder="Add Item"
                        value={query}
                    >
                    </input>
                    <div className={Style.itemSuggestionContainer}>
                        {suggestion && (<MenuSugestion addFun={addItem} itemList={items}></MenuSugestion>)}
                    </div>
                </div> */}
                <div className={Style.currentOrderTab}>
                    <span style={{ fontFamily: "poppins", fontSize: "1.5rem", padding: "0rem 0.5rem", color: "var(--cool-dark-grey)" }}>
                        Current Order
                    </span>
                    <div className={Style.itemCardContainer}>
                        {openOrder.orderItemList?.map((item, key) => (<OrderItemCard increaseQty={increaseQty} decreaseQty={decreaseQty} key={key} item={item} removeItem={removeItem}  ></OrderItemCard>))}
                        {newItems.items?.map((newItem, key) => (<OrderItemCard increaseQty={increaseQty} decreaseQty={decreaseQty} key={key} item={newItem} removeItem={removeNewItem}></OrderItemCard>))}
                    </div>
                </div>
                <div className={Style.currentOrderTab}>
                    <span style={{ fontFamily: "poppins", fontSize: "1.5rem", padding: "0rem 0.5rem", color: "var(--cool-dark-grey)" }}>
                        Order Summary
                    </span>
                    <div className={Style.orderSummaryContainer}>
                        <div className={Style.summaryTitleContainer}>
                            <span className={Style.summaryTitle}>Taxable Amount</span>
                            <span className={Style.summaryTitle}>{openOrder.taxableAmount}</span>
                        </div>
                        <div className={Style.summaryTitleContainer}>
                            <span className={Style.summaryTitle}>Tax</span>
                            <span className={Style.summaryTitle}>{openOrder.taxAmount}</span>
                        </div>
                        <div className={Style.summaryTitleContainer}>
                            <span className={Style.summaryTitle}>Discount</span>
                            <span className={Style.summaryTitle}>{openOrder.discount}</span>
                        </div>
                        <div className={Style.summaryTitleContainer}>
                            <span className={Style.summaryTitle}>Payable Amount</span>
                            <span className={Style.summaryTitle}>{openOrder.payableAmount}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.orderBottomTab}>
                {isModified ? <button className={Style.updateOrderBtn} onClick={updateOrder} >
                    Save
                </button>
                    :
                    <>
                        <div className={`${Style.flexCenter} ${Style.width100} ${Style.flexSpaceBetween}`}>
                            <button className={Style.orderBottomButton}>
                                <Icon id={Style.printIcon} src={printerIcon}></Icon>
                                View Bill</button>
                            <button className={Style.orderBottomButton} onClick={()=>{switchTab("paymentTab")}}>
                                Payment
                                
                            </button>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default OrderManageMentTab;