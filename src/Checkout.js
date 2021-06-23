

function Checkout(props) {
    return (

    <li key = { props.id }>
    <p className = "Item" >{ props.name }</p>
    <p className = "Price">{ `$${props.price}` }</p>
    <button>
        <i class="fas fa-times-circle"></i>
        <span class="Remove">Remove Item</span>
    </button>


    </li>
    )
}

export default Checkout;