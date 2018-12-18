import React from 'react';
import Total from './Total';
import '../App.css'

const AddItem = ({products, selectQuantity, selectProduct, priceTotal, concatItem}) => {

    const selectProducts = (arr) => {
        return (arr.map(item => {
            return (
                <option>{item.name}</option>
            )
        }
        ))
    }

    return (
        <div className="list-item">
            <form onSubmit={concatItem} >
                Quantity: 
                <input type="number" onChange={selectQuantity} name="quantity" min= "1"></input><br></br>
                Products:
                <select onChange= {selectProduct} placeholder="Please Select Product" name= "products"> 
                    <option disabled selected>Please Select Product</option>
                    {selectProducts(products)}
            </select><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddItem;