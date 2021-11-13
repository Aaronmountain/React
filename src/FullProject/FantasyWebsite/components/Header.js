import { Link } from 'react-router-dom';
import { Nav } from './styled.js';

const imgSrc =
  'https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhbnRhc3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';

const Header = () => {
  return (
    <Nav className='py-half'>
      <div className='container'>
        <Link to='/'>
          <img className='logo' width='100' height='100' src={imgSrc} alt='Logo' />
        </Link>
        <ul>
          <li className='mr-1'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mr-1'>
            <Link to='/Fantasy'>Fantasy</Link>
          </li>
          <li className='mr-1'>
            <Link to='/Magic'>Magic</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Header;
