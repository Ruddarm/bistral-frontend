import { createTable, getAllZones, getBranch } from "../../api/bistros/branchApi";
import { createContext, useState, useEffect, Children } from "react";
// const { createContext, useState, useEffect } = require("react");


const BranchContext = createContext()

const BranchProvider = ({ bistroIdArg, branchIdArg, children }) => {
    const [bistroId, setBistroId] = useState(bistroIdArg)
    const [branchId, setBranchId] = useState(branchIdArg)
    const [branch, setBranch] = useState({})
    const [zones, setZones] = useState([])
    const [zoneConfiguration, setZoneConfiguration] = useState(false)
    const fetchBranch = async () => {
        const res = await getBranch(bistroId, branchId)
        const zonesResponse = await getAllZones(bistroId, branchId)
        setBranch(res.data)
        setZones(zonesResponse.data)
    }
    useEffect(() => {
        fetchBranch()
    }, [])
    const handleZoneConfiguration = () => {
        setZoneConfiguration(!zoneConfiguration)
    }


    return (
        <BranchContext.Provider
            value={{ zoneConfiguration, handleZoneConfiguration, branch, zones, branchId,bistroId }}
        >
            {children}
        </BranchContext.Provider>
    )
}


export default BranchContext;

export { BranchProvider }