import React from 'react';

import GridCell from './GridCell.js';
import styles from './Service.css';

const Service = ({ name, duration, price, selected, onClick }) => {
    return (
        <GridCell className={styles.service} selected={selected} onClick={onClick}>
            <span className={styles.name}>{name}</span>
            <div className={styles.bottom}>
                <span className={styles.duration}>{duration}</span>
                <span className={styles.price}>{price}</span>
            </div>
        </GridCell>
    );
};

export default Service;