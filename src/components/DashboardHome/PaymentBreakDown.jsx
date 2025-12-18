import { ResponsiveContainer } from "recharts";
import BistralDoughnutChart from "../ui/DashboardHome/BistralDoughnutChart";
import ChartContainer from "../ui/DashboardHome/ChartContainer";
import Style from "./DashBoard.module.css"
import { useContext, useEffect, useState } from "react";
import AnyalticsContext from "../../hooks/Analytics/AnalyticsContext";
import { getPaymentModeDistribution } from "../../api/Dashboard/AnalyticsApi";


function PaymentBreakDown({ paymentData }) {
    const [data, setData] = useState([])
    const { selectedRange , bistroIdString } = useContext(AnyalticsContext)

    useEffect(() => {
        const fetchPaymentDistribution = async () => {
            const res = await getPaymentModeDistribution(bistroIdString, selectedRange.value);
            // console.log(res)
            setData(res.data);
        }
        fetchPaymentDistribution();
    }, [selectedRange,bistroIdString]

    );

    const COLORS = ["#36A2EB", "#FFCE56", "#FF6384"];

    return (
        <div className={Style.PaymentBreakDownContainer}>
            <ChartContainer
                chartTitle={"Payment Break Down"}
                chartSubTitle={"Distribution Of Payment Modes"}
            >
                <ResponsiveContainer className={Style.responsiveContainer}>
                    <BistralDoughnutChart
                        data={data}
                        
                        COLORS={COLORS}
                    >
                    </BistralDoughnutChart>
                </ResponsiveContainer>
            </ChartContainer>
        </div>

    );
}


export default PaymentBreakDown;