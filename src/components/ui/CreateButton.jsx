import  Style from "./UI.module.css"

function CreateBtn({onClick}) {
    return (
        <button onClick={onClick} className={`${Style.createBtn}`}>+</button>
    )
}

export default CreateBtn;