import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import drone from '../../assets/Group 5.svg'
import styles from "./Status.module.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOrder } from '../../utils/api';

const Status = (props) => {
    const [orderETA, setOrderETA] = useState(null);
    const state = useSelector((state) => state);

    useEffect(() => {
        async function updateOrderETA() {
            let orderNr = state.orderNr || sessionStorage.getItem('LAST_ORDER_NR');

            const order = await getOrder(orderNr);

            setOrderETA(order.eta);
        }

        updateOrderETA();
    }, []);

    return (
        <div className={styles.status}>
            <header className={styles.status__header}>
                <p>Ordernummer <span>#{state.orderNr || sessionStorage.getItem('LAST_ORDER_NR')}</span></p>
            </header>
            <section className={styles['status__section-drone']}>
                <img src={drone} />
            </section>
            <section className={styles['status__section-mid']}>
                {
                    orderETA && orderETA > 0 && (
                        <div>
                            <h2>Din beställning är på väg!</h2>
                            <p><span>{orderETA}</span> minuter</p>
                        </div>
                    ) || <h2>Din beställning har levererats!</h2>
                }
            </section>
            <section className={styles['status__section-bot']}>
                <Link to="/about"><Button type={'light'}>Ok, cool!</Button></Link>
            </section>
        </div>
    );
};
export default Status;