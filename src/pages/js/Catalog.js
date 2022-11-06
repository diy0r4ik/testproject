import React, { Component } from 'react'
import vikulchatel from '../img/vikulchatel.jpg'
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import '../css/Catalog.css'
const cards=require("../js/Json")

export default class Catalog extends Component {
    state={
        data:cards,
        buy:[]
      }
      shop=(name,img,price,skidka)=>{
        var push=true;
        var data1={
        "name":name,
        "img":img,
        "price":price,
        "skidka":skidka,
        "count":1
        }
  if(this.state.buy[0]==undefined){
  push=true;
  }else{
  for(var i=0; i<this.state.buy.length;i++){
    if(this.state.buy[i].name===data1.name){
       this.state.buy[i].count++
       push=false;
    }
  }
  }
  if(push){
    this.state.buy.push(data1)
  }
        localStorage.setItem("names", JSON.stringify(this.state.buy));
      }
      componentDidMount(){
     if (JSON.parse(localStorage.getItem("names"))!==null){
       this.setState({buy: JSON.parse(localStorage.getItem("names"))})
     }
    //  console.log(this.shop)
      }



    //   like



    state = { liked: false };
    toggle = () => {
      let localLiked = this.state.liked;
    
      // Toggle the state variable liked
      localLiked = !localLiked;
      this.setState({ liked: localLiked });
    };
  render() {
    return (
      <div className='Catalog'>
        <div className='where_you'>
            <a href='/'><i>Главная   /</i></a>
            <a href='#!'><i>  qayerdir</i></a>
        </div>
        <h1 className='category_name'>Пускатели электромагнитные, дополнительные устройства и запчасти</h1>
        <section>
            <div className='catalog_main'>
                <div className='catalog_left'>
                    <form>
                        <p>metki</p>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label>
                    </form>
                    <form>
                        <p>metki</p>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label>
                    </form>
                    <form>
                        <p>metki</p>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label>
                    </form>       
                </div>
                <div className='catalog_right'>
                    <h1>Под категории</h1>
                    <div className='catalog_categoty'>
                        
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                    </div>
                    <div className='catalog_cards2'>
                    {/* {this.state.data.map((item, key)=>{
                        {return <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>{item.cod}</p> 
                                    <p>В наличии</p>                                    
                                </div>

                                <h6>{item.name}</h6>
                                <div className='catalog_card_b'>
                                    <p className='card_price'>{item.price} сум</p>
                                    <p className='buy'>В КОРЗИНУ</p>                                
                                </div>

                            </div>
                        </div>}})}  */}
                        {/* {this.state.data.map((item, key)=>{
                            {return}
                        })} */}
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>            
        </section>    
          

      </div>
    )
  }
}
