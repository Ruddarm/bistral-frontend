import Style from "./MenuUI.module.css"

function CategoryIcon({ onClick, category, active }) {

    return (
        <button onClick={() => { onClick(category) }} className={`${Style.categoryCard} ${active ? Style.categoryCardActive : ""}`}>
            {category}
        </button>
    )
}

export { CategoryIcon }