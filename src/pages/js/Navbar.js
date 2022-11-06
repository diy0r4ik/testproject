import React, { Component } from 'react'
import logo from '../img/Logo.png';

import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsHandbag, BsSearch} from 'react-icons/bs'
import '../css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='Navbar'>
          <div className='Nav_logo'>
            <a href='/'><img src={logo} alt="Logo" className="Logo" /></a>
            <div className='Nav_phone'>+998 (94) 304-87-10</div>
          </div>
          
          <div className='Nav_search'>
            <div className='Input_a'>
              <input placeholder='Поиск товаров, категорий......'></input>
              <BsSearch/>
            </div>
            <div className='Input_a'>
              <input placeholder='Поиск товаров по коду......'></input>
              <BsSearch/>

            </div>
          </div>
          <div className='Nav_right'>
            <div className='user_icons'>
              <div className='user'>
              <AiOutlineUser className='icon'/>
              <p>Вход</p>
              </div>
            </div>
            <div className='user_icons'>
              <div className='user'>
              <AiOutlineHeart className='icon'/>
              <p>Избранные</p>
              </div>
            </div>

            <div className='user_icons'>
              <a href='/ordered'><div className='user'>
                <BsHandbag className='icon'/>
                <p>Корзина</p>
              </div></a>
            </div>
          </div>
        </div>
        <div className='Navbar_2'>
          <div className='Nav_logo'>
            <a href='/'><img src={logo} alt="Logo" className="Logo" /></a>
            <div className='Nav_phone'>+998(94)3048710</div>
          </div>
          <div className='Nav_right'>
            <div className='user_icons'>
              <div className='user'>
              <AiOutlineUser className='icon'/>
              <p>Вход</p>
              </div>
            </div>
            <div className='user_icons'>
              <div className='user'>
              <AiOutlineHeart className='icon'/>
              <p>Избранные</p>
              </div>
            </div>

            <div className='user_icons'>
              <a href='/ordered'><div className='user'>
               <BsHandbag className='icon'/>
                <p>Корзина</p>
              </div></a>
            </div>
          </div>
        </div>
        <div className='Nav_search2'>
            <div className='Input_a'>
              <input placeholder='Поиск товаров, категорий......'></input>
              <BsSearch/>
            </div>
            <div className='Input_a'>
              <input placeholder='Поиск товаров по коду......'></input>
              <BsSearch/>

            </div>
        </div>
        <div className='Menu'>
          <select>
            <option>Каталог продукции</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
          </select>
          <a href='#!'><h5 className='m'>О компании</h5></a>
          <a href='#!'><h5 className='m'>Связаться с нами</h5></a>
          <div className='menu_2'>
            <select>
              <option>Menu</option>
              <option><a href='#!'><h5 className='#'>О компании</h5></a></option>
              <option><a href='#!'><h5 className='#'>Связаться с нами</h5></a></option>
            </select>
          </div>
        </div>

      </div>
    )
  }
}
