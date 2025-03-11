import React from "react";
import styles from './SubmitButton.module.css'
import {TTarotCard} from "../../assets/utils/TarotDeck";
import cn from 'classnames';
import process from "process";

type SubmitButtonProps = {
    tarotList: TTarotCard[],
}

export const SubmitButton = ({tarotList}: SubmitButtonProps) => {

    const sendMessageToTelegram = async (message: string) => {
        const params = new URL(window.location.href ?? '')
            .searchParams;
        const chatId = params.get("chatid");
        const token = '8104100408:AAGW7Hyr_N3_XQZK5F39tgRSnClaDQFBwiE';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        return await response.json();
    };

    return (
        <button
            disabled={tarotList.length < 3}
            className={cn(styles.button,  { [styles.buttonDisabled]: tarotList.length < 3 })}
            onClick={() => {
                const cardsNames = tarotList.reduce((accumulator, card, currentIndex) => {
                    if(currentIndex === 0) {
                        return card.name
                    }
                    else {
                        return accumulator + ', ' + card.name
                    }
                }, '')

                window.Telegram.WebApp.sendData(`На мой вопрос мне выпали карты: ${cardsNames}`);
            }}
        >
            Готово
        </button>
    )
}
