import React, { Component } from 'react'
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './pages/js/Dashboard'
import Navbar from './pages/js/Navbar'
import Footer from './pages/js/Footer'
import Category from './pages/js/Category'
import Catalog from './pages/js/Catalog'
import Ordered from './pages/js/Ordered'
import Fault from './pages/js/Fault'
const cards = require("./pages/js/Json")

export default class App extends Component {

  state = {
    show: true, 
    cards:cards,
    data:cards,
    buy:[],
    card1:[]
  }
  //  getTokken=()=>{
  //    var data={
  //      "username": "admin",
  //      "password": "testing321"
  //    }
  //    axios.post(`http://shop.abrorjonaxmadov.uz/auth/v1/login/`, data).then(res=>{
  //    }).catch(err=>{
  //      console.log(err);
  //    })
  //  }
      shop = (name, img, price, skidka) => {
        var push = true;
        var data1 = {
          "name": name,
          "img": img,
          "price": price,
          "skidka": skidka,
          "count": 1
        }
        if (this.state.buy[0] == undefined) {
          push = true;
        } else {
          for (var i = 0; i < this.state.buy.length; i++) {
            if (this.state.buy[i].name === data1.name) {
              this.state.buy[i].count++
              push = false;
            }
          }
        }
        if (push) {
          this.state.buy.push(data1)
        }
        localStorage.setItem("names", JSON.stringify(this.state.buy));
      }
      componentDidMount() {
        if (JSON.parse(localStorage.getItem("names")) !== null) {
          this.setState({
            buy: JSON.parse(localStorage.getItem("names"))
          })
        }
        //  console.log(this.shop)
      }
  search = () => {
    if (document.querySelector('.header_inputs').value === '') {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }

  render() {
    return (



      
      <div>

      {/* <Navbar/>

      {this.state.show?( 
        <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/category" element={<Category />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/ordered" element={<Ordered/>} />
            </Routes>
        </Router>
        ):(
        <div>
        </div>
      
      )}

      <Footer/> */}

        <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/ordered" element={<Ordered/>} />
          <Route path="/fault" element={<Fault/>} />
        
      </Routes>
    </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}
