import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Button, Spinner } from 'react-bootstrap';
import { ProductDetail, RemoveProduct } from '../Action/ActionCreator.js';

const Product = (props) => {
  // const [product, setProduct] = useState([]);  這是原先的 state ，換方法(練 redux)
  const productID = useParams().id;
  const product = useSelector((state) => state.product);
  const { image, title, description, price } = product;
  const dispatch = useDispatch();
  const url = `${process.env.REACT_APP_PRODUCT_URL}/${productID}`;

  // function
  const fetchProductDetail = async () => {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(ProductDetail(data));
    // setProduct(data);
  };

  // fetch API
  useEffect(() => {
    if (product && productID !== '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      fetchProductDetail();
    }
    return () => {
      dispatch(RemoveProduct());
    };
  }, [productID]);

  return (
    <>
      {Object.keys(product).length > 0 ? (
        <Card className='w-75 my-5 mx-auto p-md-5 d-flex align-items-center flex-row flex-mw945-column'>
          <div className='product_Detal_Wrap p-5 p-md-0'>
            <Card.Img className='mw-100' src={image} />
          </div>
          <div className='product_Detal_Wrap'>
            <Card.Body className='mw-100 text-center'>
              <Card.Title className='mb-4'>{title}</Card.Title>
              <Card.Text className='mb-4'>{description}</Card.Text>
              <Card.Text className='mb-4'>Price: ${price}</Card.Text>
              <Button variant='primary'>Add To Cart</Button>
            </Card.Body>
          </div>
        </Card>
      ) : (
        <div className='Loading position-absolute top-50 start-50 translate-middle'>
          <Spinner animation='border' role='status'></Spinner>
        </div>
      )}
    </>
  );
};

export default Product;
