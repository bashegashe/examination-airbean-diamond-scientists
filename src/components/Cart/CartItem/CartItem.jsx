import styles from './CartItem.module.css';

import removeButton from '../../../assets/removeButton.svg';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../../actions/cartActions';
import CartPromotionItem from '../CartPromotionItem/CartPromotionItem';

function CartItem({ id, title, quantity, price, promotion }) {
    const dispatch = useDispatch();

    let itemPriceText;

    if (!promotion && quantity > 1) {
        itemPriceText = `${price} x ${quantity} = ${parseInt(price) * quantity} kr`;
    } else if (!promotion && quantity === 1) {
        itemPriceText = price;
    }

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
                    onClick={() => dispatch(removeCartItem({ id, promotion }))}
                />
            </article>

            <div className={styles.cartItem__priceContainer}>
                {!promotion && <span className={styles.cartItem__price}>{itemPriceText}</span> }

                {promotion && (
                    <CartPromotionItem quantity={quantity} price={price} promotion={promotion} />
                )}
            </div>
        </section>
    );
}

export default CartItem;