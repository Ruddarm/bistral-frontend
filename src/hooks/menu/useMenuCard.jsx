import { useEffect, useState } from "react";
// import { createMenuItems, getMenuCard } from "../../api/menus/menuItemApi";
import { createContext } from "react";
import { createCategory, getAllCategory } from "../../api/menuCard/menuCategoryAPI";
import { createMenuItems, getMenuCard } from "../../api/menuCard/menuItemApi";

export const MenuCardContext = createContext();
function MenuCardProvider({ children, bistroIdArg, menuIdArg ,menuNameArg}) {
    // console.log(menuNameArg)
    const [menuName,setMeuName]= useState(menuNameArg)
    const [bistroId, setBistroId] = useState(bistroIdArg);
    const [menuId, setMenuId] = useState(menuIdArg)
    const [createMenuItem, setCreateMenu] = useState(false)
    const [menuItem, setMenuItem] = useState({});
    const [menuCard, setMenuCard] = useState()
    const [categories, setCategories] = useState();

    //Use effects
    useEffect(() => {
        fetchMenuCard()
        // console.log(fetchMenuCard())
    }, [bistroId, menuId])

    // Fetch Menu 
    const fetchMenuCard = async () => {
        try {
            const res = await getMenuCard(bistroId, menuId)
            const categoryResulst = await getAllCategory(bistroId, menuId)
            setMenuCard(res.data);
            setCategories(categoryResulst.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    // Handel Create Menu Item 
    const handelCreateMenuItem = async (item) => {
        console.log(item)
        item['menuId'] = menuId;
        item['bistroId'] = bistroId;
        try {
            const res = createMenuItems(menuId, item);
            // console.log(res)
            fetchMenuCard();
            return true
        } catch (ex) {
            console.log(ex);
            return false
        }
    }
    const handleCreateCategory = async (item) => {
        console.log("item is ", item)
        try {
            const res = await createCategory(bistroId, { ...item, menuId: menuId })
            // console.log(res)
        } catch (ex) {
            console.log(ex)
        }
    }
    return <MenuCardContext.Provider value={{ menuCard, createMenuItem, setCreateMenu, categories, handelCreateMenuItem, handleCreateCategory,menuName }}>
        {children}
    </MenuCardContext.Provider>
}

export default MenuCardProvider;