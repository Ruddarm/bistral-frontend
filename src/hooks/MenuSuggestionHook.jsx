import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MenuItemsContext = createContext();

export const MenuItemsProvider = ({ children, initialMenuId }) => {
  const [suggestion, setSuggestion] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState({});
  const [menuId, setMenuId] = useState(initialMenuId)
  const [items, setItem] = useState([{ itemId: "123", itemName: "Ruddra", menuItemVariantResponsesList: [{ variantId: "xyz", price: 150, qty: 200, unit: "g", orderdQty: 1 }, { variantId: "abc", price: 170, qty: 250, unit: "g", orderdQty: 1 }] }]);
  useEffect(() => {
    if(query.length==0) {setSuggestion(true)}
    if (query.length > 2) {
      const handler = setTimeout(async () => {
        try {
          const res = await axios.get(
            `http://localhost:8084/bistros/menus/${menuId}/menu-items/search?keyword=${query}&size=10&page=0`
          );
          setItem(res.data?.content);
          console.log(res.data?.content)
          setSuggestion(true);
          setPage(res.data?.pageable);
        } catch (err) {
          setSuggestion(false)
          console.error("Error fetching menu items:", err);
        }
      }, 300);
      return () => clearTimeout(handler);
    } else {
      setSuggestion(false);
    }
  }, [query]);

  // // Debugging
  // useEffect(() => {
  //   // console.log("item changed", items);
  // }, [items]);

  const updateQtyItem = (itemId, itemVariantId, action) => {
    setItem((prevItems) =>
      prevItems?.map((item) => {
        if (item.itemId === itemId) {
          return {
            ...item,
            menuItemVariantResponsesList: item.menuItemVariantResponsesList.map(
              (variant) => {
                if (variant.variantId === itemVariantId) {
                  if(variant.orderdQty==undefined) variant.orderdQty=1;
                  return {
                    ...variant,
                    orderdQty:
                      action === "increase"
                        ? variant.orderdQty + 1 : Math.max(1, variant.orderdQty - 1)
                  };
                }
                return variant;
              }
            ),
          };
        }
        return item;
      })
    );
  };

  return (
    <MenuItemsContext.Provider
      value={{
        items,
        setQuery,
        query,
        suggestion,
        updateQtyItem,
        page,
      }}
    >
      {children}
    </MenuItemsContext.Provider>
  );
};


export const useMenuItems = () => {
  return useContext(MenuItemsContext);
};
