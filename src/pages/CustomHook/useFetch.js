import react, { useState, useEffect, useCallback } from 'react';

/*  
  fetchProducts 用 useCallback 記住 reference 位置，只有在 url 改變時才傳宣告函式並執行函式(避免即使每次傳入的 url 都一樣卻又重新宣告一次函式，這樣新函式的 reference 就不一樣了)
  因此 url 改變 fetchProducts 也會一起改變，
  所以 useEffect 只在 url 和 fetchProducts 改變時才執行，不然 url 每次傳進來這個 customHook Effect 都會執行。
  小結:
  useCallback 限定 url 改變時才執行 fetchProducts，
  useEffect 綁定第二個相依關係為 fetchProducts ，根據 fetchProducts 有執行才執行 useEffect
*/
export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    const res = await fetch(url);
    const products = await res.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, [url, fetchProducts]);

  return { loading, products };
};
