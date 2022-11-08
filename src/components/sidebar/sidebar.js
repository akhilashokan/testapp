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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <path fill="#6D7D78" fillRule="evenodd" d="M4 10h1a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4ZM3.5 0C5.5 0 7 1.6 7 3.5v1a3.5 3.5 0 1 1-7 0v-1C0 1.5 1.6 0 3.5 0Zm0 2C2.7 2 2 2.7 2 3.5v1a1.5 1.5 0 1 0 3 0v-1C5 2.7 4.3 2 3.5 2ZM15 9h1a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4v-3a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1ZM12.5 0h4a3.5 3.5 0 1 1 0 7h-4a3.5 3.5 0 1 1 0-7Zm0 2a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3h-4Z" clipRule="evenodd" />
                        </svg>
                        <p>dashboard</p>
                    </div>
                    <div className={style.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <path fill="#6D7D78" fillRule="evenodd" d="M2.2 0h5.2c1.2 0 2.2 1 2.2 2.2v5.2c0 1.2-1 2.2-2.2 2.2H2.2C1 9.6 0 8.6 0 7.4V2.2C0 1 1 0 2.2 0Zm0 1.8c-.2 0-.4.2-.4.4v5.2c0 .2.2.4.4.4h5.2c.2 0 .4-.2.4-.4V2.2c0-.2-.2-.4-.4-.4H2.2Zm10.4 8.6h5.2c1.2 0 2.2 1 2.2 2.2v5.2c0 1.2-1 2.2-2.2 2.2h-5.2c-1.2 0-2.2-1-2.2-2.2v-5.2c0-1.2 1-2.2 2.2-2.2Zm0 1.8c-.2 0-.4.2-.4.4v5.2c0 .2.2.4.4.4h5.2c.2 0 .4-.2.4-.4v-5.2c0-.2-.2-.4-.4-.4h-5.2Zm0-12.2h5.2C19 0 20 1 20 2.2v5.2c0 1.2-1 2.2-2.2 2.2h-5.2c-1.2 0-2.2-1-2.2-2.2V2.2c0-1.2 1-2.2 2.2-2.2Zm0 1.8c-.2 0-.4.2-.4.4v5.2c0 .2.2.4.4.4h5.2c.2 0 .4-.2.4-.4V2.2c0-.2-.2-.4-.4-.4h-5.2ZM2.2 10.4h5.2c1.2 0 2.2 1 2.2 2.2v5.2c0 1.2-1 2.2-2.2 2.2H2.2C1 20 0 19 0 17.8v-5.2c0-1.2 1-2.2 2.2-2.2Zm0 1.8c-.2 0-.4.2-.4.4v5.2c0 .2.2.4.4.4h5.2c.2 0 .4-.2.4-.4v-5.2c0-.2-.2-.4-.4-.4H2.2Z" clipRule="evenodd" />
                        </svg>
                        <p>Market Place</p>
                    </div>
                    <div className={style.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <path fill="#6D7D78" fillRule="evenodd" d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm7-4v5a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0Zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                        </svg>
                        <p>My orders</p>
                    </div>
                    <div className={style.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" fill="none">
                            <path fill="#6D7D78" fillRule="evenodd" d="M2.77 4.82A4.78 4.78 0 0 1 7.5 0a4.78 4.78 0 0 1 4.73 4.82c0 1.68-.83 3.15-2.1 4.02A7.65 7.65 0 0 1 15 16v2H0v-2a7.65 7.65 0 0 1 4.87-7.16 4.84 4.84 0 0 1-2.1-4.02Zm4.73 2.7a2.68 2.68 0 0 0 2.65-2.7c0-1.5-1.18-2.7-2.65-2.7a2.68 2.68 0 0 0-2.65 2.7c0 1.5 1.18 2.7 2.65 2.7Zm0 2.95a5.47 5.47 0 0 0-5.42 5.41h10.84a5.47 5.47 0 0 0-5.42-5.4Z" clipRule="evenodd" />
                        </svg>
                        <p>Create Trade</p>
                    </div>
                    <div className={style.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <path fill="#6D7D78" fillRule="evenodd" d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-1.82a8.18 8.18 0 1 1 0-16.36 8.18 8.18 0 0 1 0 16.36Zm4.72-11.75a.9.9 0 0 0-1.15-1.15L7.78 7.21a.9.9 0 0 0-.57.57l-1.93 5.79a.9.9 0 0 0 1.15 1.15l5.79-1.93a.9.9 0 0 0 .57-.57l1.93-5.79Zm-7.14 5.99.88-2.64 1.78 1.75-2.66.89Zm3.95-2.17-1.8-1.77 2.69-.9-.9 2.67Z" clipRule="evenodd" />
                        </svg>
                        <p>Profile</p>
                    </div>
                </div>
            </div>
            <div className={style.extras}>
                <header onClick={toggleExtras}>
                    <h4>Additional</h4>
                    <button>
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