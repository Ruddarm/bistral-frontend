import { useState } from "react";
import VariantDeleteButton from "../ui/menuCard/VariantDeleteButton";
import VariantEditButton from "../ui/menuCard/VariantEditButton";
import Style from "./menu.module.css"
import OverlayContainer from "../ui/OverLayContainer";
import CreateVariant from "./CreateVariant";


function MenuItemVaraintCard({ variant }) {
    const [openVariantForm, setOpenVariantForm] = useState(false)
    // console.log(variant)
    return (
        <>
            {openVariantForm && (<OverlayContainer>
                <CreateVariant closeFun={()=>{setOpenVariantForm(!openVariantForm)}} variant={variant}></CreateVariant>
            </OverlayContainer>)}
            <div className={`${Style.menuItemVaraintInfoCardContainer}`}>
                <div className={`${Style.menuItemVariantInfoCard}`}>
                    <div className={`${Style.menuItemVariantCardName}`} >
                        <span>{variant.variantName}</span>
                    </div>
                    <div className={`${Style.menuItemVariantOtherInfo}`}>
                        <span className={`${Style.menuItemVariantPrice}`}>
                            &#8377; {variant.price}
                        </span>
                        <span className={`${Style.menuItemVariantPrice}`}>
                            Qty : {variant.qty} &nbsp; {variant.unit}
                        </span>
                    </div>
                </div>
                <div className={`${Style.menuItemVariantEditButtonContainer}`}>
                    <VariantEditButton onClick={() => {setOpenVariantForm(!openVariantForm)}}></VariantEditButton>
                    <VariantDeleteButton></VariantDeleteButton>
                </div>
            </div>
        </>
    )
}

export default MenuItemVaraintCard;