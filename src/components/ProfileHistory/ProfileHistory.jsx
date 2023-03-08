import React from 'react';
import profileImg from '../../assets/Profile.svg'
import styles from './ProfileHistory.module.css'
import { useState, useEffect } from 'react';
import * as api from '../../utils/api';

const ProfileHistory = () => {
    const [history, setHistory] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        async function getHistory() {
            const history = await api.getUserHistory();

            if (history.success) {
                const orderHistory = [...history.orderHistory];

                orderHistory.reverse();

                // Räkna ut totala priset först
                setTotalPrice(() => orderHistory.reduce((acc, cur) => acc + cur.total, 0));

                // Spara ner alla history-objekt i lokalt state
                setHistory(() => {
                    return orderHistory.map((historyItem) => {
                        return {
                            orderDate: historyItem.orderDate,
                            orderNr: historyItem.orderNr,
                            total: historyItem.total
                        };
                    });
                });
            }
        }

        getHistory();
    }, [])

    return (
        <div className={styles.Profile__history}>
            <header className={styles.profile__header}>
                <img src={profileImg} style={{ height: '94px' }} />
                <h1 className={styles.profile__h1} style={{ marginBottom: '94px' }}>{sessionStorage.getItem('USER_NAME')}</h1>
            </header>
            <h1 className={styles.profile__h1} style={{ fontSize: '22px', marginBottom: '15px' }}> Orderhistorik</h1>
            <section className={styles.profile__content} style={{ paddingLeft: '2px', paddingRight: '15px' }}>
                {
                    history.map((historyItem) => {
                        return (
                            <article style={{ paddingBottom: '10px', marginTop: '10px' }} key={historyItem.orderNr}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                    <p className={styles.profile__order}>#{historyItem.orderNr}</p>
                                    <p className={styles.profile__date}>{historyItem.orderDate}</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className={styles['profile__order-sum']}>total ordersumma </p>
                                    <p className={styles['profile__order-total']}>{historyItem.total} kr</p>
                                </div>
                            </article>
                        );
                    })
                }
            </section>
            <div className={styles.profile__total}>
                <p className={styles['profile__total-sum']}>Totalt spenderat</p>
                <p className={styles['profile__total-sum']}>{totalPrice} kr</p>

            </div>

        </div>
    );
};

export default ProfileHistory;