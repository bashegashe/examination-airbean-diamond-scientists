import styles from './Cart.module.css';

import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import * as api from '../../utils/api';
import { addNewOrder } from '../../actions/cartActions';
import { useNavigate } from 'react-router-dom';

function Cart(props) {
    const state = useSelector((state) => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let cartTotal = 0;

    async function makeNewOrder() {
        const order = state.cart.map((cartItem) => {
            return {
                name: cartItem.title,
                price: cartItem.price
            };
        });

        const orderResult = await api.makeNewOrder(order);

        dispatch(addNewOrder(orderResult));

        navigate('/status');
    }

    return (
        <section className={styles.cart}>
            <div className={styles.cart__arrow}></div>

            <div className={styles.cart__container}>
                <h2>Din beställning</h2>

                {
                    state.cart.map((cartItem) => {
                        cartTotal += cartItem.quantity * cartItem.price; 

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
                    <Button type="dark" onClick={makeNewOrder}>Take my money!</Button>
                </div>
            </div>
        </section>
    );
}

export default Cart;