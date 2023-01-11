import './App.css';
import firebase from './firebase'
import { useState, useEffect } from 'react';
import Header from './Header.js';
import Store from './Store.js';
import Checkout from './Checkout.js';
import logo from './logo.png';

function App() {

const [groceryItems, setGroceryItems] = useState([]);
const [checkoutItems, setCheckoutItems] = useState([]);



// create function for when an item is clicked, that item is pushed to setCheckoutItems array
useEffect ( () => {
  
}, [checkoutItems])

// function to add to cart
const addToCart = (item) => {
  
const current = [...checkoutItems]

setCheckoutItems([...current, item]);
}

// function to remove items from cart
const [remove, setRemove] = useState(checkoutItems);
const removeItems = (item) => {
  const remainingItems = checkoutItems.filter((item) => item !== item)
  setRemove(remainingItems);
  console.log(remainingItems);
}



useEffect ( () => {
// reference to firebase database
const dbRef = firebase.database().ref()
// an event listener watching for change in database
dbRef.on ('value', (response) => {
// this variable holds response value from firebase
const data = response.val();
// variable to grab grocery object from response
const groceries = data.Grocery;
// empty array to store grocery items
const itemArray = []
// loop through the groceries object
// push each item (key) and details to itemArray
for (let item in groceries) {
  itemArray.push({key: item, price: groceries[item].price, image: groceries[item].img})
}
// update state by passing itemArray into setGroceryItems
setGroceryItems(itemArray);
})
}, [])


  return (
    <div className="App">
      <Header />
      <main id = "main">
        <section className="Store">
          <div className = "storeHeader">
            <img src = {logo} alt = "no thrills" ></img>
            <h1><span>No</span>Thrills</h1>
          </div>
          <ul>
            {
              groceryItems.map(item => {
                return (
                  <Store 
                  imgSrc = { item.image }
                  price = { item.price }
                  key = { item.key }
                  name = { item.key }
                  id = { item.key }
                  addToCart = { () => addToCart(item)}
                  />
                )
              })
            }
          </ul>
        </section>
        <aside className = "Cart">
          <div className = "cartHeader">
            <h3>Your Cart</h3>
            <i className="fas fa-shopping-cart"></i>
          </div>
          <ul>
            {
              checkoutItems.map(item => {
                return (
                  <Checkout
                  price = { item.price }
                  key = { item.key }
                  name = { item.key }
                  id = { item.key }
                  // removeItems = { () => removeItems(item)}
                  />
                )
              })
            }
          </ul>
        </aside>
      </main>
      <footer>Created at <a href="https://junocollege.com" target="_blank" rel="noref">Juno College</a></footer>
    </div>
  );
}

export default App;


// const total = checkoutItems.reduce(function(previousValue, currentValue) {
//   return {
//     price: previousValue.price + currentValue.price,
//   }
// }, 0);
// console.log(total)

// console.log(test);






