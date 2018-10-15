import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
// import CartItem from './components/CartItemsComponent';
import AddItem from './components/AddItem';
import Total from './components/Total';

class App extends Component {

  state = {
      cartItemsList:[
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
        product: {
          id: null,
          name: '',
          priceInCents: null,
        },
        quantity: 0, 
    };

    
    priceTotal= (e) => {
      let price = this.state.cartItemsList
      let quantity = this.state.cartItemsList[0].quantity
      for(let i =0; i < this.state.cartItemsList.length; i++){
        return (this.state.cartItemsList[i].product.priceInCents)*(this.state.cartItemsList[i].quantity)
      }

      let total = (price*quantity)
      console.log(total)
    }



    selectProduct = (e) => {
      let product = this.state.products.filter(item => e.target.value === item.name)
      this.setState({
        product: {
          id: product[0].id,
          name: e.target.value,
          priceInCents: ((product[0].priceInCents)/100)*this.state.quantity
        }
      })
    }

    selectQuantity = (e) => {
      console.log(e.target.value);
      this.setState({
        quantity: Number(e.target.value)
          
      });
    }
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
        </header>
        <div>
          <CartItems cartItemsList = {this.state.cartItemsList} />
        </div>
        <div>
          <Total name="totalPrice" priceTotal= {this.priceTotal} /> 
        </div>
        <div>
          <AddItem products = {this.state.products} formSubmit = {this.formSubmit} selectQuantity = {this.selectQuantity} selectProduct = {this.selectProduct} priceTotal={this.priceTotal}/>
        </div>
        <div>
          <CartFooter copyright= '&copy;' copyYear={'2018'} />
        </div>
      </div>
    );
  }
}

export default App;
