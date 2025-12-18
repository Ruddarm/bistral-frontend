import { useContext } from "react";
import RecentOrderCard from "../ui/DashboardHome/RecentOrderCard";
import LayoutTitle from "../ui/Titles";
import Style from "./DashBoard.module.css"
import AnyalticsContext from "../../hooks/Analytics/AnalyticsContext";
import { getRevenueTrend } from "../../api/Dashboard/AnalyticsApi";


function RecentOrders() {
    const { recentOrders } = useContext(AnyalticsContext)
  
    return (
        <div className={Style.recentOrderContainer}>
            <div className={Style.recentOrderHeader}>
                <LayoutTitle title={"Recent Orders"}></LayoutTitle>
                <button className={Style.recentViewAll}>View All</button>
            </div>
            <div className={Style.recentOrderCardContainer}>
                {recentOrders.map((order) => (
                    // <RecentOrders></RecentOrders>
                    <RecentOrderCard recentOrder={order}></RecentOrderCard>
                ))}
            </div>
        </div>
    )
}

export default RecentOrders;