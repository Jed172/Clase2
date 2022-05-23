import React from 'react'
import {useState, useEffect} from 'react'
import Button from '../Button/Button'

const CountFunction = (props)=> {
    const [count,setCount] = useState(0)
    const {obj, setObj} = useState({
        name: 'Lucas'
    })
    useEffect(() =>{
        console.log('ejecutado post montaje')
        return () => {
            console.log('Me Ejecuto antes de desmontar')
        }
    },[])
 useEffect(()=> {
     console.log('cambio el nombre')
 }, [obj.name])

    const decrement = () => {
         for(let i =0;i <5; i++) {
             console.log(`vuelta ${i + 1}`)
             setCount((count)=> count-1)
         }
    }

const increment = () => {
       setCount(count +1)
    }

console.log('ejecuto antes de montar')


    return(
        <div style={{display: "flex"}}>
            <button onClick={decrement}> -</button>
         -   
        <h1>{count}</h1>
        <button handleClick={increment}>+</button>    
    </div>
    )
}


export default CountFunction