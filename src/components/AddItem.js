import React from 'react';

const AddItem = ({products, selectQuantity, selectProduct}) => {
   
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
            <form>
            Quantity: 
            <input type="number" onChange={selectQuantity} name="quantity" min= "1"></input>
            </form>
            Products:
            <select onChange= {selectProduct} name= "products"> 
                {selectProducts(products)}
            </select><br></br>
            
            <button>Submit</button>
            
            
        </div>
    )
}

export default AddItem;