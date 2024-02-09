import React from 'react'
import products from './products.json'

export default function Listdemo() {
  return <>
  <h2 className='text-center'>Product List</h2>
  <div className='container'>
    <div className='row'>
        {products.map(product=>{
            return <div className='col-sm-3' key={product.id}>
                <div className="card" style={{width:'18rem'}}>
  <img src={product.image} style={{height:'200px'}} className="card-img-top" alt={product.category}/>
  <div className="card-body text-center" style={{height:'100px'}} >
    <h5 className="card-title">{product.category}</h5>
    <p className="card-text text-center text-truncate">{product.description}</p>
    </div>
    <div className='card-body'>
    <button className='btn btn-primary'>Buy Now</button>
    <button className='btn btn-info'>Add to Cart</button>
    </div>
  
</div>
    </div>
      })}

    </div>
  </div>
  </>
}
