import { useRef, useState } from "react"
import style from "./sidebar.module.css"

export default function SideBar() {
    const extrasRef = useRef()
    var [open, setOpen] = useState(false)
    const toggleExtras = () => {
        extrasRef.current.style.maxHeight = open ? "0px" : "200px"
        setOpen(!open)
    }

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
                    <button onClick={toggleExtras} >
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.5303 0.969671C9.8232 1.26256 9.8232 1.73744 9.5303 2.0303L5.5303 6.0303C5.2374 6.3232 4.7626 6.3232 4.4697 6.0303L0.469667 2.0303C0.176777 1.73744 0.176777 1.26256 0.469667 0.969671C0.762558 0.676781 1.23744 0.676781 1.53033 0.969671L5 4.4393L8.4697 0.969671C8.7626 0.676781 9.2374 0.676781 9.5303 0.969671Z" fill="#052825" />
                        </svg>
                    </button>
                </header>
                <div ref={extrasRef} className={style.toggle} style={{ maxHeight: "0px" }}>
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