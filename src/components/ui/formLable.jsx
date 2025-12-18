import Style from "./UI.module.css"



const FormLabel=({labelTitle})=>{
    return(
        <label className={Style.formLabel}>
            {labelTitle}
        </label>
    )
}

export default FormLabel;