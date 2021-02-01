import React, { Component } from 'react'
import styles from './BrandPage.css';
import { Pages } from '../helpers/consts';
import Button from '../components/Button.js';

export class BrandPage extends Component {

    render() {
        return (
            <div className={styles.bg}>
                <div className={styles.content}>
                    <h1 className={styles.header}>
                        X-CUTZ Barbershop
                    </h1>
                    <span className={styles.address}>
                        4791 Lowndes Hill Park Road
                        <br />
                        Bakersfield, CA 93307
                    </span>
                    <div className={styles.buttons}>
                        <Button
                            className={styles.button}
                            link={Pages.SERVICES}
                        >
                            Choose a service
                        </Button>

                        <Button 
                            className={styles.button}
                            link={Pages.PROFESSIONALS}
                        >
                            Choose a barber
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandPage