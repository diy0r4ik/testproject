import React, { Component } from 'react'
import { BsInstagram, BsTelegram,BsFacebook} from 'react-icons/bs'
import logo from '../img/Logo.png';


import '../css/Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className='Footer'>
            <div className='Footer_logo'>
                <img src={logo}/>
                <p>Интернет-магазин электротехники </p>
                <p>©2014 - 2020  ETE-"Electro trend elite"</p>
            </div>
          <div className='Footer_left'>
            <div className='Footer_category'>
                <h2>Категории</h2>
                <div className='category_text'>
                    <div className='category_text_left'>
                        <p>Модульные автоматические выключатели</p>
                        <p>Силовые автоматические выключатели</p>
                        <p>Частотные преобразователи</p>
                        <p>Стабилизаторы напряжения</p>
                        <p>Распределительные щиты</p>
                        <p>Нейлоновые кабельные стяжки и аксессуары</p>
                        <p>Клеммы, зажимы, изоляторы и нулевые шины</p>
                    </div>
                    <div className='category_text_right'>
                        <p>Измерительные приборы и инструменты</p>
                        <p>Трансформаторы понижающие, блоки питания</p>
                        <p>Трансформаторы тока</p>
                        <p>Кабельные наконечники, гильзы</p>
                        <p>Аксессуары для сборки щитов и боксов</p>
                    </div>
                </div>
            </div>
            <div className='Footer_contact'>
                <h2>Контакт</h2>
                <p>+998 (94) 304-87-10</p>
                <p><span>Адрес:</span> <br/> Узбекистан, Ташкент, Шайхантахурский район, Тахатпуль, ул Адхама Рахмата 12B (ориентир рынок Малика)</p>
                <p><span>Режим Работы:</span><br/> Пн - Сб <br/> 09:00 - 18-00</p>
                <div className='social_icons_f'>
                    <BsInstagram/>/
                    <BsTelegram/>/
                    <BsFacebook/>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
