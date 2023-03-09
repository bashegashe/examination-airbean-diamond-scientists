import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import drone from '../../assets/Group 5.svg'
import styles from "./Status.module.css"
import { Link } from 'react-router-dom';
import * as api from '../../utils/api';

const Status = (props) => {
    const [orderNr, setOrderNr] = useState(null);
    const [orderETA, setOrderETA] = useState(null);
    const [orderMessage, setOrderMessage] = useState(null);

    useEffect(() => {
        async function getOrder() {
            const tempOrderNr = sessionStorage.getItem('LAST_ORDER_NR');

            try {
                const order = await api.getOrder(tempOrderNr);

                if (order.eta) {
                    setOrderETA(order.eta);
                    setOrderNr(tempOrderNr);

                    setOrderMessage('Din beställning är på väg!');
                } else {
                    sessionStorage.removeItem('LAST_ORDER_NR');

                    setOrderMessage('Ingen aktiv beställning hittades!');
                }
            } catch(e) {
                setOrderMessage('Ingen aktiv beställning hittades!');
            }
        }

        getOrder();
    }, []);

    return (
        <div className={styles.status}>
            <header className={styles.status__header}>
                { orderNr && <p>Ordernummer <span>#{orderNr}</span></p> }
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