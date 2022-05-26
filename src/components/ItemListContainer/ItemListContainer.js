import React from "react"
import { useState,useEffect } from 'react'
import { getProducts } from '../../asynmock'
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] =useState ([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    },[])
    
    console.log('antes de montar')

    // const newProduct = products.map(product => <p>{product.name}</p>)
    // console.log(newProduct)

    return(
         <div className='ItemListContainer'>
             <h1>{greeting}</h1>
             {/* products.map(product=> <p>{product.name}</p>)*/}
             <ItemList products={products}/>
             </div>
    )
}

export default ItemListContainer