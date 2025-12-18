import { createContext, useEffect, useState } from "react";
import { getBistro } from "../../api/bistros/bistrosApi";
import axios from "axios";
import { createBranch } from "../../api/bistros/branchApi";

const BistroContext = createContext()

function BistroProvider({ bistroIdArg, children }) {
    const [bistroId, setBistroId] = useState(bistroIdArg);
    const [bistro, setBistro] = useState({bistroName: ""})
    const [openCreateBranch, setOpenCreateBranch] = useState(false)
    useEffect(() => {
        fetchBistro(bistroId)
    },[bistroId])
    const fetchBistro = async (bistroId) => {
        try {
            console.log(bistroId)
            const bistroRes = await getBistro(bistroId);
            setBistro(bistroRes.data);
            // console.log(bistroRes.data)
        } catch (ex) {
            console.log(ex);
        }
    }
    const handelOpenCreateBranch = () => {
        setOpenCreateBranch(!openCreateBranch)
    }
    const handelCreateBranch =  async (branch) => {
        // console.log(branch)
        branch.bistroId= bistroId;
        try{
            const res =  await createBranch(bistroId,branch)
            console.log(res)
            fetchBistro(bistroId);
            handelOpenCreateBranch();
        }catch(e){
            console.log(e)
        }
    }
    return <BistroContext value={{bistro,openCreateBranch,handelOpenCreateBranch,handelCreateBranch}}>
        {children}
    </BistroContext>
}

export { BistroProvider };
export default BistroContext;