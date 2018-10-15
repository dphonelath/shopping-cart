import React, { Component } from 'react';

class Total extends Component {
    render(){
        return(
            <p>Total Price: ({this.props.priceTotal})</p>
        );
    }
}

export default Total;