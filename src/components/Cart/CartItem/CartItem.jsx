import './CartItem.css';

function CartItem({title, quantity, price}) {
    return (
        <section className="cartItem">
            <article className="cartItem__main">
                <h4 className="cartItem__title">{title}</h4>
                <span className="cartItem__separator"></span>
                <h4 className="cartItem__quantity">{quantity}</h4>
            </article>

            <span className="cartItem__price">{price}</span>
        </section>
    );
}

export default CartItem;