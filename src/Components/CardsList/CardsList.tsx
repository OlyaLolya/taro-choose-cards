import React from "react";
import styles from './CardsList.module.css'
import {Card} from "../Card/Card";
import {TTarotCard} from "../../assets/utils/TarotDeck";

type CardsListProps = {
    cards: TTarotCard[],
    tarotList: TTarotCard[],
    setTarotList: any,
}

export const CardsList = ({cards, tarotList, setTarotList}: CardsListProps) => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>Выбрано {tarotList.length} / 3</p>
            <div className={styles.wrapper}>
                {cards.map(card => {
                    return <Card
                        key={card.id}
                        card={card}
                        tarotList={tarotList}
                        setTarotList={setTarotList}
                    />
                })}
            </div>
        </div>
    )
}
