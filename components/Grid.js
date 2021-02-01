import React from 'react';
import classNames from 'classnames';
import styles from './Grid.css';

const Grid = ({ items, renderItem, title }) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <div
                className={classNames(styles.grid, {
                    [styles.visible]: !!items,
                })}
            >
                {items?.map((item) => renderItem(item))}
            </div>
        </>
    );
};

export default Grid;