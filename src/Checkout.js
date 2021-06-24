

function Checkout(props) {
    return (

    <li key = { props.id }>
    <p className = "Item" >{ props.name }</p>
    <p className = "Price">{ `$${props.price}` }</p>
    <button onClick = { props.removeItems }>
        <i className="fas fa-times-circle"></i>
        <span className="Remove">Remove Item</span>
    </button>


    </li>
    )
}

export default Checkout;