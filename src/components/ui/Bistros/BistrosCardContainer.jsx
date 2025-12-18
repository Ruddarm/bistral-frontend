import Style from "./BistrosUI.module.css"

function BistroCardContainer({children}){
    return(
        <div className={Style.bistroCardContainer}>
            {children}
        </div>
    )

}


export default BistroCardContainer;