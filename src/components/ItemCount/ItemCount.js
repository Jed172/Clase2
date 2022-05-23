import React from 'react'
import {useState} from 'react'
import './ItemCount.css'
const ItemCount= (props) => {
    // {stock, initial, onAdd}

    const [count,setCount] = useState(parseInt(props.initial))
    const [stock,setStock]= useState(parseInt(props.stock-props.initial))
    
    console.log("Stock Disponible= "+stock)

const increment = () => {
    if(stock>0){
        setCount((count)=> count+1)
        setStock((stock)=> stock-1)
        }
        console.log(stock)
    }
    
    const decrement = () => {
        if(count>0){
             setCount((count)=> count-1)
             setStock((stock)=> stock+1)
             }
             console.log(stock)
    }
    const reset = () => {
    setStock((stock)=> (parseInt(props.stock)))
    }

    function onAdd(){
        const agregado = count;
        setCount((count)=> 0)
        return(
                console.log("Se han agregado"+count+" al carrito")
        )
    }
 
    return(

        <div class="plantilla">
        <h6>Cantidad Seleccionada:</h6>
        <section class="counter">
        <h1>{count}</h1>
        <button onClick={decrement}> -</button> 
        <button onClick={increment}>+</button>
        </section>
        <button class="addCarrito" onClick={onAdd}>Agregar al Carrito</button>
        <h1 class="stock"> Stock Disponible: {stock}</h1>
        <button onClick={reset}> reset</button> 
        </div>
        
    )
}



export default ItemCount;