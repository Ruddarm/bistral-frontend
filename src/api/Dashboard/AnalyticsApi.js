import axios from "axios"



const getKpis = async (range, bistroIds, branchIds) => {
    return axios.get(`http://localhost:8085/analytics/kpi`
        , {
            params: {
                range: range,
                bistroIds: bistroIds,
                branchIds: branchIds
            }
        })
}

const getRecentOrders = async (bistroIds) => {
    return axios.get(`http://localhost:8085/analytics/recentOrder`,
        {
            params: {
                bistroIds: bistroIds
            }
        }
    )
}

const getOrderTrend = async (bistroIds, range) => {
    return await axios.get("http://localhost:8085/analytics/trend/order",
        {
            params: {
                bistroIds: bistroIds,
                range: range
            }
        }
    );
}
const getRevenueTrend = async (bistroIds, range) => {
    return await axios.get("http://localhost:8085/analytics/trend/revenue",
        {
            params: {
                bistroIds: bistroIds,
                range: range
            }
        }
    );
}

const getPaymentModeDistribution = async (bistroIds, range) => {
    return await axios.get("http://localhost:8085/analytics/trend/payment-mode",
        {
            params: {
                bistroIds: bistroIds,
                range: range
            }
        }
    );
}

export { getKpis, getRecentOrders, getOrderTrend, getRevenueTrend , getPaymentModeDistribution }