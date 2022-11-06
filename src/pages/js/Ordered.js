import React, { Component } from 'react'
import vikulchatel from '../img/vikulchatel.jpg'
import {AiOutlineRight} from 'react-icons/ai'
import '../css/Ordered.css'
export default class Ordered extends Component {
    state={
        buy:[],
        totalprice:[],
        totalcount:0,
        totals:0
      }
      plus=(key)=>{
        this.state.buy[key].count++;
        this.setState({})
        localStorage.setItem("names", JSON.stringify(this.state.buy));
            this.totalprice()
            this.totalcount()
    
    
      }
        delete = (key) => {
            this.state.buy.splice(key, 1)
          this.setState({})
          localStorage.setItem("names", JSON.stringify(this.state.buy));
          this.totalprice()
            this.totalcount()
            this.totalSkidka()
    
    
        }
      minus=(key)=>{
        this.state.buy[key].count--;
        if(this.state.buy[key].count<=0){
    this.state.buy.splice(key,1)
        }
        this.setState({})
        localStorage.setItem("names", JSON.stringify(this.state.buy));
            this.totalprice()
            this.totalcount()
            this.totalSkidka()
    
    
        }
      totalprice=()=>{
        var a= 0
        for (let i = 0; i < this.state.buy.length; i++) {
          a=a+this.state.buy[i].price*this.state.buy[i].count
        }
        this.setState({totalprice:a.toFixed(2)})
      }
      totalSkidka=()=>{
         var a = 0
         for (let i = 0; i < this.state.buy.length; i++) {
           a = a + (this.state.buy[i].price * this.state.buy[i].count*this.state.buy[i].skidka)/100
         }
         this.setState({
           totals: a.toFixed(2)
         })
      }
    
       totalcount = () => {
         var b = 0
         for (let i = 0; i < this.state.buy.length; i++) {
           b = b + this.state.buy[i].count
         }
         this.setState({totalcount:b})
       }
    
        componentDidMount() {
          if (JSON.parse(localStorage.getItem("names")) !== null) {
            this.setState({
              buy: JSON.parse(localStorage.getItem("names"))
            })
          }
         
          
          setTimeout(() => {
            console.log(this.state.buy);
            this.totalprice()
            this.totalcount()
            this.totalSkidka()
          }, 100);
        }
  render() {
    return (
      <div>
        <div className='Ordered'>
            <div className='Ordered_nav'>
                <h1>Корзина (2 товаров)</h1>
            </div>           
            <div className='Ordered_main'>
                <div className='Ordered_left'>
                    <div className='Ordered_product'>
                        <img src={vikulchatel}/>
                        <div className='O_product_name'>
                            <p>Реле времени ST3P A-A 3 мин. (24 VDC)</p>
                            <p>Код Продукта: #514</p>
                        </div>
                        <div className='O_product_amount'>
                            <p>-</p><p className='O_P_amount'>2</p><p>+</p>
                        </div>
                        <div className='O_product_price'>
                            <p>(59 000 сум/шт.)</p>
                            <p className='O_product_price2'>59 000 сум</p>
                        </div>
                    </div>    
                    <div className='Ordered_product'>
                        <img src={vikulchatel}/>
                        <div className='O_product_name'>
                            <p>Реле времени ST3P A-A 3 мин. (24 VDC)</p>
                            <p>Код Продукта: #514</p>
                        </div>
                        <div className='O_product_amount'>
                            <p>-</p><p className='O_P_amount'>2</p><p>+</p>
                        </div>
                        <div className='O_product_price'>
                            <p>(59 000 сум/шт.)</p>
                            <p className='O_product_price2'>59 000 сум</p>
                        </div>
                    </div>    
                </div>    
                <div className='Ordered_right'>
                    <div className='Ordered_r_card'>
                        <h1>Сводка заказа</h1>
                        <div className='r_card_amount'>
                            <p>Количество товаров: 2 шт.</p>
                            <p>Стоимость товаров: 94 000 сум</p>                            
                        </div>
                        <div className='Total_price'>
                            <p>Итоговая стоимость:</p>
                            <p className='Total'>94 000 сум</p>
                        </div>
                    </div>
                    <button>Оформить Заказ <AiOutlineRight/> </button>
                </div>    
            </div> 
        </div>

      </div>
    )
  }
}
