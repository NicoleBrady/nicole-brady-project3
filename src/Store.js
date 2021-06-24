import { useState } from 'react';


// function Store(props) {
function Store ({imgSrc, price, id, name, addToCart}) {

const [isActive, setActive] = useState("false");
const handleActive = () => {
setActive(!isActive);
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
                <i className={isActive ? "fas fa-plus" : "fas fa-plus"} ></i>
                <span className= {isActive ? "popupMessage hidden" : "popupMessage show"}>Added to Cart!</span>
            </button> 
        </div>
    </li>
)
} 

export default Store;