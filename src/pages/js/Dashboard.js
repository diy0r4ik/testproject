import React, { Component } from 'react'

import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineMarkEmailUnread, MdOutlineLocationOn} from 'react-icons/md'
import {BsClock, BsInstagram, BsTelegram,BsFacebook} from 'react-icons/bs'
import invector from '../img/invector.jpg'
import vikulchatel from '../img/vikulchatel.jpg'
import brands from '../img/brands.jpg'
import avtomat from '../img/avtomat.jpg'

import '../css/Dashboard.css'
import Carousel from 'react-bootstrap/Carousel';
export default class Dashboard extends Component {
  render() {
    return (
      <div>
 <Carousel>
      <Carousel.Item interval={1000}>
        <div className='Slide'>
          <div className='Slide_left'>
            <h3> Цифровые мультиметры </h3>
            <a>Delixe</a>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm, <br/> gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'>
            <img src={invector} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='Slide'>
          <div className='Slide_left'>
            <h3> Цифровые мультиметры </h3>
            <a>Chint</a>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm, <br/> gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'>
            <img src={invector} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='Slide'>
          <div className='Slide_left'>
            <h3> Цифровые мультиметры </h3>
            <a>АНС</a>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm, <br/> gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'>
            <img src={invector} />
          </div>
        </div>

      </Carousel.Item>
    </Carousel>
    <div className='catalog'>
      <div className='wrapper'>
        <div className='catalog-skew'>
          <div className='section__heading header-white'>
            <h2>Наш Каталог</h2>
          </div>
          <div class="catalog__items">
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
            <a href='/catalog'><div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div></a>
          </div>
          <a href='/category' className='catalog_btn_a'>
            <div className='catalog_btn'>
              <a href='/category'><button>Все категории</button></a>
            </div>
          </a>
        </div>
      </div>
      {/* <h1>Наш Каталог</h1> */}
    </div>
    <section>
      <div className='contact'>
        <div className='section__heading2 header-white2'>
            <h2>Наш Каталог</h2>
        </div>
        <div className='contact_icons'>
          <div className='contact_icon'>
            <FiPhoneCall/>
            <p>+998943048710</p>
          </div>
          <div className='contact_icon'>
            <MdOutlineMarkEmailUnread/>
            <p>Ess.uz@mail.ru</p>
          </div>
          <div className='contact_icon'>
            <BsClock/>
            <p>Пн - Сб <br/> 09:00 - 18-00</p>
          </div>
          <div className='contact_icon'>
            <MdOutlineLocationOn/>
            <p>Узбекистан, Ташкент, <br/> Шайхантахурский район, Тахатпуль, <br/> ул Адхама Рахмата 12B (ориентир <br/> рынок Малика)
</p>
          </div>
          <div className='contact_icon'>
            <div className='social_icons'>
              <BsInstagram/>
              <BsTelegram/>
              <BsFacebook/>
            </div>
            <p>Ищите нас в социальных сетях</p>
          </div>
        </div>
      </div>
    </section>

    <div className='brands'>
      <img src={brands}/>
    </div>

      </div>
    )
  }
}
