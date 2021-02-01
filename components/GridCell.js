import React from 'react';
import classNames from 'classnames';
import styles from './GridCell.css';

const GridCell = ({ children, onClick, className, selected }) => {
    return (
        <div
             className={classNames(styles.gridcell, className, {
                 [styles.selected]: selected,
             })}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default GridCell;