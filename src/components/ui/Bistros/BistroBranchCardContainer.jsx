import Style from "./BistrosUI.module.css"


function BistroBranchCardContainer({children}){
    return(
        <div className={Style.bistroBranchCardContainer}>
           {children}
        </div>
    )
}

export default BistroBranchCardContainer;