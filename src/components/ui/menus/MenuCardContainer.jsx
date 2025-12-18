import Style from "./menusUi.module.css"


function MenuCardContainer({children}){
    return(
        <div className={Style.menuCardContainer}>
            {children}
        </div>
    )
}

export default MenuCardContainer;