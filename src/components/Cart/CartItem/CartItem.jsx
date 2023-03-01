import styles from './CartItem.module.css';

function CartItem({title, quantity, price}) {
    return (
        <section className={styles.cartItem}>
            <article className={styles.cartItem__main}>
                <h4 className={styles.cartItem__title}>{title}</h4>
                <span className={styles.cartItem__separator}></span>
                <h4 className={styles.cartItem__quantity}>{quantity}</h4>
            </article>

            <span className={styles.cartItem__price}>{price}</span>
        </section>
    );
}

export default CartItem;