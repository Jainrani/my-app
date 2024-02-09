
import './categories.css'
import propsTypes from 'prop-types'
import React, { Component } from 'react'
import Categories from './categories';


{/*export default function Category({img,name}) {
    return<>
    <div className='col'>
        <div className='category text-center'>
            <img src={img} alt='some text'/>
            <div>{name}</div>

        </div>

    </div>
    
    </>

}*/}


export default class category extends Component {
  render() {
    let{img, name}=this.props;
    return  <div className='col'>
    <div className='category text-center'>
        <img src={img} alt='some text'/>
        <div>{name}</div>

    </div>

</div>

  }
}
category.propsTypes ={
    name:propsTypes.string,
    img:propsTypes.string,
}

