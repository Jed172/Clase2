import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import './Item.css'
const Item = ({img, id, name, price}) => {
   
    return (
        <div class="itemContainer">
        <div class="card">
     <div class="container">
    <h4><b>{name}</b></h4>
    <div><img class="ItemImg"src={img}/></div>
    <h5>${price}</h5>
    </div>
    </div>
    <ItemCount stock={10} initial={0}/>
        </div>
    )
}
export default Item