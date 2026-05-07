import { createContext, useState, useEffect } from "react";
import { getAllBistros } from "../../api/bistros/bistrosApi";
import { createOrder, getOrders } from "../../api/orders/orderApi";
import { getAllZones } from "../../api/bistros/branchApi";

const OrderListContext = createContext();

function OrderListProvider({ children }) {

    // // const [bistros, setBistros] = useState([]);
    // const [branches, setBranches] = useState([]);
    const [zones, setZones] = useState([]);

    // const [activeBistro, setActiveBistro] = useState(null);
    // const [activeBranch, setActiveBranch] = useState(null);
    const [activeZone, setActiveZone] = useState(null);

    const [orders, setOrders] = useState([]);
    const [openOrder, setOpenOrder] = useState({});
    const [orderSideBar, setOrderSideBar] = useState(false);

    // const [isBistroSelected, setIsBistroSelected] = useState(true);

    // 📌 1. Fetch BISTROS on first load
    // useEffect(() => {
    //     fetchBistros();
    // }, []);

    // const fetchBistros = async () => {
    //     try {
    //         const res = await getAllBistros();
    //         setBistros(r es.data || []);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    useEffect(() => {
        // if (!bistros || bistros.length === 0) return;

        // const savedBistroId = localStorage.getItem("activeBistroId");
        // const savedBranchId = localStorage.getItem("activeBranchId");
        // const savedZoneId = localStorage.getItem("activeZoneId");

        // if (savedBistroId) {
        //     const foundBistro = bistros.find(b => b.bistroId === savedBistroId);

        //     if (foundBistro) {
        //         handelBistroSelction(foundBistro);

        //         // Restore branch
        //         if (savedBranchId) {
        //             const foundBranch = foundBistro.branchResponses.find(br => br.branchId === savedBranchId);
        //             // if (foundBranch) {
        //             //     setActiveBranch(foundBranch);
        //             // }
        //         }
        //     }
        // }
    }, [])
    const handelBistroSelction = (bistro) => {
        setActiveBistro(bistro);
        localStorage.setItem("activeBistroId", bistro.bistroId)
        const branchList = bistro.branchResponses || [];
        setBranches(branchList);
        if (branchList.length > 0) {
            localStorage.setItem("activeBranchId", branchList[0].branchId);
            setActiveBranch(branchList[0]);
        }
        setIsBistroSelected(true);
    };

    useEffect(() => {
        // if (!activeBistro?.bistroId || !activeBranch?.branchId) return;
        fetchZones();
    }, []);

    const fetchZones = async () => {
        try {
            const res = await getAllZones();
            setZones(res.data || []);
            if (res.data?.length > 0) {
                const savedZoneId = localStorage.getItem("activeZoneId");
                if (savedZoneId) {
                    const zx = res.data.find(z => z.zoneId === savedZoneId);
                    if (zx) {
                        setActiveZone(zx);
                        return;
                    }
                } else
                    setActiveZone(res.data[0]);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchActiveOrders();
    }, []);

    const fetchActiveOrders = async () => {
        try {
            const res = await getOrders('425b913d-7555-417b-a657-86122054552f');
            console.log(res)
            setOrders(res.data || []);
        } catch (e) {
            console.log(e);
        }
    };

    // const handelBranchSelection = (branch) => {
    //     setActiveBranch({ branchId: branch.value, branchName: branch.label });
    //     localStorage.setItem("activeBranchId", branch.value);
    //     localStorage.removeItem("activeZoneId")

    // }

    // const handelZoneSelection = (zone) => {
    //     setActiveZone({ zoneId: zone.value, zoneName: zone.label });
    //     localStorage.setItem("activeZoneId", zone.value)
    // };

    // const handelPrevBtnClick = () => {
    //     setActiveBistro(null);
    //     setActiveBranch(null);
    //     setActiveZone(null);
    //     localStorage.removeItem("activeBranchId")
    //     localStorage.removeItem("activeBistroId")
    //     localStorage.removeItem("activeZoneId")
    //     setOrders([]);
    //     setIsBistroSelected(false);
    // };

    const handelCreateOrder = async (order) => {
        try {
            await createOrder({
                ...order,
                orderType: "DINE_IN",
            });

            fetchActiveOrders();
        } catch (e) {
            console.log(e);
        }
    };

    const OpenSideBar = (order) => {
        setOpenOrder(order);
        setOrderSideBar(!orderSideBar);
    };

    return (
        <OrderListContext.Provider value={{
            // states
            // bistros,
            //  branches,
              zones,
            // activeBistro, activeBranch, activeZone,
            orders, openOrder, orderSideBar,
            //  isBistroSelected,
            // handlers
            // handelBistroSelction,
            // handelBranchSelection,
            // handelZoneSelection,
            // handelPrevBtnClick,
            handelCreateOrder,
            OpenSideBar,
        }}>
            {children}
        </OrderListContext.Provider>
    );
}

export default OrderListContext;
export { OrderListProvider };
