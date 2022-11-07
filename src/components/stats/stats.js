import Card from "../card/card";
import style from './stats.module.scss'
export default function Stats() {
    return <div className={style.wrapper}>
        <header className={style.header}>
            <h2>Order Statistics</h2>
        </header>
        <div className={style.statsContainer}>
            <Card>
                <div className={style.stat}>
                    <h3>Active</h3>
                    <p>12,840</p>
                </div>
            </Card>
            <Card>
                <div className={style.stat}>
                    <h3>Active</h3>
                    <p>12,840</p>
                </div>
            </Card>
            <Card>
                <div className={style.stat}>
                    <h3>Active</h3>
                    <p>12,840</p>
                </div>
            </Card>
            <Card>
                <div className={style.stat}>
                    <h3>Active</h3>
                    <p>12,840</p>
                </div>
            </Card>
        </div>
    </div>


}