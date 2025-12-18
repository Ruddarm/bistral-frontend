
import Style from "./UI.module.css"
import Select, { components } from "react-select";



function MultiFilterSelect({ placeholder, options, onChange }) {

    const CheckboxOption = (props) => {
        return (
            <components.Option {...props}>
                <div className={Style.filterItem}>
                    <input
                        className={Style.filterInput}
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                    />
                    {props.label}
                </div>
            </components.Option>
        );
    };

    return (
        <Select
            className={Style.filterSelect}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            controlShouldRenderValue={false}
            options={options}
            onChange={onChange}
            components={{ Option: CheckboxOption }}
            placeholder={placeholder}
        />
    )
}



function SingleSelect({ options, value, onChange, placeholder }) {
    console.log("opti is", options)
    return (
        <Select
            
            className={Style.filterSelect}
            isMulti={false}
            closeMenuOnSelect={true}
            hideSelectedOptions={false}
            controlShouldRenderValue={true}
            options={options}
            value={value}
            onChange={onChange}
            // placeholder={placeholder}
        />
    );
}

export default SingleSelect;


export { MultiFilterSelect, SingleSelect };

// (selected) => {
//     const ids = selected.map(s => s.value);
//     handleBistroSelection(ids);
// }