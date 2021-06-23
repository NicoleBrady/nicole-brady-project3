import { useState } from 'react';


function Store(props) {

const [isActive, setActive] = useState("false");
const handleActive = () => {
setActive(!isActive);
};
    
return (
    <li key = { props.id }>
        <div className = "imgContainer">
            <img src = { props.imgSrc } alt = { props.key }></img>
        </div>
        <h3>{ props.name }</h3>
        <div className = "detailsContainer">
            <div className = "priceContainer">
                <p>{ `$${props.price}` }</p>
            </div>
            <button className = "message" onClick = { () => { props.addToCart(); handleActive() }}>
                <i className={isActive ? "fas fa-plus" : "fas fa-plus"} ></i>
                <span className= {isActive ? "popupMessage hidden" : "popupMessage show"}>Added to Cart!</span>
            </button> 
        </div>
    </li>
)
} 

export default Store;