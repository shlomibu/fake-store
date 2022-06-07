import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { cartContext } from "../components/main"
import style from './categories.module.css'

export default function Categories(props) {
    const [list, setList] = useState(),
        params = useParams(),
    [cart,setCart] = useContext(cartContext)

    function getItemsByCat() {
        axios.get(`https://fakestoreapi.com/products/category/${params.name}`)
            .then(res => setList(res.data))
    }
    useEffect(() => {
        getItemsByCat()
    }, [])


    const navigate = useNavigate()
    function clickdiv(event, item) {
        if (event.target.tagName !== 'BUTTON')
            navigate(`../item/${item.id}`)
    }


    if (!list) return <h1
        className={style.h1}
    >loading..</h1>
    return <div className={style.allCat}>
        <h1>{params.name}</h1>
        <div className={style.cat}>
            {list.map(item => {
                return <div onClick={(event) => clickdiv(event, item)}
                    id={item.id}
                    key={item.id} name={item.id}
                    className={style.item}
                >
                    <img src={item.image} alt='title' />
                    <h2>{item.price}$</h2>
                    {cart.find(v=>v.id===item.id)?
                    <div>
                    <button className="sbtn" onClick={()=>props.removeCart(item.id)}>-</button>
                    <label className="lb">{cart.find(v=>v.id===item.id).cnt}</label>
                    <button className="sbtn" onClick={()=>props.addToCart(item)}>+</button>
                    </div>:
                    <button onClick={() => props.addToCart(item)}>buy</button>
                    }
                    <p>{item.title}</p>
                </div>
            }
            )}</div>
    </div>
}