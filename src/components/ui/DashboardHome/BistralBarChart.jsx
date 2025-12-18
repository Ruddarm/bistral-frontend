import Style from "./DashboardHomeUI.module.css"
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

function BistralBarChart({ data, xAxis, }) {
    return (
        <>
            <BarChart data={data} className={Style.lineChart} >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey={xAxis} tick={{ fontSize: 12 , fontWeight:600 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar fill="#4B5563" className={Style.line} barSize={40} radius={[6, 6, 0, 0]} type="monotone" dataKey="count" stroke="#4B5563" strokeWidth={1.2} dot={{ r: 1 }} />
            </BarChart>
        </>
    )
}

export default BistralBarChart;