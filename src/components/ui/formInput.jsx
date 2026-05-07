import Style from "./UI.module.css"

const FormInput = ({ register, name, rules ,rest }) => {
    // console.log(register)
    return (
        <input className={Style.formInput}
            {...register(name, rules)}
            {...rest}
        />
    )

}

const FormSelectInput = ({ register, name, rules, children }) => {
    return (
        <select
            className={Style.formInput}
            {...register(name, rules)}
        >
            {children}
        </select>
    )
}
const FormInputOption = ({value,name}) => {
    console.log(value,name)
    return (
        <option value={value}>{name}</option>
    )
}
export default FormInput;
export { FormSelectInput ,FormInputOption}