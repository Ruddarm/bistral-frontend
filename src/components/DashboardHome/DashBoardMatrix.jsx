import MatrixCard from "../ui/DashboardHome/MatrixCard";
import Style from "./DashBoard.module.css"
import RsIcon from "../../assets/indian-rupee-sign.png"
import GrowthChart from "../../assets/growth-chart.png"
import DarkBell from "../../assets/bell-dark.png"
import { useContext, useEffect, useState } from "react";
import AnyalticsContext from "../../hooks/Analytics/AnalyticsContext";
import { getKpis } from "../../api/Dashboard/AnalyticsApi";

function DashboardMatrix() {
    const { bistroIdString ,selectedRange} = useContext(AnyalticsContext)
    const [kpis, setKpis] = useState({})

    useEffect(() => {
        const fetchApi = async () => {
            const kpiResponse = await getKpis(selectedRange.value,bistroIdString)
            setKpis(kpiResponse.data)
        }
        fetchApi()
    },[selectedRange,bistroIdString])

    // console.log(kpis)
    return (

        <div className={Style.dashboardMatrix}>
            <MatrixCard iconSrc={RsIcon} matrixTitle={"Today's Revenue"} matrixData={kpis.totalRevenue} rs={true}></MatrixCard>
            <MatrixCard iconSrc={DarkBell} matrixTitle={"Today Total Order"} matrixData={kpis.totalOrders || 0}></MatrixCard>
            <MatrixCard iconSrc={GrowthChart} matrixData={kpis.avgOrderValue?.toFixed(2)} rs={true} matrixTitle={"Avg Order Value"}></MatrixCard>
            {/* <MatrixCard></MatrixCard> */}
        </div>
    )
}

export default DashboardMatrix;