import styles from './Cart.module.css';

import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';

import { useSelector } from 'react-redux';
import { useState } from 'react';

function Cart(props) {
    const [cartTotal, setCartTotal] = useState(0);
    const cart = useSelector((state) => state.cart);

    return (
        <section className={styles.cart}>
            <div className={styles.cart__arrow}></div>

            <div className={styles.cart__container}>
                <h2>Din beställning</h2>

                {
                    cart.map((cartItem) => {
                        setCartTotal((total) => total + cartItem.quantity * cartItem.price);

                        return (
                            <CartItem
                                title={cartItem.title}
                                quantity={cartItem.quantity}
                                price={cartItem.price + ' kr'}
                                key={cartItem.id}
                            />
                        )
                    })
                }

                <section className={styles.cartTotal}>
                    <article className={styles.cartTotal__main}>
                        <h4 className={styles.cartTotal__title}>Total</h4>
                        <span className={styles.cartTotal__separator}></span>
                        <h4 className={styles.cartTotal__price}>{cartTotal + ' kr'}</h4>
                    </article>

                    <span className={styles.cartTotal__info}>inkl. moms + drönarleverans</span>
                </section>

                <div className={styles.cart__button}>
                    <Button type="dark">Take my money!</Button>
                </div>
            </div>
        </section>
    );
}

export default Cart;