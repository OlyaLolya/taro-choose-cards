import React from "react";
import styles from './SubmitButton.module.css'
import {TTarotCard} from "../../assets/utils/TarotDeck";
import cn from 'classnames';

type SubmitButtonProps = {
    tarotList: TTarotCard[],
}

export const SubmitButton = ({tarotList}: SubmitButtonProps) => {
    return (
        <button
            disabled={tarotList.length < 3}
            className={cn(styles.button,  { [styles.buttonDisabled]: tarotList.length < 3 })}
            onClick={() => {
                const cardsNames = tarotList.reduce((accumulator, card, currentIndex, tarotList) => {
                    if(currentIndex === 0) {
                        return card.name
                    }
                    else {
                        return accumulator + ', ' + card.name
                    }
                }, '')

                console.log(cardsNames)

            }}
        >
            Готово
        </button>
    )
}
