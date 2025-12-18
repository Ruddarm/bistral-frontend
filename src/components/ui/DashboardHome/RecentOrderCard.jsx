import Style from "./DashboardHomeUI.module.css"


function RecentOrderCard({recentOrder}) {
    // console.log(recentOrder)
    return (

        <div className={Style.RecentOrderCardContainer}>
            <div className={Style.RecentOrderCardHeader}>
                <span className={Style.orderNoTag}>Ord-{recentOrder.orderNumber}</span>
                <div className={`${Style.flex} ${Style.spanTag}`}>
                    <span >{recentOrder.tableNumber}</span> 
                    &nbsp;&nbsp;&nbsp; • &nbsp;
                    <span>{recentOrder.itemCount} &nbsp;items</span>
                </div>
            </div>
            <div className={`${Style.flexRow} `}>
                <span className={Style.priceTag}>&#8377; {recentOrder.payableAmount}</span>
            </div>
        </div>
    )
}

export default RecentOrderCard;