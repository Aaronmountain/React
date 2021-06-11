import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { ProductsList } from '../Action/ActionCreator.js';

const HomePage = () => {
  // const [products, setProducts] = useState([]); 這是原先的 state ，換方法(練 redux)
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_PRODUCTS_URL;

  // function
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(ProductsList(data));
    // setProducts(data);
  };
  // fetch API
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className='mt-5'>
      <Row className='d-flex flex-wrap'>
        {products.list.map((product) => (
          <NavLink
            to={`/${product.id}`}
            key={product.id}
            className='products_Wrap text-decoration-none text-secondary'
          >
            <Col>
              <Card className='mb-5'>
                <Card.Img className='w-50 h-50 m-auto' src={product.image} />
                <Card.Body>
                  <Card.Title className='text-primary'>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: $ {product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </NavLink>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
