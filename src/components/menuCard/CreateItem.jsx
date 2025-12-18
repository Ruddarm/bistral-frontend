import { useContext } from "react";
import CloseBar from "../ui/CloseBar";
import CloseButton from "../ui/CloseButton";
import CreateItemForm from "./CreateItemForm";
import Style from "./MenuItemCurd.module.css"
import { MenuCardContext } from "../../hooks/menu/useMenuCard";
function CreateItem() {
    const {createMenuItem,setCreateMenu} = useContext(MenuCardContext)
    return (
        <div className={Style.CreateItemContainer}>
            <CloseBar>
                <div className={Style.CloseBarTitle}>
                    <span className={Style.createItemTitle}>Create Items</span>
                    <CloseButton onClick={()=>{setCreateMenu(!createMenuItem)}} ></CloseButton>
                </div>
            </CloseBar>
            <CreateItemForm></CreateItemForm>
        </div>
    )
}
export default CreateItem;