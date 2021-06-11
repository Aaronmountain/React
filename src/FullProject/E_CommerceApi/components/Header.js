import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container className='container d-flex justify-content-between flex-lg-row flex-column'>
        <NavLink className='text-info fw-normal text-decoration-none' to='/'>
          HOME
        </NavLink>
        <Nav className='flex-row'>
          <NavLink to='/' className='text-white fst-italic px-2 text-decoration-none'>
            Home
          </NavLink>
          <NavLink to='/' className='text-white fst-italic px-2 text-decoration-none'>
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
