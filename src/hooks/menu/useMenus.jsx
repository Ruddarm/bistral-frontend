import { useEffect, useState, createContext } from "react";
import { createMenuApi, getAllMenusApi } from "../../api/menus/menusApi";



export const MenuContext = createContext();


function MenuProvider({ children, userIdArg }) {
    const [userId, setUserId] = useState(userIdArg);
    const [menus, setMenus] = useState()
    const [bistroFilter, setBistroFilter] = useState(false);
    const [selectedBistro, setSelectedBistro] = useState("All")
    const [bistros, setBistros] = useState([{ bistroName: "All" }]);
    const [createMenu, setCreateMenu] = useState(false)
    useEffect(() => {

        fetchALlMenus();
    }
        , []);

    const fetchALlMenus = async () => {
        const res = await getAllMenusApi(userId);
        setMenus(res.data)
        setBistros([...bistros, ...res.data.map(item => ({
            bistroId: item.bistroId,
            bistroName: item.bistroName
        }))]);
        //   console.log(res)
    }
    const handelCreateMenu = () => {
        // console.log("called")
        setCreateMenu(!createMenu)
    }
    const handelCreateNewMenu = async (menu) => {
        try {
            const res = await createMenuApi(menu.bistroId, menu);
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
    return <MenuContext.Provider value={{ menus, handelBistroNameFilterSuggestion, bistroFilter, bistros, selectedBistro, handelCreateMenu, createMenu, handelCreateNewMenu }}>
        {children}
    </MenuContext.Provider>
}

export default MenuProvider;