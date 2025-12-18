import Style from "./UI.module.css"


function LayoutTitle({ title }) {
    return (
        <h1 id={Style.TitleBar}>
            {title}
        </h1>
    )
}

function SubPara({ para }) {
    return (
        <p id={Style.subTitle}>
            {para}
        </p>
    )
}

function LayoutTitleTwo({ title }) {
    return (
        <h1 className={Style.layoutTitleTwo}>{title}</h1>

    )
}

export { SubPara ,LayoutTitleTwo }
export default LayoutTitle;