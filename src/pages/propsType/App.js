import React from 'react';
import { useFetch } from '../CustomHook/useFetch.js';
import Product from './Product.js';
import '../CustomHook/App.css'

const url = 'https://course-api.com/react-prop-types-example'

function App() {
  // customHook 
  const { products } = useFetch(url)

  return (
    <div className='container'>
      <h2>Products</h2>
      <section className='products'>
        {products.map( product => {
          return <Product key={product.id} {...product} />
        })
        }
      </section>
    </div>
  );
}

export default App
