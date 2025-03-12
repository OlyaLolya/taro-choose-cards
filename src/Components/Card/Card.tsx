import React, {useState} from "react";
import styles from './Card.module.css'
import {TTarotCard} from "../../assets/utils/TarotDeck";
import cn from 'classnames';

type CardProps = {
    card: TTarotCard,
    tarotList: TTarotCard[],
    setTarotList: any
}

export const Card = ({card, tarotList, setTarotList}: CardProps) => {
    const [isActive,  setIsActive] = useState(false);
    const { image} = card;

    return (
        <div className={styles.col} onClick={() => {
            if(tarotList.length < 3 && !isActive) {
                setIsActive(true);
                setTarotList([...tarotList, card]);
            }
        }}>
            <div className={cn(styles.container, { [styles.activeContainer]: isActive })}>
                <div className={styles.front}>
                    <div className={styles.inner}></div>
                </div>
                {image}
            </div>
        </div>
    )
}
