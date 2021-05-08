import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../images/KOBE.jpg'

function Product({ image, name, price }) {
  const url = image && image.url;
  return (
    <article className='product'>
      {/* 利用 || 來設定預設值，
      變數url 中 ， image 如果有值就回傳image.url 到變數 url ，
      若沒有，則用defaultImage */}
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price || 999}</p>
    </article>
  )
}

// 利用 propTypes 檢查我們拿到的 props ，而 PropTypes 也可以要求props必須是某種資料類別型態 ( 注意兩個的大小寫 )
// emmt為，rfcp 
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Product
