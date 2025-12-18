import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import Style from "./DashboardHomeUI.module.css"

function BistralDoughnutChart({ data, COLORS }) {

    const total = data.reduce((acc, item) => acc + item.value, 0);

    const CustomLegend = ({ payload }) => {
        return (
            <ul className={Style.pieLegendUL}>
                {payload.map((entry, index) => (
                    <li key={index} className={Style.pieLegendLI}>
                        <div className={Style.legendCricle}>
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    backgroundColor: entry.color,
                                    borderRadius: "50%",
                                    marginRight: 8,
                                }}
                            />
                            {entry.payload.label}
                        </div>
                        <div>
                            – ₹{entry.payload.value}
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={Style.tooltipBox}>
                    <p>{payload[0].payload.label} – ₹{payload[0].value}</p>
                </div>
            );
        }
        return null;
    };

    const CenterLabel = ({ viewBox }) => {
        const { cx, cy } = viewBox;
        return (
            <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="18"
                fontWeight="600"
            >
                ₹{total}
            </text>
        );
    };

    return (
        <PieChart className={Style.pieChartContainer}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={100}
                dataKey="value"
                paddingAngle={2}
                labelLine={false}
            >
                {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
                <CenterLabel viewBox={{ cx: 100, cy: 400 }} total={total} />
            </Pie>

            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
        </PieChart>
    );
}

export default BistralDoughnutChart;
