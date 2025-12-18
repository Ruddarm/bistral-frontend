import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import Style from "./DashboardHomeUI.module.css";

function BistralAreaChart({ data, dataKey }) {
    // console.log(data)
    return (
        <AreaChart 
            data={data} 
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            // width={500}
            // height={300}
        >

            {/* Gradient must be INSIDE the chart */}
            <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4B5563" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#4B5563" stopOpacity={0.05} />
                </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="4" />
            <XAxis dataKey={"hour"} tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} />
            <Tooltip />

            <Area
                type="natural"
                dataKey="count"
                stroke="#4B5563"
                strokeWidth={3}
                fill="url(#revGrad)"
            />
        </AreaChart>
    );
}

export default BistralAreaChart;
