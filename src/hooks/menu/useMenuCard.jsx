import { useContext, useEffect, useState } from "react";
// import { createMenuItems, getMenuCard } from "../../api/menus/menuItemApi";
import { createContext } from "react";
import { createCategory, getAllCategory } from "../../api/menuCard/menuCategoryAPI";
import { createMenuItems, getMenuCard } from "../../api/menuCard/menuItemApi";
import { MenuContext } from "./useMenus";

export const MenuCardContext = createContext();
function MenuCardProvider({ children, menuNameArg, menuIdArg }) {

    const [menuId, setMenuId] = useState(menuIdArg)
    const [menuName, setMeuName] = useState(menuNameArg)
    const [createMenuItem, setCreateMenu] = useState(false)
    const [menuItem, setMenuItem] = useState({});
    const [menuCard, setMenuCard] = useState()
    const [categories, setCategories] = useState();

    //Use effects
    useEffect(() => {
        fetchMenuCard(menuId)
    }, [])

    // Fetch Menu 
    const fetchMenuCard = async () => {
        try {
            const res = await getMenuCard(menuId)
            const categoryResulst = await getAllCategory(menuId)
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
        try {
            const res = createMenuItems(menuId, item);
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
            const res = await createCategory({ ...item, menuId: menuId })
            // console.log(res)
        } catch (ex) {
            console.log(ex)
        }
    }
    return <MenuCardContext.Provider value={{ menuCard, createMenuItem, setCreateMenu, categories, handelCreateMenuItem, handleCreateCategory, menuName }}>
        {children}
    </MenuCardContext.Provider>
}

export default MenuCardProvider;