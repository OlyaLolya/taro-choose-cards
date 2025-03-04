import React, {useMemo, useState} from 'react';
import styles from './App.module.css';
import { Header } from "./Components/Header/Header";
import {CardsList} from "./Components/CardsList/CardsList";
import {SubmitButton} from './Components/SubmitButton/SubmitButton';
import {getTarotCards} from "./assets/utils/getTarotCards";

function App() {
    const [tarotList, setTarotList] = useState([]);
    const cards = useMemo(() => getTarotCards(), [])

    return (
        <div className={styles.App}>
            <Header />
            <CardsList cards={cards} tarotList={tarotList} setTarotList={setTarotList} />
            <SubmitButton tarotList={tarotList} />
        </div>
  );
}

export default App;
