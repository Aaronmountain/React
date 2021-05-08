import React, { useState, useCallback, useMemo } from 'react'
import { useFetch } from '../CustomHook/useFetch.js'
import '../CustomHook/App.css'

const url = 'https://course-api.com/javascript-store-products'

const MostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

/*
  1. 只要 state or props 改變，則全部元件都要 re-render ，但有些元件根本沒變動也會重新渲染
*/

const App = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  /* 將 addToCart 下放到每個產品中，只要點擊就會 setCart ，
     因為改變 state 所以導致除了React.memo()裡面的函式，整個頁面又re-render
     
     狀況: 父元件重新渲染後，Object 被重新分配記憶體位址，而導致 React.memo 的 shallowly compare 發現傳遞的 Object 記憶體位址不同。
     解決:
     useCallback 語法:
     const xxx = useCallback( ()=>{}, [] )，第一個參數傳遞是函式，第二個參數為依賴關係
     相依關係沒改變的情況下， useCallback 會記住 Object 的記憶體位址( funtion 也是一個obj)，防止 Object 被重新分配記憶體位址。
  */
     const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

  /* 
    顯示最貴商品價格的函式，內容都一樣卻因為狀態改變，而導致每次都會重新渲染一樣的事情
    因此利用 useMemo
    
    狀況: 重新渲染時，在元件中的 function 被重新呼叫，複雜的程式邏輯被重複執行了一次
    解決:
    useMemo 語法:
    const xxx = useMemo( ()=>{}, [] )，第一個參數傳遞是函式，第二個參數為依賴關係
    相依關係沒改變的情況下，會記住 function 的回傳值，沿用上次的回傳結果
  */
  const mostExpensive = useMemo(() => MostExpensive(products), [
    products,
  ])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default App