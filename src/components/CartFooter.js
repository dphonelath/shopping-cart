import React, { Component } from 'react';

class CartFooter extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"> {this.props.copyright} {this.props.copyYear}</a>
            </nav>
        )
    }
}

export default CartFooter;