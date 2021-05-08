import react,{ useState, useEffect, useCallback } from "react";

/*  
  useEffect 第一個相依關係是根據傳遞進來的參數 url 改變時才執行
  第二個相依關係是，別的元件有使用這個 custom Hook，而別的元件重新渲染，因而導致這個 Effect 每次都會執行一開始的那一次，
  而 useCallback 限定 url 改變時執行 fetchProducts， 
  因而再綁定第二個相依關係為 fetchProducts ，根據 fetchProducts 有執行， 才會執行 Effect
*/
export const useFetch = (url) =>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = useCallback(async () => {
    const res = await fetch(url);
    const products = await res.json()
    setProducts(products)
    setLoading(false)
  },[url])

  useEffect(() => {
    fetchProducts()
  }, [url, fetchProducts])
  
  return { loading, products }
}
