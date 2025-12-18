

import Icon from "../ui/Icons"
import PrintIcon from "../../assets/printer.png"
import TickIcon from "../../assets/check.png"
import Style from "./Payment.module.css"
import CashIcon from "../../assets/money-bill-wave.svg"
import MobileIcon from "../../assets/mobile-button.svg"
function PaymentItemCard({ item, idx }) {
    return (<div className={Style.paymentTabItemTableRow}>
        <div className={`${Style.paymentItemCol} ${Style.itemSr}`}>
            {idx}
        </div>
        <div className={`${Style.paymentItemCol} ${Style.itemName}`} >
            {item.itemName}&nbsp;({item.variantName})
        </div>
        <div className={`${Style.paymentItemCol} ${Style.paymentItemQty}`}>
            {item.orderedQty}
        </div>
        <div className={`${Style.paymentItemCol} ${Style.paymentItemPrice}`}>
            {item.price}
        </div>
        <div className={`${Style.paymentItemCol} ${Style.netAmt}`}>
            {item.price * item.orderedQty}
        </div>
    </div>)
}
function PaymentTab({ paymentHandler, openOrder, paymentMode, updatePaymentMode }) {
    // console.log("open order is ", openOrder)
    // console.log(paymentMode)
    return (
        <>
            <div className={Style.paymentTab}>
                <div className={Style.paymentTabItemContainer}>
                    <div className={Style.orderDetailsContainer}>
                        <span>
                            Order Number : {102}
                        </span>
                        <span>
                            Created Date : { }
                        </span>
                        <span>
                            Create Time : { }
                        </span>
                        <span>
                            Table No : {openOrder.tableNo}
                        </span>
                    </div>
                    <div className={`${Style.paymentTabItemTableRow} ${Style.paymentTabItemTableRowHeader}`}>
                        <div className={`${Style.paymentItemCol} ${Style.itemSr}`}>
                            Sr
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.itemName}`} >
                            Item Name
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.paymentItemQty}`}>
                            Qty
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.paymentItemPrice}`}>
                            Price
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.netAmt}`}>
                            Net Amt
                        </div>
                    </div>
                    {openOrder.orderItemList.map((item, idx) => (<PaymentItemCard item={item} idx={idx + 1}></PaymentItemCard>))}
                    <span className={`${Style.summaryTitle}`}>
                        Tax Detials
                    </span>
                    <div className={`${Style.taxDetailRow} ${Style.paymentTabItemTableRowHeader}`}>
                        <div className={`${Style.paymentItemCol} ${Style.itemSr}`}>
                            Tax
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.itemSr}`}>
                            Tax Amount
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.itemName}`} >
                            Tax Rate (%)
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.paymentItemQty}`}>
                            CGST
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.paymentItemPrice}`}>
                            SGST
                        </div>
                        <div className={`${Style.paymentItemCol} ${Style.netAmt}`}>
                            Tax
                        </div>
                    </div>

                </div>
                <div className={Style.paymentSummaryContainer}>
                    <div className={Style.paymentSummary}>
                        <div className={`${Style.amountDispaly} `}>
                            <span className={Style.amountTitle}>Taxable Amount </span>
                            <span className={Style.amount}> {openOrder.taxableAmount}</span>
                        </div>
                        <div className={`${Style.amountDispaly} `}>
                            <span className={Style.amountTitle}>Discount  </span>
                            <span className={Style.amount}> {openOrder.tax || 0}</span>
                        </div>
                        <div className={`${Style.amountDispaly} ${Style.borderBottom}`}>
                            <span className={Style.amountTitle}>Tax Amount </span>
                            <span className={Style.amount}> {openOrder.discount}</span>
                        </div>
                        <div className={`${Style.amountDispaly} `}>
                            <span className={`${Style.amountTitle} ${Style.totalAmt}`}>Total Amount </span>
                            <span className={`${Style.amount} ${Style.totalAmt}`}> {openOrder.taxableAmount}</span>
                        </div>
                    </div>
                </div>
                {openOrder.paymentResponseList &&
                    <>
                        <div style={{ marginTop: "10px" }} className={Style.paymentSummaryContainer}>
                            <div className={Style.paymentSummary}>
                                {openOrder.paymentResponseList.map((payment) => (
                                    <div className={`${Style.amountDispaly} `}>
                                        <span className={`${Style.amountTitle} `}>{payment.paymentMode}</span>
                                        <span className={`${Style.amount}`}> {payment.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>}
                {openOrder.paymentStatus != "PAID" && <div className={`${Style.choosePaymentContainer}`}>
                    <span className={`${Style.summaryTitle}`} >Choose Payment Method</span>
                    <div className={`${Style.PaymentOptionContainer}`}>
                        <button className={`${Style.paymentOptionBtn} ${paymentMode.cash ? Style.paymentOptionBtnActive : ""}`} onClick={() => { updatePaymentMode("cash") }}>
                            {/* <Icon src={CashIcon}></Icon> */}
                            Cash</button>
                        <button className={`${Style.paymentOptionBtn} ${paymentMode.upi ? Style.paymentOptionBtnActive : ""}`} onClick={() => { updatePaymentMode("upi") }}>
                            {/* <Icon src={MobileIcon}></Icon> */}
                            UPI</button>
                        <button className={`${Style.paymentOptionBtn} ${paymentMode.card ? Style.paymentOptionBtnActive : ""}`} onClick={() => { updatePaymentMode("card") }}>Card</button>
                    </div>
                </div>}
                <div className={`${Style.completePaymentContainer} `}>
                    <div className={Style.paymentBtnContainer}>
                        <button className={Style.paymentCompleteBtn}>
                            <Icon src={PrintIcon}></Icon>
                            Invoice
                        </button>
                    </div>
                    {openOrder.paymentStatus != "PAID" &&

                        <div className={Style.paymentBtnContainer}>
                            <button onClick={paymentHandler} className={Style.paymentCompleteBtn}>
                                <Icon src={TickIcon}></Icon>
                                Complete
                            </button>
                        </div>

                    }
                </div>
            </div >
        </>
    )
}
export default PaymentTab;