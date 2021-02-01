import React from 'react';
import GridCell from './GridCell.js';
import styles from '../components/Barber.css';

const Barber = ({ photo, firstName, lastName, selected, onClick }) => {
    const name = `${firstName} ${lastName[0]}.`;

    return (
        <GridCell className={styles.barber} selected={selected} onClick={onClick}>
            <img src={photo} className={styles.photo} alt={name} />
            <span className={styles.name}>{name}</span>
            <span className={styles.available}>Available Today</span>
            <div className={styles.hr} />
            <span className={styles.link}>
                About {firstName}
            </span>
        </GridCell>
    );
};

export default Barber;