import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { cartContext } from "../components/main";
import style from './item.module.css'

export default function Item(props){
    const params =useParams(),
    id = params.item,
    [item,setItem]=useState(),
    [cart,setCart]=useContext(cartContext)

    function getItem(){
        axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>setItem(res.data))
    }
    useEffect(()=>getItem(),[])

    
    if(!item) return <h1 className={style.h1}>loadind..</h1>
    return<div className={style.item}>
        <img src={item.image} alt='title'/>
        <h2>{item.title}</h2>
        {cart.find(v=>v.id==id)?
        <div>
        <button className="sbtn" onClick={()=>props.removeCart(item.id)}>-</button>
        <label className="lb">{cart.find(v=>v.id==id).cnt}</label>
        <button className="sbtn" onClick={()=>props.addToCart(item)}>+</button>
        </div>:
        <button onClick={()=>props.addToCart(item)}>buy</button>
        }
        <h2>{item.price}$</h2>
        <p>{item.description}</p>
    </div>
}