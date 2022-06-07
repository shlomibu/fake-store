import { Link } from "react-router-dom";
import style from "./header.module.css"

export default function Header(){
    return <header >
        <h1>
        Shlomi-Store
        </h1>
        <nav>
            <Link
            to={'/'}
            className={style.link}
            >Home</Link>
        </nav>
        </header>
}