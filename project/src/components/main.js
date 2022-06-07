import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from '../pages/Categories';
import Home from '../pages/Home';
import Item from '../pages/Item';
import Cart from './cart';

export const cartContext = createContext()

export default function Main (){
  const cartState=useState([]),
  [cart,setCart]=cartState,
  [total,setTotal]=useState(0)

  function addToCart(item){
    const itemC = cart.find(i=>i.id==item.id)
    if(itemC){
      setCart(cart.map(i=>i.id==item.id?{...i,cnt:i.cnt+1}:i))
      // setTotal(total+item.price)
    }
    else{
        item={...item,cnt:1}
        setCart([...cart,item])
      }
      setTotal(total+item.price)
}
  function removeCart(id){
    const item =cart.find(i=>i.id==id)
    if(cart.find(i=>i.id==id).cnt>1){
      setCart(cart.map(i=>i.id==id?{...i,cnt:i.cnt-1}:i))
      // setTotal(total-item.price)
    }
    else
    setCart(cart.filter(i=>i.id!=id))
    setTotal(total-item.price)
  }



    return <main>
      <cartContext.Provider value={cartState}>
        <Cart total={total} removeCart={removeCart} addToCart={addToCart}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cat/:name' element={<Categories removeCart={removeCart} addToCart={addToCart}/>}/>
          <Route path='/item/:item' element={<Item removeCart={removeCart} addToCart={addToCart}/>}/>
      </Routes>
      </cartContext.Provider>
    </main>
}