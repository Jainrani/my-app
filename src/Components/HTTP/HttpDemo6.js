import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

const ProductList = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return<>
    <h2 className='text-center'>Fetch Products  data - HTTP Demo6</h2>
    <div className='container'>
        <div className='row'>
        {loading ? (
                        <div className="text-center">
                            <FaSpinner className="spinner" />
                        </div>
                    ) : (
                        products.map(product => (
                     <div className='col-sm-3 mb-1' key={product.id}>
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
                        ))
                )}
        

        

</div>
        </div>
    
  </>
}

export default ProductList;
