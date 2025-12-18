
import { CategoryIcon } from "../ui/menuCard/CategoryIcon";
import Style from "./menu.module.css"
function MenuItemCategoryBar({ onClick, category }) {
    // console.log(category)
    // console.log(category)
    return (
        <div className={`${Style.menuCategoryBar}`}>
            {/* <CategoryIcon onClick={onClick} category={"ALL"} active={true}></CategoryIcon> */}
            {category?.map((category) => (
                <CategoryIcon onClick={() => { onClick(category.categoryId) }} active={category.isSelected} category={category.categoryName}></CategoryIcon>
            ))
            }
        </div>
    );
}
export default MenuItemCategoryBar;