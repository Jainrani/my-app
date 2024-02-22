import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function HttpDemo4() {
    const [products ,setProducts]=useState([]);

    const fetchProducts = async () =>{
        let url='http://fakestoreapi.com/products';
        let response = await axios.get(url);
        console.log(response.data);
        setProducts(response.data)

    }

  useEffect(()=>{
    fetchProducts()
  },[]);
  return<>
    <h2 className='text-center'>Fetch Products  data - HTTP Demo4</h2>
    <div className='container'>
        <div className='row'>
        {products.map(product => {
                    return <div className='col-sm-3 mb-1' key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" style={{ height: '200px' }} alt='something' />
                            <div className="card-body text-center" >
                                <h5 className="card-title">{product.category}</h5>
                                <p className="card-text text-truncate" title={product.description}>{product.description}</p>
                                <p className="card-text text-truncate" title={product.price}>{product.price}</p>
                                <button className='btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                })}
        

        

</div>
        </div>
    
  </>
}


