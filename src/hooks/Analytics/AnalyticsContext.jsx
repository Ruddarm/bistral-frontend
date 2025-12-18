import { createContext, useEffect, useState } from "react"
import { getAllBistros } from "../../api/bistros/bistrosApi";
import { getRecentOrders } from "../../api/Dashboard/AnalyticsApi";

const AnyalticsContext = createContext()

function AnalyticsProvider({ children }) {
    const [range, setRange] = useState([
        { label: "Today", value: "TODAY" },
        { label: "7 Days", value: "LAST_7_DAYS" }
    ])
    const [selectedRange, setSelectedRange] = useState({ label: "Today", value: "TODAY" })
    const [bistros, setBistros] = useState([]);
    const [selectedBistros, setSelectedBistros] = useState([]);
    const [bistroIdString, setBistroIdString] = useState("");  // <-- IMPORTANT
    const [recentOrders, setRecentOrder] = useState([]);

    // Fetch Bistros
    const fetchBistroIds = async () => {
        const bistroRes = await getAllBistros("1a649890-f608-483d-9ff2-4fe56bb231f4");
        let list = bistroRes.data.map(b => ({
            bistroId: b.bistroId,
            bistroName: b.bistroName
        }));

        // Add ALL option
        list.unshift({ bistroId: "ALL", bistroName: "All" });
        console.log(list)
        setBistros(list);
        // Default -> ALL selected
        setSelectedBistros(list);

        // Create ID string (excluding ALL)
        const ids = list.filter(b => b.bistroId !== "ALL").map(b => b.bistroId);
        setBistroIdString(ids.join(","));
    };

    useEffect(() => {
        fetchBistroIds();
        fetchRecentOrder();
    }, []);

    const fetchRecentOrder = async () => {
        const recentOrderResponse = await getRecentOrders("234cf358-cba3-4c7b-a2e9-def641adef93")
        setRecentOrder(recentOrderResponse.data);
    };

    // 👇 HANDLE SELECTION LOGIC
    const handleBistroSelection = (selected) => {

        selected = selected.map(selected=>selected.value)
        // If user selects "All"
        if(selected.length==0) {selected.push("ALL")}
        console.log(selected)
        if (selected.includes("ALL")) {
            setSelectedBistros(bistros);
            const ids = bistros
                .filter(b => b.bistroId !== "ALL")
                .map(b => b.bistroId);

            setBistroIdString(ids.join(","));
            return;
        }


        // Otherwise (Normal selection)
        const filtered = bistros.filter(b => selected.includes(b.bistroId));
        setSelectedBistros(filtered);

        // Create ID string
        const onlyIds = filtered
            .filter(b => b.bistroId !== "ALL")
            .map(b => b.bistroId);

        setBistroIdString(onlyIds.join(","));
    }

    const handelRangeChange = (range) => {
        setSelectedRange(range)
    }

    return (
        <AnyalticsContext.Provider
            value={{
                selectedRange,
                bistros,
                selectedBistros,
                range,
                bistroIdString,
                handelRangeChange,
                handleBistroSelection,
                recentOrders
            }}
        >
            {children}
        </AnyalticsContext.Provider>
    )
}

export default AnyalticsContext;
export { AnalyticsProvider };
