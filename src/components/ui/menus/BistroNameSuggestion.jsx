import Icon from "../Icons";
import Style from "./menusUi.module.css"
import CheckIcon from "../../../assets/check.png"

function BistroNameButton({ selected, bistro }) {
    return (
        <div className={Style.BistroNameButtonContainer}>

            {selected ? (<Icon id={Style.idAtri} src={CheckIcon}></Icon>) : <div className={Style.blankDiv}></div>}

            <button className={Style.bistroNameBtn}>
                {bistro.bistroName}
            </button>
        </div>
    )
}

export default BistroNameButton;