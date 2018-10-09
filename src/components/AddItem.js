import React from 'react';

const AddItem = ({products}) => {
    return (
        <div className="list-group-item">
            <form>
            Quantity: 
            <input type="number" name="quantity" min= "0"></input>
            </form>
            
        </div>
    )
}

export default AddItem;