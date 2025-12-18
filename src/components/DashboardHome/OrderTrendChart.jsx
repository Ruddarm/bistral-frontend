import Style from "./DashBoard.module.css"

// import {lineChart}

import React, { useContext, useEffect, useState } from "react";
import {

  ResponsiveContainer,

} from "recharts";
import LayoutTitle, { SubPara } from "../ui/Titles";
import ChartContainer from "../ui/DashboardHome/ChartContainer";
import BistralBarChart from "../ui/DashboardHome/BistralBarChart";
import BistralAreaChart from "../ui/DashboardHome/BistralAreaChart";
import { getOrderTrend } from "../../api/Dashboard/AnalyticsApi";
import AnyalticsContext from "../../hooks/Analytics/AnalyticsContext";
export default function OrdersTodayWeekWidget() {
  const { selectedRange, bistroIdString } = useContext(AnyalticsContext)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({ today: [], week: [] });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      // console.log(bistroIdString)
      try {
        const res = await getOrderTrend(
          bistroIdString,
          selectedRange.value
        );

        const graphData = res.data.map((d) => ({
          hour: d.label,
          count: d.value
        }));
        setData(prev => ({ ...prev, today: graphData }));
      } catch (err) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedRange,bistroIdString]);

  return (
    <ChartContainer
      chartSubTitle={"Hourly breakdown for today or day wise for week"}
      chartTitle={"Order - Quick View"}
    >
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ResponsiveContainer className={Style.responsiveContainer}>
          <BistralBarChart
            data={data.today || []} // must be array
            xAxis="hour"
          />
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
}
