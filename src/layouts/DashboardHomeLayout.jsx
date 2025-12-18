import DashBoardFilter from "../components/DashboardHome/DashBoardFilter";
import DashboardMatrix from "../components/DashboardHome/DashBoardMatrix";
import OrdersTodayWeekWidget from "../components/DashboardHome/OrderTrendChart";
import PaymentBreakDown from "../components/DashboardHome/PaymentBreakDown";
import RecentOrders from "../components/DashboardHome/RecentOrder";
import RevenueChart from "../components/DashboardHome/RevenueChart";
import { SubPara } from "../components/ui/Titles";
import Style from "./HomeLayout.module.css"


function DashboardHomeLayout() {
    return (
        <div className={Style.homeLayoutContainer}>
            <div className={Style.homeLayoutHeader}>
                <h1 className={Style.headerTitle}>Welcom Back, Ruddarm !</h1>
                <SubPara para={"Here is what happening your restraunt Today"}></SubPara>
            </div>
            <div className={Style.fitlerContainer}>
                <DashBoardFilter></DashBoardFilter>
            </div>
            <div className={Style.matrixCardContainer}>
                <DashboardMatrix></DashboardMatrix>
            </div>
            <div className={Style.analysisContainer}>
                <div className={Style.orderChartContainer}>
                    <div className={Style.gridContainer} style={{
                        // backgroundColor:"yellow",
                        width: "70%", height: "100%"
                    }}>
                        <OrdersTodayWeekWidget></OrdersTodayWeekWidget>
                        <RevenueChart></RevenueChart>

                    </div>
                    <div className={Style.flexContainer}>
                        <RecentOrders></RecentOrders>
                        <PaymentBreakDown paymentData={{}}>
                        </PaymentBreakDown>
                    </div>

                </div>
                <div className={Style.breakDownContainers}>

                </div>
                {/* <div className={Style.twoChartContainer}>

                </div> */}
            </div>
        </div>
    )
}


export default DashboardHomeLayout;