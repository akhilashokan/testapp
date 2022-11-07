import style from "./sidebar.module.css"

export default function SideBar() {
    return (
        <aside>
            <div className={style.mainMenu}>
                <header>
                    <h4>Main Menu</h4>
                </header>
                <div className={style.icons}>
                    <div className={style.icon}>
                        <p>dashboard</p>
                    </div>
                    <div className={style.icon}>
                        <p>Market Place</p>
                    </div>
                    <div className={style.icon}>
                        <p>My orders</p>
                    </div>
                    <div className={style.icon}>
                        <p>Create Trade</p>
                    </div>
                    <div className={style.icon}>
                        <p>Profile</p>
                    </div>
                </div>
            </div>
            <div className={style.extras}>
                <header>
                    <h4>Additional</h4>
                </header>
                <div className={style.icon}>
                    <p>notification</p>
                </div>
                <div className={style.icon}>
                    <p>settings</p>
                </div>
                <div className={style.icon}>
                    <p>call</p>
                </div>
            </div>
            <div className={style.insight}>
                <header>
                    <h4>Insight</h4>
                </header>
                <div className={style.icon}>
                    resources
                </div>
            </div>
            <div className={style.upsell}>
                <h3>upgrade your plan</h3>
                <p>go to <strong>Pro</strong></p> <button > {'>>'} </button>
            </div>
        </aside>
    )
}