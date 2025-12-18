// import { Children } from "react"
import LayoutTitle, { SubPara } from "../Titles";
import Style from "./DashboardHomeUI.module.css"


function ChartContainer({ chartTitle, chartSubTitle, children }) {
    return (
        <div className={Style.chartContainer}>
            <div className={Style.chartTitleContainer}>
                <div>
                    <LayoutTitle title={chartTitle}></LayoutTitle>
                    <SubPara para={chartSubTitle }></SubPara>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex rounded-md bg-gray-100 p-1">
                    </div>
                </div>
            </div>
            <div className={Style.chartHolder} >
                {/* oh yes */}
                {children}
            </div>
        </div>
    )
}

export default ChartContainer;