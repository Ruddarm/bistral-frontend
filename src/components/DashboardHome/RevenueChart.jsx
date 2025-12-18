import Style from "./DashBoard.module.css"

// import {lineChart}

import React, { useContext, useEffect, useState } from "react";
import {

  ResponsiveContainer,

} from "recharts";
import ChartContainer from "../ui/DashboardHome/ChartContainer";
import BistralAreaChart from "../ui/DashboardHome/BistralAreaChart";
import { getRevenueTrend } from "../../api/Dashboard/AnalyticsApi";
import AnyalticsContext from "../../hooks/Analytics/AnalyticsContext";



export default function RevenueChart({ fetchUrl = "/api/dashboard/orders", autoFetch = true, data: externalData = null, className = "" }) {
  const [view, setView] = useState("today"); // 'today' | 'week'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { selectedRange, bistroIdString } = useContext(AnyalticsContext)
  const [data, setData] = useState({ today: [], week: [] });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getRevenueTrend(
          bistroIdString,
          selectedRange.value
        );

        const graphData = res.data.map((d) => ({
          hour: d.label,
          count: d.value
        }));
        // console.log(graphData)

        setData(prev => ({ ...prev, today: graphData }));
      } catch (err) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedRange, bistroIdString]);
  return (
    <ChartContainer chartTitle={"Revenue"} chartSubTitle={"Day wise  breakdown for Revenue"}>
      <ResponsiveContainer className={Style.responsiveContainer}>
        {/* <BistralBarChart
          data={todayData}
          dataKey={"hour"}
        >
        </BistralBarChart> */}
        <BistralAreaChart data={data.today} key={"hour"}></BistralAreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

// export default OrderChart;
