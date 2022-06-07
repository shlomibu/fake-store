import style from './CartItem.module.css'

export default function CartItem(props){
    const {item}=props
    return <div className={style.ci}>
        <div>

        <img src={item.image} alt='title'/>
        <span>{item.title}</span>
        </div>
        
        <h5>{item.price}$</h5>
        
        <button className="sbtn" onClick={()=>props.removeCart(item.id)}>-</button>
        <span  className="lb">{item.cnt}</span>
        <button className="sbtn" onClick={()=>props.addToCart(item)}>+</button>
    </div>
}