import style from './stats.module.scss'
export default function Stats() {
    return <div className={style.wrapper}>
        <header className={style.header}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none">
                <path fill="green" fillRule="evenodd" d="M7.06.06a.67.67 0 0 0-.76.15.8.8 0 0 0-.2.74c.1.44.15.9.15 1.37 0 1.08-.27 1.83-.74 2.46a8.07 8.07 0 0 1-2.06 1.76l-.1.1a6.74 6.74 0 1 0 9.68 2.64.25.25 0 0 0-.42-.05l-.2.24c-.88 1.03-1.6 1.85-3.04 2.22-.07.02-.1 0-.13 0a.24.24 0 0 1-.1-.13.41.41 0 0 1 .08-.42 6.22 6.22 0 0 0 1.53-3.61c.37-3.05-1.02-6.3-3.69-7.47Z" clipRule="evenodd" />
            </svg>
            <h2>Order Statistics</h2>
        </header>
        <div className={style.statsContainer}>
            <StatCard name={"active"} stat={"12,840"} bgColor={'#048F5D'}>

            </StatCard>
            <StatCard name={"dispute"} stat={"31,830"} bgColor={'#FFB600'} >

            </StatCard>
            <StatCard name={"open"} stat={"22,890"} bgColor={'#38B000'} >

            </StatCard>
            <StatCard name={"cancel"} stat={"1,360"} bgColor={'#E84A4D'} >

            </StatCard>
        </div>
    </div>
}

const StatCard = ({ name, stat, children, bgColor }) => {
    return (
        <div className={style.stat}>
            <span className={style.options}>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="14" fill="none">
                    <path fill="#8D957D" fillRule="evenodd" d="M3.375 1.5a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm0 5.5a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm0 5.5a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Z" clipRule="evenodd" />
                </svg>
            </span>
            <div className={style.icon} style={{ backgroundColor: bgColor }}>
                {children}
            </div>
            <h3 style={{ color: bgColor }}>{name}</h3>
            <p>{stat}</p>
        </div>
    )
}