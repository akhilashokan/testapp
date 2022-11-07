import React from "react";
import style from "./dashboard.module.css"
export default function Dashboard(props) {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}