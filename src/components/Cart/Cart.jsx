import './Cart.css';

import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';

function Cart(props) {
    return (
        <section className="cart">
            <div className="cart__arrow"></div>

            <div className="cart__container">
                <h2>Din beställning</h2>

                <CartItem title="Bryggkaffe" quantity="1" price="98 kr" />

                <section className="cartTotal">
                    <article className="cartTotal__main">
                        <h4 className="cartTotal__title">Total</h4>
                        <span className="cartTotal__separator"></span>
                        <h4 className="cartTotal__price">98 kr</h4>
                    </article>

                    <span className="cartTotal__info">inkl. moms + drönarleverans</span>
                </section>

                <div className="cart__button">
                    <Button type="dark">Take my money!</Button>
                </div>
            </div>
        </section>
    );
}

export default Cart;