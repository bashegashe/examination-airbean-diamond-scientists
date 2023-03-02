import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import drone from '../../assets/Group 5.svg'
import styles from "./Status.module.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOrder } from '../../utils/api';

const Status = (props) => {
    const [orderETA, setOrderETA] = useState(null);
    const [orderMessage, setOrderMessage] = useState(null);

    const state = useSelector((state) => state);

    useEffect(() => {
        async function updateOrderETA() {
            let orderNr = state.orderNr || sessionStorage.getItem('LAST_ORDER_NR');

            try {
                const order = await getOrder(orderNr);

                if (order.eta) {
                    setOrderETA(order.eta);
                    setOrderMessage('Din beställning är på väg!');
                } else {
                    setOrderMessage('Ingen aktiv beställning hittades!');
                }
            } catch(e) {
                setOrderMessage('Ingen aktiv beställning hittades!');
            }
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
                <h2>{orderMessage}</h2>
                {orderETA && <p><span>{orderETA}</span> minuter</p>}
            </section>
            <section className={styles['status__section-bot']}>
                <Link to="/about"><Button type={'light'}>Ok, cool!</Button></Link>
            </section>
        </div>
    );
};
export default Status;