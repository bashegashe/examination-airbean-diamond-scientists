import styles from './Cart.module.css';

import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';

function Cart(props) {
    return (
        <section className={styles.cart}>
            <div className={styles.cart__arrow}></div>

            <div className={styles.cart__container}>
                <h2>Din beställning</h2>

                <CartItem title="Bryggkaffe" quantity="1" price="98 kr" />

                <section className={styles.cartTotal}>
                    <article className={styles.cartTotal__main}>
                        <h4 className={styles.cartTotal__title}>Total</h4>
                        <span className={styles.cartTotal__separator}></span>
                        <h4 className={styles.cartTotal__price}>98 kr</h4>
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