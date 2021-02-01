import React from 'react';
import styles from '../components/Button.css';

const Button = ({ children, onClick, link }) => {
    return (
        <a
            className={styles.button}
            onClick={onClick}
            href={link}
        >
            {children}
        </a>
    );d
};

export default Button;