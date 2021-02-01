import React, { useMemo } from 'react';
import classNames from 'classnames';
import Button from '../components/Button.js';
import styles from './Order.css';
import BarberStyles from '../components/Barber.css';
import { getBarberName, stringifyPrice } from '../helpers/common.js';

const Order = ({ barber, service }) => {
    const isSummaryVisible = useMemo(() => barber && service, [
        barber,
        service,
    ]);

    return (
        <div

            className={classNames(styles.summary, {
                [styles.visible]: isSummaryVisible,
            })}

        >
            <h2 className={styles.header}>Your order</h2>
            {isSummaryVisible && (
                <div className={styles.summaryContent}>
                    <div className={styles.summaryItem}>
                        <div className={styles.firstLine}>
                            <div className={styles.order}>1</div>
                            <span className={BarberStyles.name}>
                                {getBarberName(
                                    barber.firstName,
                                    barber.lastName
                                )}
                            </span>
                            <span className={classNames(BarberStyles.name, styles.textright)}>
                                {stringifyPrice(
                                    service.price,
                                    service.currency
                                )}
                            </span>
                        </div>
                        <span className={styles.service}>
                            {service.name}
                        </span>
                    </div>
                </div>
            )}

            <Button>Choose a time</Button>
        </div>
    );
};

export default Order;