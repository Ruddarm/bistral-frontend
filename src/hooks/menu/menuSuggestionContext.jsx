import { createContext, useEffect, useState } from "react";
import { getMenuCard } from "../../api/menuCard/menuItemApi";
import { getAllMenusApi } from "../../api/menus/menusApi";
import axios from "axios";



export const MenuSuggestionContext = createContext();

function MenuSuggestionProvider({ children, bistroIdArg, addItemFun }) {

    const [originalMenu, SetOriginalMenu] = useState([]);
    const [filteredMenu, setFilterdMenu] = useState([])
    const [bistroId, setBistroId] = useState(bistroIdArg);
    const [menuId, setMenuId] = useState();
    const [menuCard, setMenuCard] = useState();
    const [selectedCategory, setSelectedCategory] = useState([])
    const [categories, setCategories] = useState(["ALL"])
    const [search, setSearch] = useState("")
    useEffect(() => {
        const loadMenuCards = async () => {
            try {
                const menuCardres = await axios.get(`http://localhost:8084/bistros/list/menus/${bistroId}`)
                setMenuCard(menuCardres.data)
                setMenuId(menuCardres.data[0]?.menuId)
            } catch (ex) {
                console.log(ex)
            }

        }
        loadMenuCards()
    }, [])

    useEffect(() => {
        const loadMenu = async () => {
            const menu = await getMenuCard(bistroId, menuId)
            const categoryResponse = await axios.get(`http://localhost:8084/bistros/${bistroId}/menu-category/all/${menuId}`)

            const categories = Object.values(
                categoryResponse.data.reduce((acc, item) => {
                    acc[item.categoryId] = {
                        categoryId: item.categoryId,
                        categoryName: item.categoryName,
                        isSelected: false
                    };
                    return acc;
                }, {})
            );
            // console.log(categories)
            setCategories([{ "categoryId": "ALL", categoryName: "ALL", isSelected: true }, ...categories])
            SetOriginalMenu(menu.data)
            // console.log(menu.data)
            // setFilterdMenu(menu.data)
        }
        if (menuId)
            loadMenu()
    }, [menuId]);

    const handleCategorySelection = (categoryId) => {
        // console.log(categoryId)
        if (categoryId === "ALL") {
            // console.log("here")
            for (let cat in categories) {
                categories[cat].isSelected = false;
            }
            categories[0].isSelected = true;
            setCategories([...categories])
        } else {
            let anySelected = false;
            for (let cat in categories) {
                if (categories[cat].categoryId == categoryId) {
                    categories[cat].isSelected = !categories[cat].isSelected;
                }
                if (categories[cat].isSelected) {
                    anySelected = true;
                }
            }
            if (anySelected) {
                categories[0].isSelected = false;
            } else {
                categories[0].isSelected = true;
            }
            setCategories([...categories])
        }
        // setCategories()
    }
    useEffect(() => {
        let itemList = {}
        // console.log(categories[0])
        if (categories[0].isSelected) {
            setFilterdMenu({ ...originalMenu });
            return;
        }
        for (let c of categories) {
            if (c.isSelected) {
                itemList[c.categoryName] = originalMenu.menuItems[c.categoryName];
            }
        }
        console.log(itemList)
        setFilterdMenu({ ...originalMenu, menuItems: itemList })
    }, [categories, search, originalMenu])

    return (
        <MenuSuggestionContext.Provider
            value={{
                filteredMenu, addItemFun,
                menuCard,
                selectedCategory, categories, handleCategorySelection
            }}
        >
            {children}
        </MenuSuggestionContext.Provider>
    )
}

export { MenuSuggestionProvider };