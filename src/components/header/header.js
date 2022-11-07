import style from './header.module.css'
export default function Header() {
    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <img src="logo.svg" width={110} alt="Agrilin logo" />
            </div>
            <div className={style.info}>
                <div className={style.cta}>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.9574 5.90722C16.9574 5.35632 17.404 4.90973 17.9549 4.90973C18.5058 4.90973 18.9524 5.35632 18.9524 5.90722V15.823C18.9524 18.1299 17.0823 20 14.7754 20H4.177C1.87011 20 0 18.1299 0 15.823V5.22463C0 2.91773 1.87011 1.04762 4.177 1.04762H13.7779C14.3288 1.04762 14.7754 1.49422 14.7754 2.04512C14.7754 2.59602 14.3288 3.04261 13.7779 3.04261H4.177C2.97191 3.04261 1.99499 4.01953 1.99499 5.22463V15.823C1.99499 17.0281 2.97191 18.005 4.177 18.005H14.7754C15.9805 18.005 16.9574 17.0281 16.9574 15.823V5.90722ZM17.8376 0.309616C18.2175 -0.0893369 18.8489 -0.104778 19.2478 0.275128C19.6468 0.655034 19.6622 1.28642 19.2823 1.68538L9.73183 11.7147C9.35193 12.1137 8.72054 12.1291 8.32159 11.7492C7.92263 11.3693 7.90719 10.7379 8.2871 10.3389L17.8376 0.309616Z" fill="white" />
                        </svg>
                        Talk to out Sales team
                    </button>
                </div>
                <div className={style.msg}>
                    <div className={style.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#92929D" viewBox="0 0 23 17">
                            <path fill="#92929D" fillRule="evenodd" d="M3 0h16.1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-16A3 3 0 0 1 0 14V3a3 3 0 0 1 3-3ZM2 5.4V14c0 .6.5 1 1 1h16.1c.6 0 1-.4 1-1V5.4l-7.3 5a3 3 0 0 1-3.5 0L2 5.5Zm18.1-2.5-8.5 6a1 1 0 0 1-1.1 0L2 2.8c0-.5.5-.9 1-.9h16.1c.5 0 1 .4 1 1Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className={style.profile}>
                    {/* <Profile name={} desig={} pic={} /> */}
                    profile
                </div>
            </div>
        </div>
    )
}