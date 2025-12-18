import Style from "./menu.module.css"

function Menucards() {
    return (
        <>
            <div className={Style.menuCardContainer}>
                <div className={Style.menuCard}>
                    Bistro Menu
                </div>
                <div className={Style.menuCard}>
                    Bistro Menu
                </div>
                <div className={Style.menuCard}>
                    Bistro Menu
                </div>
            </div>
        </>
    )
}

export default Menucards;