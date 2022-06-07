import axios from "axios"
import { useEffect, useState } from "react"
import Cat from "../components/Cat"
import style from './home.module.css'

export default function Home(){
    const [catList,setCatlist]=useState()
    function getCat(){
        axios.get('https://fakestoreapi.com/products/categories')
    .then(res=>setCatlist(res.data))
    }
    useEffect(()=>getCat()
    ,[])
    if(!catList) return <h1 className={style.h1}>loadind..</h1>
    return<div className={style.home}>
        {catList.map(cat=>
            <Cat key={cat} name={cat}/>
            
            )}
    </div>
}