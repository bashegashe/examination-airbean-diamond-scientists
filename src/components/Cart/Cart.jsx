import styles from './Cart.module.css';

import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import * as api from '../../utils/api';
import { addNewOrder, clearCartItems } from '../../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import getPromotionCart from '../../utils/promotions';

function Cart(props) {
    const state = useSelector((state) => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const promotionCart = getPromotionCart(state.cart);

    let cartTotal = state.cart.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
    }, 0);

    let promotionCartTotal = promotionCart.reduce((acc, cur) => {
        const price = cur.promotion?.price ?? cur.price;

        return acc + price * cur.quantity;
    }, 0);

    const hasPromotion = cartTotal != promotionCartTotal;

    async function makeNewOrder() {
        if (state.cart.length === 0) return; // Cart måste ha minst en tillagd produkt för att kunna göra beställning

        const order = [];

        state.cart.map((cartItem) => {
            Array(cartItem.quantity).fill(0).map(() => {
                order.push({
                    name: cartItem.title,
                    price: cartItem.price
                });
            })
        });

        const orderNr = await api.makeNewOrder(order);

        sessionStorage.setItem('LAST_ORDER_NR', orderNr);

        dispatch(addNewOrder(orderNr)); // Lägg till orderNr i redux state
        dispatch(clearCartItems()); // Töm cart

        sessionStorage.removeItem('CURRENT_CART');

        navigate('/status');
    }

    return (
        <section className={styles.cart}>
            <div className={styles.cart__arrow}></div>

            <div className={styles.cart__container}>
                <h2>Din beställning</h2>

                {
                    promotionCart.map((cartItem, i) => {
                        return (
                            <CartItem
                                id={cartItem.id}
                                title={cartItem.title}
                                quantity={cartItem.quantity}
                                price={cartItem.price + ' kr'}
                                promotion={cartItem.promotion}
                                key={`${cartItem.id}-${i}`}
                            />
                        )
                    })
                }

                <section className={styles.cartTotal}>
                    <article className={styles.cartTotal__main}>
                        <h4 className={styles.cartTotal__title}>Total</h4>
                        <span className={styles.cartTotal__separator}></span>
                        {!hasPromotion && <h4 className={styles.cartTotal__price}>{cartTotal} kr</h4>}
                        {hasPromotion && <h4 className={styles.cartTotal__price}>{promotionCartTotal} kr</h4>}
                    </article>
                    <div className={styles.cartTotal__bottom}>
                        <span className={styles.cartTotal__info}>inkl. moms + drönarleverans</span>
                        <strike
                            className={styles.cartTotal__promotionPrice}
                            style={{ display: hasPromotion ? 'block' : 'none' }}
                        >
                            <h4 className={styles.cartTotal__price}>{cartTotal + ' kr'}</h4>
                        </strike>
                    </div>
                </section>

                <div className={styles.cart__button}>
                    <Button type="dark" onClick={makeNewOrder}>Take my money!</Button>
                </div>
            </div>
        </section>
    );
}

export default Cart;