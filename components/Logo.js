import React from 'react';
import styles from '../components/Logo.css';
import { Pages } from '../helpers/consts.js';

const Logo = () => {
    return (
        <a href={Pages.HOMEPAGE}>
            <div
                className={styles.logo}
            >
                SQUIRE
            </div>
        </a>
        
    );d
};

export default Logo;