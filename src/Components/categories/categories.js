import React from 'react'
import './categories.css'
import Category from './category'

export default function Categories() {
    let categoriesArr =[
        {name:'Grocery',img:'https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Mobile',img:'https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100'},
        {name:'Fashion',img:'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100'},
        {name:'Electronics',img:'https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100'},
        {name:'Travel',img:'https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100'},
        {name:'Home & Furniture',img:'https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100'},
        {name:'Appliances',img:'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100'},
        {name:'Beauty',img:'https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100'}
         ]
  return <div className='container'>
  <div className='row'>
    {categoriesArr.map((categoryObj,ind) =>{
       return <Category name={categoryObj.name} img={categoryObj.img}  key={ind}/>
    })}
  </div>



            </div>
  
}
