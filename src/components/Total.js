import React, { Component } from 'react';
import '../App.css';

class Total extends Component {
    render(){
        return(
            <h3 className= "total-price">Total Price: ({this.props.priceTotal.toFixed(2)})</h3>
        );
    }
}

export default Total;