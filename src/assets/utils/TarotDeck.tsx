import React from "react";
import Fool00 from '../images/Fool00.jpg';
import Magician01 from '../images/Magician01.jpg';
import HighPriestess02 from '../images/HighPriestess02.jpg';
import Empress03 from '../images/Empress03.jpg';
import Emperor04 from '../images/Emperor04.jpg';
import Hierophant05 from '../images/Hierophant05.jpg';
import Lovers06 from '../images/Lovers06.jpg';
import Chariot07 from '../images/Chariot07.jpg';
import Strength08 from '../images/Strength08.jpg';
import Hermit09 from '../images/Hermit09.jpg';
import WheelOfFortune10 from '../images/WheelOfFortune10.jpg';
import Justice11 from '../images/Justice11.jpg';
import HangedMan12 from '../images/HangedMan12.jpg';
import Death13 from '../images/Death13.jpg';
import Temperance14 from '../images/Temperance14.jpg';
import Devil15 from '../images/Devil15.jpg';
import Tower16 from '../images/Tower16.jpg';
import Star17 from '../images/Star17.jpg';
import Moon18 from '../images/Moon18.jpg';
import Sun19 from '../images/Sun19.jpg';
import Judgement20 from '../images/Judgement20.jpg';
import World21 from '../images/World21.jpg';

import Swords01 from '../images/Swords01.jpg';
import Wands01 from '../images/Wands01.jpg';
import Cups01 from '../images/Cups01.jpg';
import Pents01 from '../images/Pents01.jpg';

import Swords02 from '../images/Swords02.jpg';
import Wands02 from '../images/Wands02.jpg';
import Cups02 from '../images/Cups02.jpg';
import Pents02 from '../images/Pents02.jpg';

import Swords03 from '../images/Swords03.jpg';
import Wands03 from '../images/Wands03.jpg';
import Cups03 from '../images/Cups03.jpg';
import Pents03 from '../images/Pents03.jpg';

import Swords04 from '../images/Swords04.jpg';
import Wands04 from '../images/Wands04.jpg';
import Cups04 from '../images/Cups04.jpg';
import Pents04 from '../images/Pents04.jpg';

import Swords05 from '../images/Swords05.jpg';
import Wands05 from '../images/Wands05.jpg';
import Cups05 from '../images/Cups05.jpg';
import Pents05 from '../images/Pents05.jpg';

import Swords06 from '../images/Swords06.jpg';
import Wands06 from '../images/Wands06.jpg';
import Cups06 from '../images/Cups06.jpg';
import Pents06 from '../images/Pents06.jpg';

import Swords07 from '../images/Swords07.jpg';
import Wands07 from '../images/Wands07.jpg';
import Cups07 from '../images/Cups07.jpg';
import Pents07 from '../images/Pents07.jpg';

import Swords08 from '../images/Swords08.jpg';
import Wands08 from '../images/Wands08.jpg';
import Cups08 from '../images/Cups08.jpg';
import Pents08 from '../images/Pents08.jpg';

import Swords09 from '../images/Swords09.jpg';
import Wands09 from '../images/Wands09.jpg';
import Cups09 from '../images/Cups09.jpg';
import Pents09 from '../images/Pents09.jpg';

import Swords10 from '../images/Swords10.jpg';
import Wands10 from '../images/Wands10.jpg';
import Cups10 from '../images/Cups10.jpg';
import Pents10 from '../images/Pents10.jpg';

import Swords11 from '../images/Swords11.jpg';
import Wands11 from '../images/Wands11.jpg';
import Cups11 from '../images/Cups11.jpg';
import Pents11 from '../images/Pents11.jpg';

import Swords12 from '../images/Swords12.jpg';
import Wands12 from '../images/Wands12.jpg';
import Cups12 from '../images/Cups12.jpg';
import Pents12 from '../images/Pents12.jpg';

import Swords13 from '../images/Swords13.jpg';
import Wands13 from '../images/Wands13.jpg';
import Cups13 from '../images/Cups13.jpg';
import Pents13 from '../images/Pents13.jpg';

