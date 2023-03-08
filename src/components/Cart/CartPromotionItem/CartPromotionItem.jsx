import styles from './CartPromotionItem.module.css';

function PromotionItem({ quantity, price, promotion }) {
    let normalPrice;
    let promotionPriceText;

    // Om kombinerad kampanj (2+ saker ihopslagna till en rad)
    if (promotion.promotionItems) {
        normalPrice = parseInt(price);
    } else {
        normalPrice = parseInt(price) * quantity;
    }

    if (promotion.price > 0 && quantity > 1) {
        promotionPriceText = `${promotion.price} kr x ${quantity} = ${parseInt(promotion.price) * quantity} kr`;
    } else if (promotion.price > 0 && quantity === 1) {
        promotionPriceText = `${promotion.price} kr`;
    }

    return (
        <>
            <strike
                className={styles.cartItem__promotionPrice}
                style={{ display: promotion !== undefined ? 'block' : 'none' }}
            >
                <span className={styles.cartItem__price}>{normalPrice} kr</span>
            </strike>

            <span className={styles.cartItem__price}>{promotionPriceText}</span>

            <span
                className={styles.cartItem__promotion}
                style={{ ...promotion.style }}
                title={promotion.description}
            >
                KAMPANJ
            </span>
        </>
    );
}

export default PromotionItem;