import { useState } from 'react';

function Store ({imgSrc, price, id, name, addToCart}) {

// function to toggle between classes with a timeout (used for popup "add to cart message")
const [isActive, setActive] = useState("false");
const handleActive = () => {
setActive(!isActive);
    setTimeout(() => {
        setActive(isActive);
    }, 3000);
};
    
return (
    <li key = { id }>
        <div className = "imgContainer">
            <img src = { imgSrc } alt = { id }></img>
        </div>
        <h3>{ name }</h3>
        <div className = "detailsContainer">
            <div className = "priceContainer">
                <p>{ `$${price}` }</p>
            </div>
            <button className = "message" onClick = { () => { addToCart(); handleActive() }}>
                <i className={isActive ? "fas fa-plus" : "fas fa-check"} ></i>
                <span className= {isActive ? "popupMessage hidden" : "popupMessage show"}>Added to Cart!</span>
            </button> 
        </div>
    </li>
)
} 

export default Store;