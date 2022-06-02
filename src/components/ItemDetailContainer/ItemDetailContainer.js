import React from "react"
import { useEffect, useState } from 'react'
import { getItem } from '../../asynmock'
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getItem('1').then(response => {
            setProduct(response)
        })
    }, [])

    return(
         <div>
             <ItemDetail title={product?.name}/>
        </div>
    )
    }

export default ItemDetailContainer