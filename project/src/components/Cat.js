
import { Link } from "react-router-dom"
import style from './cat.module.css'

export default function Cat(props){
    
    return<Link
    to={`/cat/${props.name}`}
    className={style.cat}
    ><h3>{props.name}</h3> </Link>
}