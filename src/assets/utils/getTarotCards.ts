import {TarotDeck, TTarotCard} from "./TarotDeck";

export const getTarotCards = () => {
    const cardsIndexes: number[] = [];
    const cards: TTarotCard[] = [];
    while(cardsIndexes.length < 7) {
        const cardIndex = Number(Math.floor(Math.random() * TarotDeck.length));
        if(!cardsIndexes.includes(cardIndex)){
            cardsIndexes.push(cardIndex)
        }
    }

    cardsIndexes.forEach(index => {
        cards.push(TarotDeck[index])
    })

    return cards
}
