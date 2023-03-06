import styles from './CartItem.module.css';

import removeButton from '../../../assets/removeButton.svg';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../../actions/cartActions';

function CartItem({ id, title, quantity, price, promotion }) {
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
                    onClick={() => dispatch(removeCartItem({ title, id, promotion }))}
                />
            </article>

            <div className={styles.cartItem__priceContainer}>
                <strike
                    className={styles.cartItem__promotionPrice}
                    style={{ display: promotion !== undefined ? 'block' : 'none' }}
                >
                    {promotion && !promotion.promotionItems && (
                        <span className={styles.cartItem__price}>{parseInt(price) * quantity} kr</span>
                    )}
                    {promotion && promotion.promotionItems && (
                        <span className={styles.cartItem__price}>{parseInt(price)} kr</span>
                    )}
                </strike>

                {promotion && promotion.price > 0 && quantity > 1 && (
                    <span className={styles.cartItem__price}>
                        {promotion.price} kr x {quantity} = {parseInt(promotion.price) * quantity} kr
                    </span>
                )}
                
                {promotion && promotion.price > 0 && quantity === 1 && (
                    <span className={styles.cartItem__price}>{promotion.price} kr</span>
                )}

                {!promotion && quantity > 1 && (
                    <span className={styles.cartItem__price}>
                        {price} x {quantity} = {parseInt(price) * quantity} kr
                    </span>
                )}

                {!promotion && quantity === 1 && <span className={styles.cartItem__price}>{price}</span>}

                {promotion && (
                    <span
                        className={styles.cartItem__promotion}
                        style={{ ...promotion.style }}
                        title={promotion.description}
                    >
                        KAMPANJ
                    </span>
                )}
            </div>
        </section>
    );
}

export default CartItem;