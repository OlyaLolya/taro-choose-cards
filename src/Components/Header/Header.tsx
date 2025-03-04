import React from "react";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Выберите три карты
            </h1>
        </div>
    )
}
