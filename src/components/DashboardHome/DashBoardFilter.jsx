import Icon from "../ui/Icons";
import Style from "./DashBoard.module.css"
import RestaurantIon from "../../assets/restaurant.png"
import MarkerIcon from "../../assets/marker.svg"
import CalanderIcon from "../../assets/calander.png"
import { useContext, useEffect, useState } from "react";
import AnyalticsContext from "../../hooks/Analytics/AnalyticsContext";
import Select from "react-select"
import FilterSelect, { MultiFilterSelect, SingleSelect } from "../ui/FilterSelect";
function DashBoardFilter() {
    const { bistros, range, selectedRange, handelRangeChange, handleBistroSelection } = useContext(AnyalticsContext)
    // console.log(bistros)
    // const list = bistros.map(b => ({
    //     value: b.bistroId,
    //     label: b.bistroName,
    //     isSelected: false
    // }))
    const [options, setOptions] = useState([])
    useEffect(() => {
        if (bistros && bistros.length > 0) {
            const list = bistros.map(b => ({
                value: b.bistroId,
                label: b.bistroName,
                isSelected: false
            }));
            setOptions(list);
        }
    }, [bistros]);

    console.log(options)
    return (
        <div className={Style.filterBar}>
            <div className={Style.filterContainer}>
                <Icon  src={RestaurantIon}></Icon>
                <MultiFilterSelect
                    onChange={(s) => { handleBistroSelection(s) }}
                    placeHolder={"Select Bistro"} options={options} ></MultiFilterSelect>
            </div>

            <div className={Style.filterContainer}>
                <Icon id={Style.filterIcon} src={CalanderIcon}></Icon>
                <SingleSelect
                    onChange={(s) => { handelRangeChange(s) }}
                    value={selectedRange}
                    isMulti={false}
                    hideSelectedOptions={false}
                    controlShouldRenderValue={false}
                    options={range}
                >

                </SingleSelect >
            </div>
        </div>

    )
}


export default DashBoardFilter;