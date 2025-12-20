import Style from "./MainLayout.module.css"

function LayoutHeader({ title, children }) {
    return (
        <div className={Style.mainLayoutOrderTableContainer}>
            <div className={Style.mainLayoutOrderTableContainerInner}>
                <div className={Style.titleContainer}>
                    <h1 id={Style.LayOutTitle} style={{ color: "var(--contrast-color)" }}>{title}</h1>
                </div>
                {children}
            </div>
        </div>
    )
}

export default LayoutHeader;