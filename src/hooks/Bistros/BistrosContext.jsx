import { createContext, useEffect, useState } from "react";
import { createBistro, getAllBistros } from "../../api/bistros/bistrosApi";


const BistrosContext = createContext()

function BistrosProvider({ children, userId = "1a649890-f608-483d-9ff2-4fe56bb231f4" }) {
    console.log(userId)
    const [bistros, setBistros] = useState();
    const [openBistroForm, setOpenBistroForm] = useState(false);

    useEffect(() => {

        fetchBistros();
    }, [])
    const fetchBistros = async () => {
        try {
            const res = await getAllBistros(userId)
            setBistros(res.data);
            console.log(res)
        } catch (ex) {
            console.log(ex);
        }
    }

    const handelOpenBistroForm = () => {
        setOpenBistroForm(!openBistroForm);
    }

    const handelBistroCreate = async (bistro) => {
        try {
            bistro.userId = "1a649890-f608-483d-9ff2-4fe56bb231f4";
            const res = await createBistro(bistro);
            fetchBistros();
            handelOpenBistroForm();
            console.log(res)
        } catch (ex) {
            console.log(ex)
        }
    }
    return <BistrosContext.Provider value={{ bistros, openBistroForm, handelOpenBistroForm, setOpenBistroForm, handelBistroCreate }}>
        {children}
    </BistrosContext.Provider>
}

export { BistrosContext };
export default BistrosProvider;