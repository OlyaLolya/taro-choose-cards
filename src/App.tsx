import React, {useEffect, useMemo, useState} from 'react';
import styles from './App.module.css';
import { Header } from "./Components/Header/Header";
import {CardsList} from "./Components/CardsList/CardsList";
import {getTarotCards} from "./assets/utils/getTarotCards";
import {TTarotCard} from "./assets/utils/TarotDeck";

function App() {
    const [tarotList, setTarotList] = useState<TTarotCard[]>([]);
    const cards = useMemo(() => getTarotCards(), [])

    useEffect(() => {
        if(tarotList.length === 3) {
            const cardsNames = tarotList.reduce((accumulator, card: TTarotCard, currentIndex) => {
                if(currentIndex === 0) {
                    return card.name
                }
                else {
                    return accumulator + ', ' + card.name
                }
            }, '')

            setTimeout(() => {
                window.Telegram.WebApp.sendData(`На мой вопрос мне выпали карты: ${cardsNames}`);
            }, 1500)
        }
    }, [tarotList])

    return (
        <div className={styles.App}>
            <Header />
            <CardsList cards={cards} tarotList={tarotList} setTarotList={setTarotList} />
        </div>
  );
}

export default App;
