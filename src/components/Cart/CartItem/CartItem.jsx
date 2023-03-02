import styles from './CartItem.module.css';

import removeButton from '../../../assets/removeButton.svg';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../../actions/cartActions';

function CartItem({ id, title, quantity, price }) {
    const dispatch = useDispatch();

    return (
        <section className={styles.cartItem}>
            <article className={styles.cartItem__main}>
                <h4 className={styles.cartItem__title}>{title}</h4>
                <span className={styles.cartItem__separator}></span>
                <h4 className={styles.cartItem__quantity}>{quantity}</h4>
                <img
                    className={styles.cartItem__removeButton}
                    src={removeButton}
                    alt="Remove"
                    onClick={() => dispatch(removeCartItem(id))}
                />
            </article>

            <span className={styles.cartItem__price}>{price}</span>
        </section>
    );
}

export default CartItem;