import { useEffect, useState, createContext, useContext } from "react";
import { createMenuApi, getAllMenusApi } from "../../api/menus/menusApi";
import AuthContext from "../AuthenticationContext";



export const MenuContext = createContext();


function MenuProvider({ children}) {
    const { currentBistro } = useContext(AuthContext);
    const [menus, setMenus] = useState()
    const [bistroFilter, setBistroFilter] = useState(false);
    const [selectedBistro, setSelectedBistro] = useState("All")
    const [bistros, setBistros] = useState([{ bistroName: "All" }]);
    const [currentMenu,setCurrentMenu]= useState(null)
    const [createMenu, setCreateMenu] = useState(false)
    useEffect(() => {
        
        fetchALlMenus();
    }
        , []);

    const fetchALlMenus = async () => {
        const res = await getAllMenusApi();
        setMenus(res.data.data)
    }
    const handelCreateMenu = () => {
        // console.log("called")
        setCreateMenu(!createMenu)
    }
    const handelCreateNewMenu = async (menu) => {
        console.log(menu)
        try {
            const res = await createMenuApi(currentBistro.bistroId, menu);
            // console.log(res)
            fetchALlMenus();
            handelCreateMenu()

        }
        catch (ex) {
            console.log(ex)
        }
    }
    const handelBistroNameFilterSuggestion = () => {
        setBistroFilter(!bistroFilter);
    }
    const handelBistroNameFilter = () => {

    }
    return <MenuContext.Provider value={{ menus, handelBistroNameFilterSuggestion, bistroFilter, bistros, selectedBistro, handelCreateMenu, createMenu, handelCreateNewMenu , setCurrentMenu, currentMenu}}>
        {children}
    </MenuContext.Provider>
}

export default MenuProvider;