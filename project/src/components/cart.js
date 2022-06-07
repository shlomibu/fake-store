import { useContext } from 'react'
import style from './cart.module.css'
import CartItem from './CartItem'
import { cartContext } from './main'

export default function Cart(props){
    
    const [cart,setCart] = useContext(cartContext)
    

    return <div className={style.cart}>
        <h3>CART</h3>
        {cart.map(item=><CartItem removeCart={props.removeCart} addToCart={props.addToCart} key={item.id} item={item}/>)}
        <div className={style.total}>TOTAL: {props.total.toFixed(2)}$</div>
    </div>
}