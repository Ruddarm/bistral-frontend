import Menu from "../components/menuCard/menu";
import Menucards from "../components/menuCard/menucards";
import LayoutHeader from "./LayoutHeader";
import Style from "./MenuCardLayout.module.css";
import PlusIcon from "../assets/plus.png"
import MenuItemVaraintCurdContainer from "../components/ui/OverLayContainer";
import UseMenuCard, { MenuCardContext } from "../hooks/menu/useMenuCard";
import { useContext, useState } from "react";
import CreateCategoryForm from "../components/menuCard/CreateCategoryForm";
import PrevButton from "../components/ui/PrevButton";
import LayoutTitle from "../components/ui/Titles";
import { useNavigate } from "react-router-dom";

function MenuCardLayout({ children }) {
    const navigate = useNavigate();
    const handelPrevClick=()=>{
        navigate("../menu-manager")
    }
    const [categoryForm, setCategoryForm] = useState(false)
    const { createMenuItem, setCreateMenu, handleCreateCategory, menuName } = useContext(MenuCardContext)
    console.log(menuName)
    return (
        <>
            <div className={Style.menuCardContainer}>
                <div className={Style.menuTitleContainer}>
                    <PrevButton handelClick={handelPrevClick}></PrevButton>
                    <h1 className={Style.menuTitle}>
                        {menuName}</h1>
                </div>
                <div className={Style.menuBarContainer}>

                    <div className={Style.menuBar}>

                        <input className={`${Style.menuInputBox}`} placeholder="Search Menu Items..">
                        </input>
                    </div>
                    <div className={Style.createItemContainer}>
                        <button onClick={() => { setCreateMenu(!createMenuItem) }} className={Style.createItemButton}>
                            <img id={Style.variantOptionIcon} src={PlusIcon}></img>
                            Add Item
                        </button>
                        <button onClick={() => { setCategoryForm(!categoryForm) }} className={Style.createItemButton}>
                            <img id={Style.variantOptionIcon} src={PlusIcon}></img>
                            Add Category
                        </button>
                        {categoryForm && <div className={Style.createCategoryContainer}>
                            <CreateCategoryForm handleCreateCategory={handleCreateCategory}></CreateCategoryForm>
                        </div>}
                    </div>
                </div>
                <Menu>

                </Menu>
            </div>
        </>
    )
}

export default MenuCardLayout;