import Swords14 from '../images/Swords14.jpg';
import Wands14 from '../images/Wands14.jpg';
import Cups14 from '../images/Cups14.jpg';
import Pents14 from '../images/Pents14.jpg';

import styles from '../../Components/Card/Card.module.css'


export type TTarotCard = {
        id: number,
        name: string,
        image: React.ReactNode,
}

export const TarotDeck: TTarotCard[] = [
    {
        id: 0,
        name: 'Шут',
        image: <img alt='Шут' className={styles.back} src = {Fool00}/>
    },
    {
        id: 1,
        name: 'Маг',
        image: <img alt='Маг' className={styles.back} src = {Magician01}/>
    },
    {
        id: 2,
        name: 'Верховная Жрица',
        image: <img alt='Верховная Жрица' className={styles.back} src = {HighPriestess02}/>
    },
    {
        id: 3,
        name: 'Императрица',
        image: <img alt='Императрица' className={styles.back} src = {Empress03}/>
    },
    {
        id: 4,
        name: 'Император',
        image: <img alt='Император' className={styles.back} src = {Emperor04}/>
    },
    {
        id: 5,
        name: 'Иерофант',
        image: <img alt='Иерофант' className={styles.back} src = {Hierophant05}/>
    },
    {
        id: 6,
        name: 'Влюблённые',
        image: <img alt='Влюблённые' className={styles.back} src = {Lovers06}/>
    },
    {
        id: 7,
        name: 'Колесница',
        image: <img alt='Колесница' className={styles.back} src = {Chariot07}/>
    },
    {
        id: 8,
        name: 'Сила',
        image: <img alt='Сила' className={styles.back} src = {Strength08}/>
    },
    {
        id: 9,
        name: 'Отшельник',
        image: <img alt='Отшельник' className={styles.back} src = {Hermit09}/>
    },
    {
        id: 10,
        name: 'Колесо Судьбы',
        image: <img alt='Колесо Судьбы' className={styles.back} src = {WheelOfFortune10}/>
    },
    {
        id: 11,
        name: 'Справедливость',
        image: <img alt='Справедливость' className={styles.back} src = {Justice11}/>
    },
    {
        id: 12,
        name: 'Повешенный',
        image: <img alt='Повешенный' className={styles.back} src = {HangedMan12}/>
    },
    {
        id: 13,
        name: 'Смерть',
        image: <img alt='Смерть' className={styles.back} src = {Death13}/>
    },
    {
        id: 14,
        name: 'Умеренность',
        image: <img alt='Умеренность' className={styles.back} src = {Temperance14}/>
    },
    {
        id: 15,
        name: 'Дьявол',
        image: <img alt='Дьявол' className={styles.back} src = {Devil15}/>
    },
    {
        id: 16,
        name: 'Башня',
        image: <img alt={'Башня' } className={styles.back} src = {Tower16}/>
    },
    {
        id: 17,
        name: 'Звезда',
        image: <img alt='Звезда' className={styles.back} src = {Star17}/>
    },
    {
        id: 18,
        name: 'Луна',
        image: <img alt={'Луна' } className={styles.back} src = {Moon18}/>
    },
    {
        id: 19,
        name: 'Солнце',
        image: <img alt='Солнце' className={styles.back} src = {Sun19}/>
    },
    {
        id: 20,
        name: 'Суд',
        image: <img alt='Суд' className={styles.back} src = {Judgement20}/>
    },
    {
        id: 21,
        name: 'Мир',
        image: <img alt='Мир' className={styles.back} src = {World21}/>
    },
    {
        id: 22,
        name: 'Туз мечей',
        image: <img alt='Туз мечей' className={styles.back} src={Swords01}/>
    },
    {
        id: 23,
        name: 'Туз жезлов',
        image: <img alt='Туз жезлов' className={styles.back} src={Wands01}/>
    },
    {
        id: 24,
        name: 'Туз кубков',
        image: <img alt='Туз кубков' className={styles.back} src={Cups01}/>
    },
    {
        id: 25,
        name: 'Туз пентаклей',
        image: <img alt='Туз пентаклей' className={styles.back} src={Pents01}/>
    },
    {
        id: 26,
        name: 'Двойка мечей',
        image: <img alt='Двойка мечей' className={styles.back} src={Swords02}/>
    },
    {
        id: 27,
        name: 'Двойка жезлов',
        image: <img alt='Двойка жезлов' className={styles.back} src={Wands02}/>
    },
    {
        id: 28,
        name: 'Двойка кубков',
        image: <img alt='Двойка кубков' className={styles.back} src={Cups02}/>
    },
    {
        id: 29,
        name: 'Двойка пентаклей',
        image: <img alt='Двойка пентаклей' className={styles.back} src={Pents02}/>
    },
    {
        id: 30,
        name: 'Тройка мечей',
        image: <img alt='Тройка мечей' className={styles.back} src={Swords03}/>
    },
    {
        id: 31,
        name: 'Тройка жезлов',
        image: <img alt='Тройка жезлов' className={styles.back} src={Wands03}/>
    },
    {
        id: 32,
        name: 'Тройка кубков',
        image: <img alt='Тройка кубков' className={styles.back} src={Cups03}/>
    },
    {
        id: 33,
        name: 'Тройка пентаклей',
        image: <img alt='Тройка пентаклей' className={styles.back} src={Pents03}/>
    },
    {
        id: 34,
        name: 'Четверка мечей',
        image: <img alt='Четверка мечей' className={styles.back} src={Swords04}/>
    },
    {
        id: 35,
        name: 'Четверка жезлов',
        image: <img alt='Четверка жезлов' className={styles.back} src={Wands04}/>
    },
    {
        id: 36,
        name: 'Четверка кубков',
        image: <img alt='Четверка кубков' className={styles.back} src={Cups04}/>
    },
    {
        id: 37,
        name: 'Четверка пентаклей',
        image: <img alt='Четверка пентаклей' className={styles.back} src={Pents04}/>
    },
    {
        id: 38,
        name: 'Пятерка мечей',
        image: <img alt='Пятерка мечей' className={styles.back} src={Swords05}/>
    },
    {
        id: 39,
        name: 'Пятерка жезлов',
        image: <img alt='Пятерка жезлов' className={styles.back} src={Wands05}/>
    },
    {
        id: 40,
        name: 'Пятерка кубков',
        image: <img alt='Пятерка кубков' className={styles.back} src={Cups05}/>
    },
    {
        id: 41,
        name: 'Пятерка пентаклей',
        image: <img alt='Пятерка пентаклей' className={styles.back} src={Pents05}/>
    },
    {
        id: 42,
        name: 'Шестерка мечей',
        image: <img alt='Шестерка мечей' className={styles.back} src={Swords06}/>
    },
    {
        id: 43,
        name: 'Шестерка жезлов',
        image: <img alt='Шестерка жезлов' className={styles.back} src={Wands06}/>
    },
    {
        id: 44,
        name: 'Шестерка кубков',
        image: <img alt='Шестерка кубков' className={styles.back} src={Cups06}/>
    },
    {
        id: 45,
        name: 'Шестерка пентаклей',
        image: <img alt='Шестерка пентаклей' className={styles.back} src={Pents06}/>
    },
    {
        id: 46,
        name: 'Семерка мечей',
        image: <img alt='Семерка мечей' className={styles.back} src={Swords07}/>
    },
    {
        id: 47,
        name: 'Семерка жезлов',
        image: <img alt='Семерка жезлов' className={styles.back} src={Wands07}/>
    },
    {
        id: 48,
        name: 'Семерка кубков',
        image: <img alt='Семерка кубков' className={styles.back} src={Cups07}/>
    },
    {
        id: 49,
        name: 'Семерка пентаклей',
        image: <img alt='Семерка пентаклей' className={styles.back} src={Pents07}/>
    },
    {
        id: 50,
        name: 'Восьмерка мечей',
        image: <img alt='Восьмерка мечей' className={styles.back} src={Swords08}/>
    },
    {
        id: 51,
        name: 'Восьмерка жезлов',
        image: <img alt='Восьмерка жезлов' className={styles.back} src={Wands08}/>
    },
    {
        id: 52,
        name: 'Восьмерка кубков',
        image: <img alt='Восьмерка кубков' className={styles.back} src={Cups08}/>
    },
    {
        id: 53,
        name: 'Восьмерка пентаклей',
        image: <img alt='Восьмерка пентаклей' className={styles.back} src={Pents08}/>
    },
    {
        id: 54,
        name: 'Девятка мечей',
        image: <img alt='Девятка мечей' className={styles.back} src={Swords09}/>
    },
    {
        id: 55,
        name: 'Девятка жезлов',
        image: <img alt='Девятка жезлов' className={styles.back} src={Wands09}/>
    },
    {
        id: 56,
        name: 'Девятка кубков',
        image: <img alt='Девятка кубков' className={styles.back} src={Cups09}/>
    },
    {
        id: 57,
        name: 'Девятка пентаклей',
        image: <img alt='Девятка пентаклей' className={styles.back} src={Pents09}/>
    },
    {
        id: 58,
        name: 'Десятка мечей',
        image: <img alt='Десятка мечей' className={styles.back} src={Swords10}/>
    },
    {
        id: 59,
        name: 'Десятка жезлов',
        image: <img alt='Десятка жезлов' className={styles.back} src={Wands10}/>
    },
    {
        id: 60,
        name: 'Десятка кубков',
        image: <img alt='Десятка кубков' className={styles.back} src={Cups10}/>
    },
    {
        id: 61,
        name: 'Десятка пентаклей',
        image: <img alt='Десятка пентаклей' className={styles.back} src={Pents10}/>
    },
    {
        id: 62,
        name: 'Паж мечей',
        image: <img alt='Паж мечей' className={styles.back} src={Swords11}/>
    },
    {
        id: 63,
        name: 'Паж жезлов',
        image: <img alt='Паж жезлов' className={styles.back} src={Wands11}/>
    },
    {
        id: 64,
        name: 'Паж кубков',
        image: <img alt='Паж кубков' className={styles.back} src={Cups11}/>
    },
    {
        id: 65,
        name: 'Паж пентаклей',
        image: <img alt='Паж пентаклей' className={styles.back} src={Pents11}/>
    },
    {
        id: 66,
        name: 'Рыцарь мечей',
        image: <img alt='Рыцарь мечей' className={styles.back} src={Swords12}/>
    },
    {
        id: 67,
        name: 'Рыцарь жезлов',
        image: <img alt='Рыцарь жезлов' className={styles.back} src={Wands12}/>
    },
    {
        id: 68,
        name: 'Рыцарь кубков',
        image: <img alt='Рыцарь кубков' className={styles.back} src={Cups12}/>
    },
    {
        id: 69,
        name: 'Рыцарь пентаклей',
        image: <img alt='Рыцарь пентаклей' className={styles.back} src={Pents12}/>
    },
    {
        id: 70,
        name: 'Королева мечей',
        image: <img alt='Королева мечей' className={styles.back} src={Swords13}/>
    },
    {
        id: 71,
        name: 'Королева жезлов',
        image: <img alt='Королева жезлов' className={styles.back} src={Wands13}/>
    },
    {
        id: 72,
        name: 'Королева кубков',
        image: <img alt='Королева кубков' className={styles.back} src={Cups13}/>
    },
    {
        id: 73,
        name: 'Королева пентаклей',
        image: <img alt='Королева пентаклей' className={styles.back} src={Pents13}/>
    },
    {
        id: 74,
        name: 'Король мечей',
        image: <img alt='Король мечей' className={styles.back} src={Swords14}/>
    },
    {
        id: 75,
        name: 'Король жезлов',
        image: <img alt='Король жезлов' className={styles.back} src={Wands14}/>
    },
    {
        id: 76,
        name: 'Король кубков',
        image: <img alt='Король кубков' className={styles.back} src={Cups14}/>
    },
    {
        id: 77,
        name: 'Король пентаклей',
        image: <img alt='Король пентаклей' className={styles.back} src={Pents14}/>
    },
]
